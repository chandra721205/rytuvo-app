/** Typed domain model for the Rytuvo agri-trading ecosystem. */

export type Language = 'en' | 'te';

export type Stakeholder =
  | 'onboarding'
  | 'producer'
  | 'agent'
  | 'buyer'
  | 'inspector'
  | 'verifier'
  | 'lab'
  | 'transport'
  | 'storage'
  | 'bank'
  | 'insurance'
  | 'yard'
  | 'seller'
  | 'service'
  | 'shared'
  | 'admin'
  | 'backoffice';

export type OrgType =
  | 'producer'
  | 'agent'
  | 'buyer'
  | 'inspector'
  | 'transport'
  | 'storage'
  | 'bank'
  | 'insurance'
  | 'yard'
  | 'seller'
  | 'service'
  | 'platform';

export type BuyerPurpose = 'trader' | 'processor' | 'sourcing';

export type RoleCode =
  | 'PR_OWNER'
  | 'PR_MANAGER'
  | 'PR_WORKER'
  | 'CA_OWNER'
  | 'CA_SALES'
  | 'CA_MUNIM'
  | 'CA_FIELD'
  | 'CA_CLERK'
  | 'BY_OWNER'
  | 'BY_PURCHASER'
  | 'BY_QV'
  | 'BY_ACCOUNTS'
  | 'BY_LOGISTICS'
  | 'BY_PLANT'
  | 'BY_QA'
  | 'BY_SUPERVISOR'
  | 'BY_CRM'
  | 'BY_EXPORT'
  | 'IN_HEAD'
  | 'IN_FIELD'
  | 'IN_TECH'
  | 'TR_OWNER'
  | 'TR_DISPATCH'
  | 'TR_DRIVER'
  | 'ST_MANAGER'
  | 'ST_GATE'
  | 'ST_KEEPER'
  | 'BK_RM'
  | 'BK_CREDIT'
  | 'BK_RISK'
  | 'IS_UW'
  | 'IS_SURVEYOR'
  | 'IS_CLAIMS'
  | 'YD_ADMIN'
  | 'YD_SUPER'
  | 'YD_WB'
  | 'INP_OWNER'
  | 'INP_SALES'
  | 'SP_OWNER'
  | 'SP_TECH'
  | 'PL_SUPER'
  | 'PL_KYC'
  | 'PL_SUPPORT'
  | 'PL_FIN'
  | 'PL_AUDIT';

export type Permission =
  | 'lot.list'
  | 'lot.create'
  | 'bid.accept'
  | 'bid.place'
  | 'reserve.view'
  | 'reserve.set'
  | 'payment.record'
  | 'payment.reconcile'
  | 'weighment.enter'
  | 'weighment.otp'
  | 'qc.sign'
  | 'team.manage'
  | 'advance.record'
  | 'bill.create'
  | 'bill.confirm'
  | 'kyc.review'
  | 'rules.edit'
  | 'rules.view'
  | 'autobid.set'
  | 'autobid.approve'
  | 'waiver.request'
  | 'waiver.approve'
  | 'inspection.record'
  | 'trip.operate'
  | 'warehouse.operate'
  | 'finance.review'
  | 'insurance.review'
  | 'yard.operate'
  | 'service.fulfil'
  | 'audit.read';

export type LimitKey =
  | 'bid_per_q'
  | 'deal_value'
  | 'daily_value'
  | 'payment_value'
  | 'advance_value'
  | 'sanction_value'
  | 'claim_value'
  | 'quote_value'
  | 'batch_kg';

export type OtpPurpose =
  | 'LOGIN'
  | 'RELATIONSHIP_ACCEPT'
  | 'DEAL_CONFIRM'
  | 'WEIGHMENT_CONFIRM'
  | 'BILL_CONFIRM'
  | 'PAYMENT_CONFIRM'
  | 'HANDOVER'
  | 'DELIVERY'
  | 'STOCK_RELEASE'
  | 'RESERVE_EDIT'
  | 'WAIVER_APPROVE'
  | 'TERMS_CONFIRM'
  | 'AUTOBID_APPROVE';

export interface User {
  id: string;
  name: string;
  nameTe: string;
  phone: string;
  language: Language;
  village?: string;
  district?: string;
}

export interface Org {
  id: string;
  type: OrgType;
  name: string;
  nameTe: string;
  status: 'pending' | 'approved' | 'suspended';
  purposes?: BuyerPurpose[];
  yardIds: string[];
}

export interface Member {
  id: string;
  orgId: string;
  userId: string;
  roleCode: RoleCode;
  status: 'invited' | 'active' | 'revoked';
  purposes?: BuyerPurpose[];
  limits: Partial<Record<LimitKey, number>>;
}

export interface Category {
  id: string;
  name: string;
  nameTe: string;
}

export interface Commodity {
  id: string;
  categoryId: string;
  name: string;
  nameTe: string;
  units: ('quintal' | 'kg' | 'bale' | 'candy')[];
  packing: string[];
  standardBagKg: number;
}

export interface Variety {
  id: string;
  commodityId: string;
  name: string;
  nameTe: string;
  grades: string[];
}

export interface Yard {
  id: string;
  name: string;
  nameTe: string;
  state: string;
  district: string;
  language: Language;
  commodityIds: string[];
  association: string;
  open: string;
  close: string;
  commissionPct: number;
  marketFeePct: number;
  bagToleranceKg: number;
  qtyVariancePct: number;
  inspection: 'required' | 'recommended';
}

