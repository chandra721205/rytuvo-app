import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  BACKOUT_REASONS,
  buyerBill,
  buyerInterestPaise,
  buyerRiskRank,
  canReleaseLot,
  canWithdrawLot,
  GUNTUR_CHILLI_EXAMPLE,
  lorryNetKg,
  producerPatti,
  resolveWeighbridgeTolerance,
  validateBackout,
  weighbridgeFraudAlert,
  type ProducerDeductionLine,
  type BuyerBill,
  type ProducerPatti,
} from '../rules/bill';

export const DEMO_OTP = '123456';

export interface TradeBag {
  serial: string;
  sellerKg: number | null;
  buyerKg: number | null;
}

export interface TradeBid {
  buyer: string;
  rupees: number;
  at: number;
}

export interface InboxItem {
  to: 'producer' | 'agent' | 'buyer';
  text: string;
  seq: number;
}

export interface DemoTrade {
  bids: TradeBid[];
  inbox: InboxItem[];
  /** 1Tradie stage form values, keyed by stage id then field label. */
  oneTradie: Record<string, Record<string, string>>;
  producerType: 'small' | 'medium' | 'large' | null;
  category: string;
  commodity: string;
  variety: string;
  yard: string;
  bags: number;
  bagKg: number;
  offerRupees: number;
  reserveRupees: number;
  saleRupees: number;
  commissionRate: number;
  lotCreated: boolean;
  engaged: boolean;
  listed: boolean;
  samplingDone: boolean;
  saleConfirmed: boolean;
  withdrawn: boolean;
  withdrawReason: string;
  close: 'open' | 'sold' | 'unsold';
  saleOtpOk: boolean;
  deductionOtpOk: boolean;
  stored: boolean;
  storageLoanPaise: number;
  storageLoanSettled: boolean;
  bagRows: TradeBag[];
  weighLocked: boolean;
  lorryLoadedKg: number | null;
  lorryEmptyKg: number | null;
  fraudAlert: boolean;
  fraudStatus: 'within_tolerance' | 'possible_fraud' | 'tolerance_to_be_defined';
  sharedLorry: boolean;
  deductions: ProducerDeductionLine[];
  producerPaid: boolean;
  producerUtr: string;
  payoutConsentDate: string;
  ewayNumber: string;
  ewayVehicle: string;
  ewayPerson: string;
  ewayPhone: string;
  liftingOtpOk: boolean;
  buyerPaidOn: string;
  buyerPaidPaise: number;
  backoutReason: string;
  backoutOther: string;
  escalate: boolean;
  producerEscalationOtp: boolean;
  agentEscalationOtp: boolean;
  afterBackout: 'next' | 'relist' | null;
  gradeRules: { name: string; note: string }[];
  retestPaid: boolean;
  aiGrade: string;
  receivingIssue: string;
  saleDate: string;
  log: { role: string; action: string }[];
}

const empty = (): DemoTrade => ({
  producerType: null,
  category: 'Spices',
  commodity: 'Chilli',
  variety: 'Teja',
  yard: 'Guntur',
  bags: 63,
  bagKg: 40,
  offerRupees: 22850,
  reserveRupees: 22000,
  saleRupees: 22850,
  commissionRate: 0.02,
  lotCreated: false,
  engaged: false,
  listed: false,
  samplingDone: false,
  saleConfirmed: false,
  withdrawn: false,
  withdrawReason: '',
  close: 'open',
  saleOtpOk: false,
  deductionOtpOk: false,
  stored: false,
  storageLoanPaise: 0,
  storageLoanSettled: false,
  bagRows: [],
  weighLocked: false,
  lorryLoadedKg: null,
  lorryEmptyKg: null,
  fraudAlert: false,
  fraudStatus: 'tolerance_to_be_defined',
  sharedLorry: false,
  deductions: [],
  producerPaid: false,
  producerUtr: '',
  payoutConsentDate: '',
  ewayNumber: '',
  ewayVehicle: '',
  ewayPerson: '',
  ewayPhone: '',
  liftingOtpOk: false,
  buyerPaidOn: '',
  buyerPaidPaise: 0,
  backoutReason: '',
  backoutOther: '',
  escalate: false,
  producerEscalationOtp: false,
  agentEscalationOtp: false,
  afterBackout: null,
  gradeRules: [],
  retestPaid: false,
  aiGrade: '',
  receivingIssue: '',
  saleDate: '2026-10-12',
  log: [],
  bids: [],
  inbox: [],
  oneTradie: {},
});

