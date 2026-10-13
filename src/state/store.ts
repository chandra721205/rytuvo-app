import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import type { BagEntry, Bid, Bootstrap, BuyerPurpose, Language, Member, RoleCode, Stakeholder } from '../domain/types';
import { mockClient } from '../data/client';
import { classifyBid, isShillBidder, nextProxyAction } from '../rules/auction';
import { validatePayment } from '../rules/bill';
import { checkLimit } from '../rules/rbac';
import { applyQueue, bagState, canLockWeighment } from '../rules/weighment';

export interface Session {
  userId: string;
  orgId: string;
  memberId: string;
  roleCode: RoleCode;
  stakeholder: Stakeholder;
  language: Language;
  offline: boolean;
  purposes: BuyerPurpose[];
  phone: string;
}

export interface Persona {
  memberId: string;
  stakeholder: Stakeholder;
  label: string;
  labelTe: string;
}

export const personas: Persona[] = [
  { memberId: 'm-ramesh', stakeholder: 'producer', label: 'Producer · Ramesh', labelTe: 'రైతు · రమేష్' },
  { memberId: 'm-venkat', stakeholder: 'agent', label: 'Commission agent · Venkata Rao', labelTe: 'కమీషన్ ఏజెంట్ · వెంకటరావు' },
  { memberId: 'm-sai', stakeholder: 'buyer', label: 'Buyer · Sai Exports', labelTe: 'కొనుగోలుదారు · సాయి ఎక్స్‌పోర్ట్స్' },
  { memberId: 'm-arjun', stakeholder: 'buyer', label: 'Purchaser · Arjun', labelTe: 'కొనుగోలుదారు · అర్జున్' },
  { memberId: 'm-harish', stakeholder: 'inspector', label: 'Inspector · Harish', labelTe: 'తనిఖీ · హరీష్' },
  { memberId: 'm-divya', stakeholder: 'lab', label: 'Lab · Divya', labelTe: 'ల్యాబ్ · దివ్య' },
  { memberId: 'm-meena', stakeholder: 'verifier', label: 'Quality verifier · Meena', labelTe: 'నాణ్యత · మీనా' },
  { memberId: 'm-nagaraju', stakeholder: 'transport', label: 'Driver · Nagaraju', labelTe: 'డ్రైవర్ · నాగరాజు' },
  { memberId: 'm-ln', stakeholder: 'storage', label: 'Warehouse · Lakshmi Narayana', labelTe: 'గిడ్డంగి · లక్ష్మీ నారాయణ' },
  { memberId: 'm-mohan', stakeholder: 'bank', label: 'Bank · Mohan Rao', labelTe: 'బ్యాంక్ · మోహన్ రావు' },
  { memberId: 'm-sowmya', stakeholder: 'insurance', label: 'Insurance · Sowmya', labelTe: 'బీమా · సౌమ్య' },
  { memberId: 'm-srinivas', stakeholder: 'yard', label: 'Yard · Srinivas', labelTe: 'యార్డ్ · శ్రీనివాస్' },
  { memberId: 'm-input', stakeholder: 'seller', label: 'Input seller · Srinivas Agro', labelTe: 'ఇన్‌పుట్ · శ్రీనివాస్' },
  { memberId: 'm-service', stakeholder: 'service', label: 'Service · Ravi Sprayers', labelTe: 'సేవ · రవి స్ప్రేయర్స్' },
  { memberId: 'm-anitha', stakeholder: 'admin', label: 'Platform admin · Anitha', labelTe: 'అడ్మిన్ · అనిత' },
];

const stakeholderOrg: Record<string, Stakeholder> = {
  producer: 'producer',
  agent: 'agent',
  buyer: 'buyer',
  inspector: 'inspector',
  transport: 'transport',
  storage: 'storage',
  bank: 'bank',
  insurance: 'insurance',
  yard: 'yard',
  seller: 'seller',
  service: 'service',
  platform: 'admin',
};

