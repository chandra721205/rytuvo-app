export const DEFAULT_BAG_TOLERANCE_KG = 0.2;
export const DEFAULT_QTY_VARIANCE = 0.02;

export type BagState = 'PENDING' | 'MATCHED' | 'MISMATCH' | 'RESOLVED' | 'QUEUED';

export function bagState(
  sellerKg: number | null,
  buyerKg: number | null,
  opts?: { queued?: boolean; resolved?: boolean; toleranceKg?: number },
): BagState {
  if (opts?.queued) return 'QUEUED';
  if (sellerKg == null || buyerKg == null) return 'PENDING';
  const tolerance = opts?.toleranceKg ?? DEFAULT_BAG_TOLERANCE_KG;
  const matched = Math.abs(sellerKg - buyerKg) <= tolerance;
  if (matched) return opts?.resolved ? 'RESOLVED' : 'MATCHED';
  return 'MISMATCH';
}

export interface BagLike {
  sellerKg: number | null;
  buyerKg: number | null;
  state: BagState;
}

export function quantityVariance(expectedKg: number, actualKg: number): number {
  if (expectedKg <= 0) return 0;
  return Math.abs(actualKg - expectedKg) / expectedKg;
}

export function varianceFlagged(expectedKg: number, actualKg: number, threshold = DEFAULT_QTY_VARIANCE): boolean {
  return quantityVariance(expectedKg, actualKg) > threshold;
}

export function sideTotal(bags: BagLike[], side: 'seller' | 'buyer'): number | null {
  let total = 0;
  for (const bag of bags) {
    const value = side === 'seller' ? bag.sellerKg : bag.buyerKg;
    if (value == null) return null;
    total += value;
  }
  return Math.round(total * 1000) / 1000;
}

export interface LockCheck {
  ok: boolean;
  reasons: string[];
}

/** Lock needs every bag agreed (matched or resolved) and both OTPs. An edit clears locks. */
export function canLockWeighment(input: {
  bags: BagLike[];
  sellerOtp: boolean;
  buyerOtp: boolean;
}): LockCheck {
  const reasons: string[] = [];
  if (!input.sellerOtp) reasons.push('seller_otp');
  if (!input.buyerOtp) reasons.push('buyer_otp');
  const open = input.bags.filter((bag) => bag.state === 'PENDING' || bag.state === 'MISMATCH' || bag.state === 'QUEUED');
  if (open.length > 0) reasons.push('bags_open');
  if (input.bags.length === 0) reasons.push('no_bags');
  return { ok: reasons.length === 0, reasons };
}

export interface QueuedEntry {
  side: 'seller' | 'buyer';
  serial: string;
  kg: number;
}

/** Apply an offline queue in order. A later entry for the same bag+side wins. */
export function applyQueue<T extends { serial: string; sellerKg: number | null; buyerKg: number | null }>(
  bags: T[],
  queue: QueuedEntry[],
): T[] {
  const next = bags.map((bag) => ({ ...bag }));
  for (const entry of queue) {
    const bag = next.find((item) => item.serial === entry.serial);
    if (!bag) continue;
    if (entry.side === 'seller') bag.sellerKg = entry.kg;
    else bag.buyerKg = entry.kg;
  }
  return next;
}