/** Who hears about an action taken by one role. Every hand-off notifies the other two sides of the trade. */
const AUDIENCE: Record<string, InboxItem['to'][]> = {
  producer: ['agent'],
  agent: ['producer', 'buyer'],
  buyer: ['agent', 'producer'],
};

function note(trade: DemoTrade, role: string, action: string): DemoTrade {
  const inbox = trade.inbox ?? [];
  const seq = (inbox[0]?.seq ?? 0) + 1;
  const items = (AUDIENCE[role] ?? []).map((to, i) => ({ to, text: `${role}: ${action}`, seq: seq + i }));
  return { ...trade, log: [{ role, action }, ...trade.log].slice(0, 24), inbox: [...items.reverse(), ...inbox].slice(0, 60) };
}

function otpOk(code: string): boolean {
  return code.trim() === DEMO_OTP;
}

interface TradeState {
  trade: DemoTrade;
  resetDemo: () => void;
  placeBid: (buyer: string, rupees: number) => string | null;
  autoBid: (buyer: string, maxRupees: number, step?: number) => string | null;
  saveStage: (stage: string, values: Record<string, string>) => void;
  inboxFor: (role: InboxItem['to']) => InboxItem[];
  setProducerType: (value: DemoTrade['producerType']) => void;
  createLot: (patch: Partial<DemoTrade>) => string | null;
  engage: (rate: number, code: string) => string | null;
  listLot: () => string | null;
  setAiGrade: (grade: string) => void;
  completeGrading: () => void;
  confirmSale: (code: string) => string | null;
  closeAuction: (result: 'sold' | 'unsold') => string | null;
  withdraw: (reason: string) => string | null;
  chooseStore: (loanRupees: number) => void;
  settleStorageLoan: (code: string) => string | null;
  setBag: (serial: string, side: 'seller' | 'buyer', kg: number) => void;
  lockWeighment: (code: string) => string | null;
  setLorry: (which: 'loaded' | 'empty', kg: number) => void;
  acceptDeductions: (code: string) => string | null;
  payProducer: (utr: string, code: string) => string | null;
  consentPayout: (date: string, code: string) => string | null;
  saveEway: (patch: Pick<DemoTrade, 'ewayNumber' | 'ewayVehicle' | 'ewayPerson' | 'ewayPhone'>) => string | null;
  confirmLifting: (code: string) => string | null;
  payBuyer: (date: string, amountPaise: number, reference: string) => string | null;
  backOut: (reason: string, other: string) => string | null;
  requestEscalation: () => string | null;
  consentEscalation: (side: 'producer' | 'agent', code: string) => string | null;
  resolveBackout: (choice: 'next' | 'relist') => void;
  addGradeRule: (name: string, note: string) => void;
  addDeduction: (line: ProducerDeductionLine) => string | null;
  payRetest: () => void;
  setReceivingIssue: (text: string) => void;
  patti: () => ProducerPatti;
  bill: () => BuyerBill;
  interestPaise: () => number;
  risk: () => { score: number; band: 'low' | 'watch' | 'high' };
}

function ratesReady(trade: DemoTrade) {
  return {
    lot: {
      bags: trade.bags,
      bagKg: trade.bagKg,
      tareKgPerBag: GUNTUR_CHILLI_EXAMPLE.tareKgPerBag,
      pricePaisePerQuintal: Math.round(trade.saleRupees * 100),
    },
    commissionRate: trade.commissionRate,
    commissionCap: 0.05,
    hamali: GUNTUR_CHILLI_EXAMPLE.hamali,
    securityFee: GUNTUR_CHILLI_EXAMPLE.securityFee,
    deductions: trade.deductions,
    advances: trade.engaged
      ? [{ amountPaise: 5_000_000, givenOn: '2026-09-12', recoveredOn: trade.saleDate, annualRateBps: GUNTUR_CHILLI_EXAMPLE.advanceInterestBps }]
      : [],
    storageLoanPaise: trade.stored ? trade.storageLoanPaise : 0,
    saleDate: trade.saleDate,
    holidays: GUNTUR_CHILLI_EXAMPLE.holidays,
    farmerConsentDate: trade.payoutConsentDate || undefined,
  };
}