function sessionFor(data: Bootstrap, memberId: string, stakeholder?: Stakeholder): Session {
  const member = data.members.find((item) => item.id === memberId) ?? data.members[0]!;
  const user = data.users.find((item) => item.id === member.userId)!;
  const org = data.orgs.find((item) => item.id === member.orgId)!;
  return {
    userId: user.id,
    orgId: org.id,
    memberId: member.id,
    roleCode: member.roleCode,
    stakeholder: stakeholder ?? stakeholderOrg[org.type] ?? 'producer',
    language: user.language,
    offline: false,
    purposes: member.purposes ?? org.purposes ?? [],
    phone: user.phone,
  };
}

function refreshBags(bags: BagEntry[], tolerance = 0.2): BagEntry[] {
  return bags.map((bag) => ({
    ...bag,
    state: bagState(bag.sellerKg, bag.buyerKg, { toleranceKg: tolerance, resolved: bag.state === 'RESOLVED' && bag.sellerKg != null && bag.buyerKg != null && Math.abs(bag.sellerKg - bag.buyerKg) <= tolerance }),
  }));
}

interface AppState extends Bootstrap {
  ready: boolean;
  session: Session;
  toast: string | null;
  challengeId: string | null;
  devCode: string | null;
  selectedPurposes: BuyerPurpose[];
  boot: () => void;
  setLanguage: (language: Language) => void;
  setOffline: (offline: boolean) => void;
  enterAs: (memberId: string, stakeholder?: Stakeholder) => void;
  switchRole: (memberId: string) => void;
  requestOtp: (phone: string, purpose?: string) => void;
  verifyOtp: (code: string) => boolean;
  showToast: (message: string) => void;
  togglePurpose: (purpose: BuyerPurpose) => void;
  setBagWeight: (side: 'seller' | 'buyer', serial: string, kg: number) => void;
  flushWeighmentQueue: () => void;
  confirmWeighmentOtp: (side: 'seller' | 'buyer', code: string) => void;
  setReserve: (lotId: string, offerPaise: number, reservePaise: number, autoAccept: boolean) => void;
  placeBid: (lotId: string, pricePaise: number) => void;
  setAutoBid: (lotId: string, maxPaise: number, stepPaise: number) => void;
  resolveOutbid: (autoBidId: string, action: 'raise' | 'stop' | 'letgo', nextMax?: number) => void;
  recordPartial: (billId: string, amountPaise: number, reference: string) => void;
  approveWaiver: (billId: string, waiverPaise: number, code: string) => void;
}

const initial = mockClient.bootstrap();

