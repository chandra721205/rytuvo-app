import { addDays, DEFAULT_CREDIT_DAYS } from './money';

/** Commodity line = (kg / 100) × price per quintal. Packing is a separate line. */
export function commodityAmountPaise(qtyKg: number, pricePaisePerQuintal: number): number {
  if (qtyKg < 0 || pricePaisePerQuintal < 0) throw new Error('Negative quantity or price');
  return Math.round((qtyKg / 100) * pricePaisePerQuintal);
}

export function billTotalPaise(commodityPaise: number, packingPaise: number): number {
  return commodityPaise + packingPaise;
}

export function dueDateFor(saleDate: string, creditDays = DEFAULT_CREDIT_DAYS): string {
  return addDays(saleDate, creditDays);
}

export interface PaymentDraft {
  amountPaise: number;
  outstandingPaise: number;
  mode: 'upi' | 'neft' | 'cash' | 'cheque';
  reference?: string;
  existingReferences: string[];
}

export function validatePayment(draft: PaymentDraft): { ok: true } | { ok: false; reason: string } {
  if (draft.amountPaise <= 0) return { ok: false, reason: 'amount_must_be_positive' };
  if (draft.amountPaise > draft.outstandingPaise) return { ok: false, reason: 'above_outstanding' };
  if (draft.mode !== 'cash' && !draft.reference?.trim()) return { ok: false, reason: 'reference_required' };
  if (draft.reference && draft.existingReferences.includes(draft.reference)) {
    return { ok: false, reason: 'duplicate_reference' };
  }
  return { ok: true };
}

/** The person who records a payment cannot reconcile it. */
export function canReconcile(recorderId: string, actorId: string): boolean {
  return recorderId !== actorId;
}

/**
 * Integer division rounded half-to-even (banker's rounding).
 * The worked example's 2% commission is ₹11,372.445, which lands on ₹11,372.44.
 */
export function roundHalfEvenDiv(numerator: number, denominator: number): number {
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator <= 0) {
    throw new Error('roundHalfEvenDiv expects a positive integer denominator');
  }
  const negative = numerator < 0;
  const abs = Math.abs(numerator);
  const q = Math.trunc(abs / denominator);
  const rem = abs % denominator;
  const twice = rem * 2;
  let rounded = q;
  if (twice > denominator || (twice === denominator && q % 2 !== 0)) rounded = q + 1;
  return negative ? -rounded : rounded;
}

/** EXAMPLE cap. Real caps are yard × commodity config. */
export const EXAMPLE_COMMISSION_CAP = 0.05;

/** per_bag and per_quintal rates are paise. percent is a fraction of sale value (0.001 = 0.1%). */
export type ChargeBasis = 'per_bag' | 'per_quintal' | 'percent';

export interface ChargeSpec {
  basis: ChargeBasis;
  rate: number;
}

export type HamaliBasis = 'per_bag' | 'per_quintal';

/**
 * Lorry-net vs bag-total threshold. Null means the yard has not set it.
 * A shared lorry (several farmers) can use a different number from a single-farmer lorry.
 */
export interface WeighbridgeTolerance {
  byCommodity: number | null;
  sharedLorry: number | null;
  note: 'to be defined';
}

export const TOLERANCE_TO_BE_DEFINED = 'to be defined' as const;

export interface YardCommodityRates {
  /** Marked EXAMPLE until an authority verifies the yard row. */
  example: true;
  yardId: string;
  commodityId: string;
  tareKgPerBag: number;
  hamali: { basis: HamaliBasis; rate: number };
  /**
   * Security fee basis and rate vary by state, market and commodity.
   * The agent deducts it from the farmer payout and remits it.
   */
  securityFee: ChargeSpec;
  /** Buyer pays this directly to the market committee. The agent does not collect it. */
  marketFeeRate: number;
  buyerInterestBps: number;
  creditDays: number;
  /** Advance interest the agent may charge. EXAMPLE 18% = 1800 bps. */
  advanceInterestBps: number;
  weighbridgeTolerance: WeighbridgeTolerance;
  /** Sundays plus these ISO dates are not working days. */
  holidays: string[];
  /** GST and TDS stay off until a CA confirms them. */
  gstRate: number;
  tdsRate: number;
  gstEnabled: boolean;
  tdsEnabled: boolean;
}

export const GUNTUR_CHILLI_EXAMPLE: YardCommodityRates = {
  example: true,
  yardId: 'guntur',
  commodityId: 'chilli',
  tareKgPerBag: 0.5,
  hamali: { basis: 'per_bag', rate: 3_000 },
  securityFee: { basis: 'percent', rate: 0.001 },
  marketFeeRate: 0.01,
  buyerInterestBps: 2100,
  creditDays: 15,
  advanceInterestBps: 1800,
  weighbridgeTolerance: { byCommodity: null, sharedLorry: null, note: TOLERANCE_TO_BE_DEFINED },
  holidays: ['2026-10-02', '2026-11-01'],
  gstRate: 0,
  tdsRate: 0,
  gstEnabled: false,
  tdsEnabled: false,
};