export const useTrade = create<TradeState>()(
  persist(
    (set, get) => ({
      trade: empty(),
      resetDemo: () => set({ trade: empty() }),
      placeBid: (buyer, rupees) => {
        const trade = get().trade;
        if (!trade.listed || trade.close !== 'open') return 'This lot is not open for bids';
        if (!Number.isFinite(rupees) || rupees <= 0) return 'Enter a bid per quintal';
        const best = (trade.bids ?? []).reduce((m, b) => Math.max(m, b.rupees), 0);
        if (rupees <= best) return 'Bid must beat the current best bid';
        // The reserve stays hidden: the buyer only learns the bid was not accepted.
        if (rupees < trade.reserveRupees) return 'Bid not accepted';
        const bids = [{ buyer, rupees, at: (trade.bids?.length ?? 0) + 1 }, ...(trade.bids ?? [])];
        set({ trade: note({ ...trade, bids, saleRupees: rupees }, 'buyer', `Bid ₹${rupees}/q by ${buyer}`) });
        return null;
      },
      autoBid: (buyer, maxRupees, step = 50) => {
        const trade = get().trade;
        const best = (trade.bids ?? []).reduce((m, b) => Math.max(m, b.rupees), 0);
        const target = Math.max(best + step, trade.reserveRupees);
        if (target > maxRupees) {
          set({ trade: note(trade, 'buyer', `Auto-bid max ₹${maxRupees} is below the next step ₹${target}: raise or stop`) });
          return `Outbid: next step ₹${target} is above your max ₹${maxRupees}`;
        }
        return get().placeBid(buyer, target);
      },
      saveStage: (stage, values) =>
        set((state) => ({ trade: { ...state.trade, oneTradie: { ...(state.trade.oneTradie ?? {}), [stage]: values } } })),
      inboxFor: (role) => (get().trade.inbox ?? []).filter((item) => item.to === role),
      setProducerType: (value) => set((state) => ({ trade: note({ ...state.trade, producerType: value }, 'producer', `Type ${value}`) })),
      createLot: (patch) => {
        const next = { ...get().trade, ...patch };
        if (!next.category || !next.commodity || !next.variety || !next.yard) return 'Choose category, commodity, variety and yard';
        if (!Number.isFinite(next.bags) || next.bags < 1) return 'Enter at least one bag';
        if (!Number.isFinite(next.bagKg) || next.bagKg <= 0) return 'Enter the gross kg per bag';
        if (next.offerRupees <= 0 || next.reserveRupees <= 0) return 'Offer and reserve must be above zero';
        if (next.reserveRupees > next.offerRupees) return 'Reserve cannot sit above the offer';
        const rows: TradeBag[] = Array.from({ length: Math.min(next.bags, 8) }, (_, index) => ({
          serial: `B-${String(index + 1).padStart(2, '0')}`,
          sellerKg: null,
          buyerKg: null,
        }));
        set({ trade: note({ ...next, lotCreated: true, saleRupees: next.offerRupees, bagRows: rows, withdrawn: false }, 'producer', 'Lot created') });
        return null;
      },
      engage: (rate, code) => {
        if (!get().trade.lotCreated) return 'Create the lot first';
        if (rate <= 0 || rate > 0.05) return 'Commission must be between 0 and the 5% example cap';
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, commissionRate: rate, engaged: true }, 'producer', 'Agent engaged') }));
        return null;
      },
      listLot: () => {
        const trade = get().trade;
        if (!trade.engaged) return 'The producer has not confirmed the engagement';
        const release = canReleaseLot({ stored: trade.stored, storageLoanPaise: trade.storageLoanPaise, loanSettled: trade.storageLoanSettled });
        if (!release.ok) return 'Settle the storage loan before listing';
        set((state) => ({ trade: note({ ...state.trade, listed: true }, 'agent', 'Lot listed') }));
        return null;
      },
      setAiGrade: (grade) => set((state) => ({ trade: { ...state.trade, aiGrade: grade } })),
      completeGrading: () => set((state) => ({ trade: note({ ...state.trade, samplingDone: true }, 'producer', 'Grading done') })),
      confirmSale: (code) => {
        if (get().trade.close !== 'sold') return 'Close the auction as sold first';
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, saleOtpOk: true, saleConfirmed: true }, 'producer', 'Sale OTP') }));
        return null;
      },
      closeAuction: (result) => {
        if (!get().trade.listed) return 'The agent has not listed this lot';
        set((state) => ({ trade: note({ ...state.trade, close: result }, 'agent', result === 'sold' ? 'Sold' : 'Unsold') }));
        return null;
      },
      withdraw: (reason) => {
        const trade = get().trade;
        const gate = canWithdrawLot(trade);
        if (!gate.ok) return 'Withdrawal is blocked after sampling and sale confirmation';
        if (!reason.trim()) return 'Enter a reason';
        set({ trade: note({ ...trade, withdrawn: true, withdrawReason: reason, listed: false, close: 'open' }, 'producer', 'Lot withdrawn') });
        return null;
      },
      chooseStore: (loanRupees) =>
        set((state) => ({
          trade: note(
            { ...state.trade, stored: true, storageLoanPaise: Math.round(loanRupees * 100), storageLoanSettled: loanRupees <= 0, listed: false },
            'producer',
            'Stored',
          ),
        })),
      settleStorageLoan: (code) => {
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, storageLoanSettled: true }, 'producer', 'Storage loan settled') }));
        return null;
      },
      setBag: (serial, side, kg) =>
        set((state) => ({
          trade: {
            ...state.trade,
            weighLocked: false,
            bagRows: state.trade.bagRows.map((row) => (row.serial === serial ? { ...row, [side === 'seller' ? 'sellerKg' : 'buyerKg']: kg } : row)),
          },
        })),
      lockWeighment: (code) => {
        if (!otpOk(code)) return 'OTP must be 123456';
        const open = get().trade.bagRows.some((row) => row.sellerKg == null || row.buyerKg == null || Math.abs(row.sellerKg - row.buyerKg) > 0.2);
        if (open) return 'Each bag must match within 0.2 kg';
        set((state) => ({ trade: note({ ...state.trade, weighLocked: true }, 'agent', 'Weighment locked') }));
        return null;
      },
      setLorry: (which, kg) =>
        set((state) => {
          const trade = { ...state.trade, [which === 'loaded' ? 'lorryLoadedKg' : 'lorryEmptyKg']: kg };
          const bagNet = trade.bagRows.reduce((sum, row) => sum + (row.sellerKg ?? 0), 0);
          const lorry = trade.lorryLoadedKg != null && trade.lorryEmptyKg != null ? lorryNetKg(trade.lorryLoadedKg, trade.lorryEmptyKg) : null;
          const tolerance = resolveWeighbridgeTolerance(GUNTUR_CHILLI_EXAMPLE.weighbridgeTolerance, trade.sharedLorry);
          const check = lorry != null && bagNet > 0 ? weighbridgeFraudAlert({ lorryNetKg: lorry, bagNetKg: bagNet, tolerance }) : { alert: false, status: 'tolerance_to_be_defined' as const };
          trade.fraudAlert = check.alert;
          trade.fraudStatus = check.status;
          return { trade: note(trade, 'agent', which === 'loaded' ? 'Gate entry' : 'Gate exit') };
        }),
      acceptDeductions: (code) => {
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, deductionOtpOk: true }, 'producer', 'Deductions accepted') }));
        return null;
      },
      payProducer: (utr, code) => {
        if (!get().trade.deductionOtpOk) return 'The producer has not accepted the patti';
        if (!utr.trim()) return 'Enter the UTR';
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, producerPaid: true, producerUtr: utr }, 'agent', 'Producer paid') }));
        return null;
      },
      consentPayout: (date, code) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return 'Use a YYYY-MM-DD date';
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, payoutConsentDate: date }, 'producer', 'Later payout accepted') }));
        return null;
      },
      saveEway: (patch) => {
        if (!patch.ewayNumber.trim() || !patch.ewayVehicle.trim() || !patch.ewayPerson.trim() || !patch.ewayPhone.trim()) {
          return 'Number, vehicle, person and phone are required';
        }
        set((state) => ({ trade: note({ ...state.trade, ...patch }, 'buyer', 'E-way bill uploaded') }));
        return null;
      },
      confirmLifting: (code) => {
        if (!get().trade.ewayNumber) return 'The buyer has not uploaded the e-way bill';
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({ trade: note({ ...state.trade, liftingOtpOk: true }, 'agent', 'Lifting confirmed') }));
        return null;
      },
      payBuyer: (date, amountPaise, reference) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return 'Use a YYYY-MM-DD date';
        if (amountPaise <= 0) return 'Enter an amount';
        if (!reference.trim()) return 'Enter a reference';
        set((state) => ({ trade: note({ ...state.trade, buyerPaidOn: date, buyerPaidPaise: amountPaise }, 'buyer', 'Buyer payment') }));
        return null;
      },
      backOut: (reason, other) => {
        const check = validateBackout(reason, other);
        if (!check.ok) return check.reason === 'other_text_required' ? 'Other needs a short note' : 'Pick a reason';
        set((state) => ({ trade: note({ ...state.trade, backoutReason: reason, backoutOther: other, close: 'open' }, 'buyer', 'Back-out') }));
        return null;
      },
      requestEscalation: () => {
        if (!get().trade.backoutReason) return 'Record the back-out first';
        set((state) => ({ trade: note({ ...state.trade, escalate: true }, 'buyer', 'Escalation requested') }));
        return null;
      },
      consentEscalation: (side, code) => {
        if (!get().trade.escalate) return 'The buyer has not asked for escalation';
        if (!otpOk(code)) return 'OTP must be 123456';
        set((state) => ({
          trade: note(
            { ...state.trade, [side === 'producer' ? 'producerEscalationOtp' : 'agentEscalationOtp']: true },
            side,
            'Escalation OTP',
          ),
        }));
        return null;
      },
      resolveBackout: (choice) =>
        set((state) => ({
          trade: note(
            { ...state.trade, afterBackout: choice, listed: choice === 'relist', close: 'open' },
            'agent',
            choice === 'next' ? 'Next bidder' : 'Re-listed',
          ),
        })),
      addDeduction: (line) => {
        if (!Number.isInteger(line.amountPaise) || line.amountPaise <= 0) return 'Enter an amount in paise';
        if (line.kind === 'other' && !line.label.trim()) return 'Other expenses need a label';
        set((state) => ({ trade: note({ ...state.trade, deductions: [...state.trade.deductions, line] }, 'agent', 'Deduction') }));
        return null;
      },
      addGradeRule: (name, noteText) => {
        if (!name.trim()) return;
        set((state) => ({ trade: { ...state.trade, gradeRules: [...state.trade.gradeRules, { name, note: noteText }] } }));
      },
      payRetest: () => set((state) => ({ trade: note({ ...state.trade, retestPaid: true }, 'buyer', 'Re-test paid') })),
      setReceivingIssue: (text) => set((state) => ({ trade: { ...state.trade, receivingIssue: text } })),
      patti: () => producerPatti(ratesReady(get().trade)),
      bill: () =>
        buyerBill({
          lot: ratesReady(get().trade).lot,
          marketFeeRate: GUNTUR_CHILLI_EXAMPLE.marketFeeRate,
          saleDate: get().trade.saleDate,
          gstEnabled: false,
          tdsEnabled: false,
        }),
      interestPaise: () => {
        const bill = get().bill();
        const trade = get().trade;
        if (!trade.buyerPaidOn) return 0;
        return buyerInterestPaise({ billTotalPaise: bill.agentReceivablePaise, dueDate: bill.dueDate, asOf: trade.buyerPaidOn });
      },
      risk: () => buyerRiskRank({ overdueDays: get().interestPaise() > 0 ? 5 : 0, disputes: get().trade.escalate ? 1 : 0, backouts: get().trade.backoutReason ? 1 : 0, onTimePayments: 3 }),
    }),
    {
      name: 'rytuvo-trade-v2',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export { BACKOUT_REASONS };