export interface PaymentRule {
  id: string;
  yardId: string;
  commodityId: string;
  association: string;
  creditDays: number;
  annualRate: number;
  verified: boolean;
  source: 'association' | 'regulatory' | 'yard';
}

export type LotStatus =
  | 'draft'
  | 'listed'
  | 'bidding'
  | 'sold'
  | 'unsold'
  | 'weighment'
  | 'billed'
  | 'settled'
  | 'stored';

export interface Lot {
  id: string;
  token: string;
  orgId: string;
  producerName: string;
  commodityId: string;
  varietyId: string;
  yardId: string;
  grade: string;
  bags: number;
  qtyKg: number;
  offerPaise: number;
  reservePaise: number;
  autoAccept: boolean;
  status: LotStatus;
  identityMasked: boolean;
  inspection: 'not_booked' | 'booked' | 'done';
  closesAt: string;
}

export type BidStatus =
  | 'leading'
  | 'outbid'
  | 'rejected_below_reserve'
  | 'pending_approval'
  | 'accepted'
  | 'withdrawn'
  | 'blocked_shill';

export interface Bid {
  id: string;
  lotId: string;
  bidderOrgId: string;
  bidderMemberId: string;
  label: string;
  pricePaise: number;
  qtyKg: number;
  source: 'manual' | 'ai';
  status: BidStatus;
  createdAt: string;
}

export interface AutoBid {
  id: string;
  lotId: string;
  memberId: string;
  maxPaise: number;
  stepPaise: number;
  qtyKg: number;
  status: 'active' | 'paused' | 'outbid' | 'pending_approval' | 'stopped';
  maxSetAt: string;
}

export type BagState = 'PENDING' | 'MATCHED' | 'MISMATCH' | 'RESOLVED' | 'QUEUED';

export interface BagEntry {
  serial: string;
  sellerKg: number | null;
  buyerKg: number | null;
  state: BagState;
}

export interface Weighment {
  id: string;
  lotId: string;
  token: string;
  bags: BagEntry[];
  sellerLocked: boolean;
  buyerLocked: boolean;
  offline: boolean;
  queue: { side: 'seller' | 'buyer'; serial: string; kg: number; at: string }[];
}

export interface Payment {
  id: string;
  date: string;
  amountPaise: number;
  mode: 'upi' | 'neft' | 'cash' | 'cheque';
  reference?: string;
  recordedBy: string;
  reconciledBy?: string;
  status: 'recorded' | 'reconciled' | 'rejected';
}

export interface Bill {
  id: string;
  billNo: string;
  lotId: string;
  buyerOrgId: string;
  sellerOrgId: string;
  saleDate: string;
  dueDate: string;
  qtyKg: number;
  pricePaisePerQ: number;
  commodityPaise: number;
  packingPaise: number;
  principalPaise: number;
  ruleId: string;
  payments: Payment[];
  waiverPaise: number;
  termsStatus: 'proposed' | 'confirmed';
}

export interface NotificationItem {
  id: string;
  audience: Stakeholder | 'all';
  title: string;
  titleTe: string;
  body: string;
  bodyTe: string;
  tone: 'info' | 'warning' | 'danger' | 'success';
  at: string;
  href: string;
}

export interface Dispute {
  id: string;
  lotId: string;
  title: string;
  status: 'open' | 'yard' | 'resolved';
  summary: string;
}

export interface Trip {
  id: string;
  lotToken: string;
  from: string;
  to: string;
  vehicle: string;
  driver: string;
  status: 'available' | 'loading' | 'in_transit' | 'delivered';
  farePaise: number;
}

export interface InspectionJob {
  id: string;
  lotToken: string;
  commodity: string;
  yard: string;
  moisture: number;
  status: 'assigned' | 'sampling' | 'lab' | 'passed' | 'failed';
}

export interface LoanFile {
  id: string;
  applicant: string;
  amountPaise: number;
  score: number;
  status: 'applied' | 'appraisal' | 'sanctioned' | 'disbursed' | 'overdue';
  collateral: string;
}

export interface Policy {
  id: string;
  holder: string;
  product: string;
  sumPaise: number;
  status: 'quoted' | 'active' | 'claim' | 'settled';
}

export interface StockBond {
  id: string;
  token: string;
  chamber: string;
  bags: number;
  tempC: number;
  rentPaisePerBagDay: number;
  status: 'inward' | 'stored' | 'outward';
}

export interface ServiceOrder {
  id: string;
  title: string;
  party: string;
  status: 'requested' | 'assigned' | 'done' | 'billed';
  amountPaise: number;
}

export interface AiSuggestion {
  id: string;
  title: string;
  titleTe: string;
  body: string;
  bodyTe: string;
  confidence: number;
  why: string;
  whyTe: string;
  href?: string;
}

export interface Bootstrap {
  users: User[];
  orgs: Org[];
  members: Member[];
  categories: Category[];
  commodities: Commodity[];
  varieties: Variety[];
  yards: Yard[];
  rules: PaymentRule[];
  lots: Lot[];
  bids: Bid[];
  autoBids: AutoBid[];
  weighment: Weighment;
  bills: Bill[];
  notifications: NotificationItem[];
  disputes: Dispute[];
  trips: Trip[];
  jobs: InspectionJob[];
  loans: LoanFile[];
  policies: Policy[];
  bonds: StockBond[];
  orders: ServiceOrder[];
  suggestions: AiSuggestion[];
}
