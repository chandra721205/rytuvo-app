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