export interface BillLotInput {
  bags: number;
  bagKg: number;
  tareKgPerBag: number;
  pricePaisePerQuintal: number;
}

export function netKg(input: Pick<BillLotInput, 'bags' | 'bagKg' | 'tareKgPerBag'>): number {
  return input.bags * input.bagKg - input.bags * input.tareKgPerBag;
}

/** Sale value in paise from net grams so the worked example stays exact. */
export function saleValuePaise(input: BillLotInput): number {
  const netGrams = Math.round(netKg(input) * 1000);
  return roundHalfEvenDiv(netGrams * input.pricePaisePerQuintal, 100_000);
}

export function rateSlicePaise(basePaise: number, rate: number): number {
  const millionths = Math.round(rate * 1_000_000);
  return roundHalfEvenDiv(basePaise * millionths, 1_000_000);
}

/**
 * A configured charge in exact paise.
 * A sub-paisa residue uses half-to-even so the line is one paisa; the bill total is never rounded to the rupee.
 */
export function chargePaise(spec: ChargeSpec, basis: { bags: number; netKg: number; saleValuePaise: number }): number {
  if (spec.rate < 0) throw new Error('negative_rate');
  if (spec.basis === 'per_bag') {
    if (!Number.isInteger(spec.rate)) throw new Error('per_bag_rate_must_be_paise');
    return spec.rate * basis.bags;
  }
  if (spec.basis === 'per_quintal') {
    if (!Number.isInteger(spec.rate)) throw new Error('per_quintal_rate_must_be_paise');
    const netGrams = Math.round(basis.netKg * 1000);
    return roundHalfEvenDiv(netGrams * spec.rate, 100_000);
  }
  return rateSlicePaise(basis.saleValuePaise, spec.rate);
}

export interface AdvanceInput {
  amountPaise: number;
  givenOn: string;
  recoveredOn: string;
  annualRateBps: number;
}

export function advanceInterestPaise(advance: AdvanceInput): number {
  const days = daysBetweenSafe(advance.givenOn, advance.recoveredOn);
  if (advance.amountPaise <= 0 || advance.annualRateBps <= 0 || days <= 0) return 0;
  return roundHalfEvenDiv(advance.amountPaise * advance.annualRateBps * days, 365 * 10_000);
}

function daysBetweenSafe(startIso: string, endIso: string): number {
  const start = Date.parse(`${startIso}T00:00:00Z`);
  const end = Date.parse(`${endIso}T00:00:00Z`);
  return Math.round((end - start) / 86_400_000);
}

export function isWorkingDay(isoDate: string, holidays: string[]): boolean {
  const utc = new Date(`${isoDate}T00:00:00Z`);
  if (utc.getUTCDay() === 0) return false;
  return !holidays.includes(isoDate);
}

/** Latest day the agent may pay the producer without extra consent: the next working day. */
export function producerPayoutDue(saleDate: string, holidays: string[], farmerConsentDate?: string): string {
  if (farmerConsentDate) return farmerConsentDate;
  let cursor = addDays(saleDate, 1);
  for (let i = 0; i < 14 && !isWorkingDay(cursor, holidays); i += 1) cursor = addDays(cursor, 1);
  return cursor;
}

export interface ProducerDeductionLine {
  kind: 'drying' | 'regrading' | 'other';
  /** Free-text label. Required for other expenses. */
  label: string;
  amountPaise: number;
}

export interface ProducerPattiInput {
  lot: BillLotInput;
  commissionRate: number;
  commissionCap: number;
  hamali: { basis: HamaliBasis; rate: number };
  securityFee: ChargeSpec;
  /** Drying, regrading/cleaning, and other named expenses. Omitted lines are zero. */
  deductions?: ProducerDeductionLine[];
  advances: AdvanceInput[];
  storageLoanPaise: number;
  saleDate: string;
  holidays: string[];
  farmerConsentDate?: string;
}

export interface ProducerPatti {
  netKg: number;
  saleValuePaise: number;
  commissionPaise: number;
  hamaliPaise: number;
  hamaliBasis: HamaliBasis;
  securityFeePaise: number;
  securityFeeBasis: ChargeBasis;
  /** The agent deducts the security fee from the farmer and remits it. */
  securityFeeRemittedBy: 'agent';
  dryingPaise: number;
  regradingPaise: number;
  otherExpenses: ProducerDeductionLine[];
  otherExpensesPaise: number;
  advancePaise: number;
  advanceInterestPaise: number;
  storageLoanPaise: number;
  /** Exact paise. Not rounded to the rupee. */
  netPayablePaise: number;
  payoutDue: string;
}

