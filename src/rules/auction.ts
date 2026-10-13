export type BidOutcome =
  | 'rejected_below_reserve'
  | 'blocked_shill'
  | 'pending_approval'
  | 'accepted_pending_otp'
  | 'leading'
  | 'outbid';

export interface BidDecision {
  outcome: BidOutcome;
  /** Buyer-facing copy never reveals the reserve. */
  buyerMessage: 'bid_not_accepted' | 'bid_placed' | 'auto_accepted_pending_otp' | 'held_for_owner' | 'shill_blocked';
  autoAccept: boolean;
}

export function isShillBidder(input: { bidderOrgId: string; lotOrgId: string; linkedAgentOrgIds: string[] }): boolean {
  if (input.bidderOrgId === input.lotOrgId) return true;
  return input.linkedAgentOrgIds.includes(input.bidderOrgId);
}

export function classifyBid(input: {
  pricePaise: number;
  reservePaise: number;
  offerPaise: number;
  autoAccept: boolean;
  shill: boolean;
  withinLimit: boolean;
}): BidDecision {
  if (input.shill) {
    return { outcome: 'blocked_shill', buyerMessage: 'shill_blocked', autoAccept: false };
  }
  if (!input.withinLimit) {
    return { outcome: 'pending_approval', buyerMessage: 'held_for_owner', autoAccept: false };
  }
  if (input.pricePaise < input.reservePaise) {
    return { outcome: 'rejected_below_reserve', buyerMessage: 'bid_not_accepted', autoAccept: false };
  }
  if (input.autoAccept && input.pricePaise >= input.offerPaise) {
    return { outcome: 'accepted_pending_otp', buyerMessage: 'auto_accepted_pending_otp', autoAccept: true };
  }
  return { outcome: 'leading', buyerMessage: 'bid_placed', autoAccept: false };
}

export interface RankedBid {
  id: string;
  pricePaise: number;
  createdAt: string;
  bidderOrgId: string;
}

/** Equal prices: the earlier bid wins. Shill and rejected bids are excluded by the caller. */
export function rankBids(bids: RankedBid[]): RankedBid[] {
  return [...bids].sort((a, b) => {
    if (b.pricePaise !== a.pricePaise) return b.pricePaise - a.pricePaise;
    return a.createdAt.localeCompare(b.createdAt);
  });
}

export function closeAuction(input: {
  reservePaise: number;
  bids: RankedBid[];
}): { status: 'sold' | 'unsold'; winner?: RankedBid } {
  const ranked = rankBids(input.bids);
  const winner = ranked[0];
  if (!winner || winner.pricePaise < input.reservePaise) return { status: 'unsold' };
  return { status: 'sold', winner };
}

export type ProxyAction =
  | { action: 'hold'; pricePaise: number }
  | { action: 'bid'; pricePaise: number }
  | { action: 'outbid'; maxPaise: number; bestPaise: number };

/**
 * Proxy bidding raises by the minimum step required to lead, never above the max.
 * Equal max: the earlier max wins and does not need to step up.
 */
export function nextProxyAction(input: {
  myMaxPaise: number;
  stepPaise: number;
  myMaxSetAt: string;
  bestPricePaise: number;
  bestIsMine: boolean;
  bestSetAt?: string;
}): ProxyAction {
  if (input.stepPaise <= 0) throw new Error('step_required');
  if (input.bestIsMine) return { action: 'hold', pricePaise: input.bestPricePaise };
  if (input.bestPricePaise <= 0) {
    if (input.myMaxPaise < input.stepPaise) {
      return { action: 'outbid', maxPaise: input.myMaxPaise, bestPaise: 0 };
    }
    return { action: 'bid', pricePaise: input.stepPaise };
  }
  if (input.bestPricePaise > input.myMaxPaise) {
    return { action: 'outbid', maxPaise: input.myMaxPaise, bestPaise: input.bestPricePaise };
  }
  if (input.bestPricePaise === input.myMaxPaise) {
    if (input.bestSetAt && input.myMaxSetAt <= input.bestSetAt) {
      return { action: 'hold', pricePaise: input.myMaxPaise };
    }
    return { action: 'outbid', maxPaise: input.myMaxPaise, bestPaise: input.bestPricePaise };
  }
  const needed = input.bestPricePaise + input.stepPaise;
  if (needed > input.myMaxPaise) {
    return { action: 'outbid', maxPaise: input.myMaxPaise, bestPaise: input.bestPricePaise };
  }
  return { action: 'bid', pricePaise: needed };
}

export function reserveVisibleTo(role: 'producer' | 'agent' | 'buyer' | 'platform' | 'yard'): boolean {
  return role === 'producer' || role === 'agent' || role === 'platform' || role === 'yard';
}

export interface SourcingCheck {
  ok: boolean;
  reason?: 'mandate_required' | 'above_ceiling' | 'above_qty' | 'purpose_unverified';
}

export function sourcingBidAllowed(input: {
  purposeVerified: boolean;
  mandateActive: boolean;
  mandateCeilingPaise: number;
  bidPaise: number;
  remainingKg: number;
  qtyKg: number;
}): SourcingCheck {
  if (!input.purposeVerified) return { ok: false, reason: 'purpose_unverified' };
  if (!input.mandateActive) return { ok: false, reason: 'mandate_required' };
  if (input.bidPaise > input.mandateCeilingPaise) return { ok: false, reason: 'above_ceiling' };
  if (input.qtyKg > input.remainingKg) return { ok: false, reason: 'above_qty' };
  return { ok: true };
}