export const useApp = create<AppState>((set, get) => ({
  ...initial,
  ready: true,
  session: sessionFor(initial, 'm-ramesh'),
  toast: null,
  challengeId: null,
  devCode: null,
  selectedPurposes: ['trader'],
  boot: () => set({ ...mockClient.bootstrap(), ready: true }),
  setLanguage: (language) => {
    AsyncStorage.setItem(LANG_KEY, language).catch(() => undefined);
    set((state) => ({ session: { ...state.session, language } }));
  },
  setOffline: (offline) =>
    set((state) => ({
      session: { ...state.session, offline },
      weighment: { ...state.weighment, offline },
    })),
  enterAs: (memberId, stakeholder) => set((state) => ({ session: { ...sessionFor(state, memberId, stakeholder), language: state.session.language, offline: state.session.offline } })),
  switchRole: (memberId) =>
    set((state) => {
      const member = state.members.find((item) => item.id === memberId);
      if (!member || member.orgId !== state.session.orgId) return state;
      return { session: { ...state.session, memberId, roleCode: member.roleCode, purposes: member.purposes ?? state.session.purposes } };
    }),
  requestOtp: (phone, purpose) => {
    const challenge = mockClient.requestOtp(phone, purpose);
    set({ challengeId: challenge.id, devCode: challenge.code, toast: 'DEV ONLY · OTP 123456' });
  },
  verifyOtp: (code) => {
    const id = get().challengeId;
    if (!id) {
      set({ toast: 'Request an OTP first' });
      return false;
    }
    const result = mockClient.verifyOtp(id, code);
    set({ toast: result.ok ? 'OTP confirmed' : `OTP ${result.reason ?? 'failed'}` });
    return result.ok;
  },
  showToast: (message) => set({ toast: message }),
  togglePurpose: (purpose) =>
    set((state) => ({
      selectedPurposes: state.selectedPurposes.includes(purpose)
        ? state.selectedPurposes.filter((item) => item !== purpose)
        : [...state.selectedPurposes, purpose],
    })),
  setBagWeight: (side, serial, kg) =>
    set((state) => {
      const entry = { side, serial, kg, at: new Date().toISOString() };
      if (state.session.offline || state.weighment.offline) {
        return {
          weighment: { ...state.weighment, queue: [...state.weighment.queue, entry] },
          toast: 'Saved on this phone · waiting to sync',
        };
      }
      const bags = refreshBags(
        state.weighment.bags.map((bag) => (bag.serial === serial ? { ...bag, [side === 'seller' ? 'sellerKg' : 'buyerKg']: kg, state: bag.state } : bag)),
      );
      return {
        weighment: { ...state.weighment, bags, sellerLocked: false, buyerLocked: false },
        toast: bags.find((bag) => bag.serial === serial)?.state === 'MISMATCH' ? 'Discrepancy on this bag' : 'Bag synced',
      };
    }),
  flushWeighmentQueue: () =>
    set((state) => {
      const applied = applyQueue(state.weighment.bags, state.weighment.queue);
      return {
        session: { ...state.session, offline: false },
        weighment: { ...state.weighment, offline: false, queue: [], bags: refreshBags(applied), sellerLocked: false, buyerLocked: false },
        toast: 'Queue compared and synced',
      };
    }),
  confirmWeighmentOtp: (side, code) => {
    const challenge = mockClient.requestOtp(get().session.phone, 'WEIGHMENT_CONFIRM');
    const ok = mockClient.verifyOtp(challenge.id, code);
    if (!ok.ok) {
      set({ toast: 'OTP did not match' });
      return;
    }
    set((state) => {
      const weighment = { ...state.weighment, sellerLocked: side === 'seller' ? true : state.weighment.sellerLocked, buyerLocked: side === 'buyer' ? true : state.weighment.buyerLocked };
      const lock = canLockWeighment({ bags: weighment.bags, sellerOtp: weighment.sellerLocked, buyerOtp: weighment.buyerLocked });
      return { weighment, toast: lock.ok ? 'Weighment locked' : 'OTP saved · still waiting for the other side' };
    });
  },
  setReserve: (lotId, offerPaise, reservePaise, autoAccept) =>
    set((state) => ({
      lots: state.lots.map((lot) => (lot.id === lotId ? { ...lot, offerPaise, reservePaise, autoAccept } : lot)),
      toast: 'Reserve updated · producer OTP recorded in the audit',
    })),
  placeBid: (lotId, pricePaise) =>
    set((state) => {
      const lot = state.lots.find((item) => item.id === lotId);
      const member = state.members.find((item) => item.id === state.session.memberId);
      if (!lot || !member) return state;
      const shill = isShillBidder({ bidderOrgId: member.orgId, lotOrgId: lot.orgId, linkedAgentOrgIds: ['org-rao'] });
      const limit = checkLimit(member.roleCode, 'bid_per_q', pricePaise, member.limits);
      const decision = classifyBid({
        pricePaise,
        reservePaise: lot.reservePaise,
        offerPaise: lot.offerPaise,
        autoAccept: lot.autoAccept,
        shill,
        withinLimit: limit.allowed,
      });
      const bid: Bid = {
        id: `bid-${Date.now()}`,
        lotId,
        bidderOrgId: member.orgId,
        bidderMemberId: member.id,
        label: 'D',
        pricePaise,
        qtyKg: lot.qtyKg,
        source: 'manual',
        status: decision.outcome === 'leading' ? 'leading' : decision.outcome === 'accepted_pending_otp' ? 'accepted' : decision.outcome === 'pending_approval' ? 'pending_approval' : decision.outcome === 'blocked_shill' ? 'blocked_shill' : 'rejected_below_reserve',
        createdAt: new Date().toISOString(),
      };
      return { bids: [bid, ...state.bids], toast: decision.buyerMessage.replaceAll('_', ' ') };
    }),
  setAutoBid: (lotId, maxPaise, stepPaise) =>
    set((state) => {
      const member = state.members.find((item) => item.id === state.session.memberId);
      if (!member) return state;
      const limit = checkLimit(member.roleCode, 'bid_per_q', maxPaise, member.limits);
      const lot = state.lots.find((item) => item.id === lotId);
      const best = state.bids.filter((bid) => bid.lotId === lotId && bid.status !== 'rejected_below_reserve' && bid.status !== 'blocked_shill').sort((a, b) => b.pricePaise - a.pricePaise)[0];
      const proxy = nextProxyAction({
        myMaxPaise: maxPaise,
        stepPaise,
        myMaxSetAt: new Date().toISOString(),
        bestPricePaise: best?.pricePaise ?? 0,
        bestIsMine: best?.bidderMemberId === member.id,
        bestSetAt: best?.createdAt,
      });
      const status = !limit.allowed ? 'pending_approval' : proxy.action === 'outbid' ? 'outbid' : 'active';
      return {
        autoBids: [
          { id: `ab-${Date.now()}`, lotId, memberId: member.id, maxPaise, stepPaise, qtyKg: lot?.qtyKg ?? 0, status, maxSetAt: new Date().toISOString() },
          ...state.autoBids,
        ],
        toast: !limit.allowed ? 'Above your limit · sent to the owner' : proxy.action === 'outbid' ? 'Outbid over your max' : 'Auto-bid is on · suggestion only, you still confirm',
      };
    }),
  resolveOutbid: (autoBidId, action, nextMax) =>
    set((state) => ({
      autoBids: state.autoBids.map((item) => {
        if (item.id !== autoBidId) return item;
        if (action === 'stop' || action === 'letgo') return { ...item, status: 'stopped' as const };
        return { ...item, maxPaise: nextMax ?? item.maxPaise, status: 'pending_approval' as const };
      }),
      toast: action === 'raise' ? 'Owner approval requested · no money moved' : 'Auto-bid stopped',
    })),
  recordPartial: (billId, amountPaise, reference) =>
    set((state) => {
      const bill = state.bills.find((item) => item.id === billId);
      if (!bill) return state;
      const check = validatePayment({
        amountPaise,
        outstandingPaise: bill.principalPaise,
        mode: 'neft',
        reference,
        existingReferences: bill.payments.map((payment) => payment.reference ?? ''),
      });
      if (!check.ok) return { ...state, toast: check.reason };
      return {
        bills: state.bills.map((item) =>
          item.id === billId
            ? {
                ...item,
                payments: [
                  ...item.payments,
                  { id: `pay-${Date.now()}`, date: '2026-10-26', amountPaise, mode: 'neft' as const, reference, recordedBy: state.session.memberId, status: 'recorded' as const },
                ],
              }
            : item,
        ),
        toast: 'Payment recorded · not reconciled by the same person',
      };
    }),
  approveWaiver: (billId, waiverPaise, code) => {
    const challenge = mockClient.requestOtp(get().session.phone, 'WAIVER_APPROVE');
    const ok = mockClient.verifyOtp(challenge.id, code);
    if (!ok.ok) {
      set({ toast: 'Waiver OTP failed' });
      return;
    }
    set((state) => ({
      bills: state.bills.map((bill) => (bill.id === billId ? { ...bill, waiverPaise } : bill)),
      toast: 'Waiver approved · audit keeps before and after',
    }));
  },
}));

export function memberById(members: Member[], id: string): Member | undefined {
  return members.find((member) => member.id === id);
}

/** The language choice survives app restarts (1.2.1 fix: it reset to the seed language on every launch). */
export const LANG_KEY = 'rytuvo-language';
AsyncStorage.getItem(LANG_KEY)
  .then((value) => {
    if (value === 'en' || value === 'te') useApp.setState((state) => ({ session: { ...state.session, language: value } }));
  })
  .catch(() => undefined);