function deductionTotals(lines: ProducerDeductionLine[] | undefined): { dryingPaise: number; regradingPaise: number; otherExpenses: ProducerDeductionLine[] } {
  let dryingPaise = 0;
  let regradingPaise = 0;
  const otherExpenses: ProducerDeductionLine[] = [];
  for (const line of lines ?? []) {
    if (!Number.isInteger(line.amountPaise) || line.amountPaise < 0) throw new Error('deduction_paise');
    if (line.kind === 'drying') dryingPaise += line.amountPaise;
    else if (line.kind === 'regrading') regradingPaise += line.amountPaise;
    else {
      if (!line.label.trim()) throw new Error('other_label_required');
      otherExpenses.push({ kind: 'other', label: line.label.trim(), amountPaise: line.amountPaise });
    }
  }
  return { dryingPaise, regradingPaise, otherExpenses };
}

export function producerPatti(input: ProducerPattiInput): ProducerPatti {
  if (input.commissionRate < 0 || input.commissionRate > input.commissionCap) {
    throw new Error('commission_above_cap');
  }
  if (input.hamali.basis !== 'per_bag' && input.hamali.basis !== 'per_quintal') {
    throw new Error('hamali_basis');
  }
  const sale = saleValuePaise(input.lot);
  const weight = netKg(input.lot);
  const basis = { bags: input.lot.bags, netKg: weight, saleValuePaise: sale };
  const commissionPaise = rateSlicePaise(sale, input.commissionRate);
  const hamaliPaise = chargePaise(input.hamali, basis);
  const securityFeePaise = chargePaise(input.securityFee, basis);
  const { dryingPaise, regradingPaise, otherExpenses } = deductionTotals(input.deductions);
  const otherExpensesPaise = otherExpenses.reduce((sum, line) => sum + line.amountPaise, 0);
  const advancePaise = input.advances.reduce((sum, row) => sum + row.amountPaise, 0);
  const advanceInterest = input.advances.reduce((sum, row) => sum + advanceInterestPaise(row), 0);
  const netPayablePaise =
    sale -
    commissionPaise -
    hamaliPaise -
    securityFeePaise -
    dryingPaise -
    regradingPaise -
    otherExpensesPaise -
    advancePaise -
    advanceInterest -
    input.storageLoanPaise;
  return {
    netKg: weight,
    saleValuePaise: sale,
    commissionPaise,
    hamaliPaise,
    hamaliBasis: input.hamali.basis,
    securityFeePaise,
    securityFeeBasis: input.securityFee.basis,
    securityFeeRemittedBy: 'agent',
    dryingPaise,
    regradingPaise,
    otherExpenses,
    otherExpensesPaise,
    advancePaise,
    advanceInterestPaise: advanceInterest,
    storageLoanPaise: input.storageLoanPaise,
    netPayablePaise,
    payoutDue: producerPayoutDue(input.saleDate, input.holidays, input.farmerConsentDate),
  };
}

export interface BuyerBillInput {
  lot: BillLotInput;
  marketFeeRate: number;
  saleDate: string;
  creditDays?: number;
  packingPaise?: number;
  gstRate?: number;
  tdsRate?: number;
  gstEnabled?: boolean;
  tdsEnabled?: boolean;
}

export interface BuyerBill {
  saleValuePaise: number;
  /** Shown on the buyer bill, payable to the market committee, outside the agent's receivable. */
  marketFeePaise: number;
  marketFeePayee: 'market_committee';
  agentCollectsMarketFee: false;
  packingPaise: number;
  gstPaise: number;
  tdsPaise: number;
  /** What the buyer owes the agent. The market fee is not included. Exact paise. */
  agentReceivablePaise: number;
  /** Agent receivable plus the committee fee. Exact paise, not rounded to the rupee. */
  buyerPayablePaise: number;
  dueDate: string;
}

export function buyerBill(input: BuyerBillInput): BuyerBill {
  const saleValue = saleValuePaise(input.lot);
  const marketFeePaise = rateSlicePaise(saleValue, input.marketFeeRate);
  const packingPaise = input.packingPaise ?? 0;
  const gstPaise = input.gstEnabled ? rateSlicePaise(saleValue, input.gstRate ?? 0) : 0;
  const tdsPaise = input.tdsEnabled ? rateSlicePaise(saleValue, input.tdsRate ?? 0) : 0;
  const agentReceivablePaise = saleValue + packingPaise + gstPaise - tdsPaise;
  return {
    saleValuePaise: saleValue,
    marketFeePaise,
    marketFeePayee: 'market_committee',
    agentCollectsMarketFee: false,
    packingPaise,
    gstPaise,
    tdsPaise,
    agentReceivablePaise,
    buyerPayablePaise: agentReceivablePaise + marketFeePaise,
    dueDate: dueDateFor(input.saleDate, input.creditDays ?? DEFAULT_CREDIT_DAYS),
  };
}

export interface PartPayment {
  date: string;
  amountPaise: number;
}

/**
 * Simple interest on the outstanding buyer bill. Holidays are counted.
 * Interest starts the day after the due date (day 16 when credit is 15 days).
 */
export function buyerInterestPaise(input: {
  billTotalPaise: number;
  dueDate: string;
  asOf: string;
  annualRateBps?: number;
  payments?: PartPayment[];
}): number {
  const rate = input.annualRateBps ?? 2100;
  const payments = [...(input.payments ?? [])].filter((row) => row.date > input.dueDate && row.date <= input.asOf).sort((a, b) => a.date.localeCompare(b.date));
  let principal = input.billTotalPaise;
  let cursor = input.dueDate;
  let interest = 0;
  for (const payment of payments) {
    const days = daysBetweenSafe(cursor, payment.date);
    interest += roundHalfEvenDiv(principal * rate * days, 365 * 10_000);
    principal -= payment.amountPaise;
    if (principal < 0) principal = 0;
    cursor = payment.date;
  }
  const tail = daysBetweenSafe(cursor, input.asOf);
  if (tail > 0 && principal > 0) interest += roundHalfEvenDiv(principal * rate * tail, 365 * 10_000);
  return interest;
}

export function canWithdrawLot(input: { samplingDone: boolean; saleConfirmed: boolean }): { ok: true } | { ok: false; reason: 'blocked_after_sampling_and_sale' } {
  if (input.samplingDone && input.saleConfirmed) return { ok: false, reason: 'blocked_after_sampling_and_sale' };
  return { ok: true };
}

export function canReleaseLot(input: { stored: boolean; storageLoanPaise: number; loanSettled: boolean }): { ok: true } | { ok: false; reason: 'storage_loan_open' } {
  if (input.stored && input.storageLoanPaise > 0 && !input.loanSettled) return { ok: false, reason: 'storage_loan_open' };
  return { ok: true };
}

export function lorryNetKg(loadedKg: number, emptyKg: number): number {
  return loadedKg - emptyKg;
}

export function resolveWeighbridgeTolerance(config: WeighbridgeTolerance, sharedLorry: boolean): number | null {
  return sharedLorry ? config.sharedLorry : config.byCommodity;
}

export interface WeighbridgeCheck {
  alert: boolean;
  status: 'within_tolerance' | 'possible_fraud' | 'tolerance_to_be_defined';
}

/**
 * Alert only, never an automatic penalty.
 * A null tolerance means the yard has not defined one, so no alert is raised.
 */
export function weighbridgeFraudAlert(input: { lorryNetKg: number; bagNetKg: number; tolerance: number | null }): WeighbridgeCheck {
  if (input.tolerance == null) return { alert: false, status: 'tolerance_to_be_defined' };
  if (input.bagNetKg <= 0) return { alert: false, status: 'within_tolerance' };
  const over = Math.abs(input.lorryNetKg - input.bagNetKg) / input.bagNetKg > input.tolerance;
  return { alert: over, status: over ? 'possible_fraud' : 'within_tolerance' };
}

export const BACKOUT_REASONS = [
  'quality_not_as_sample',
  'weight_dispute',
  'price_error',
  'payment_issue',
  'transport_unavailable',
  'duplicate_bid',
  'other',
] as const;

export function validateBackout(reason: string, otherText: string): { ok: true } | { ok: false; reason: string } {
  if (!BACKOUT_REASONS.includes(reason as (typeof BACKOUT_REASONS)[number])) return { ok: false, reason: 'reason_required' };
  if (reason === 'other' && !otherText.trim()) return { ok: false, reason: 'other_text_required' };
  return { ok: true };
}

/** EXAMPLE buyer risk rank. Volumes are not included. */
export function buyerRiskRank(input: { overdueDays: number; disputes: number; backouts: number; onTimePayments: number }): { score: number; band: 'low' | 'watch' | 'high' } {
  const score = Math.max(300, Math.min(900, 700 - input.overdueDays * 8 - input.disputes * 25 - input.backouts * 40 + input.onTimePayments * 5));
  const band = score >= 700 ? 'low' : score >= 550 ? 'watch' : 'high';
  return { score, band };
}
