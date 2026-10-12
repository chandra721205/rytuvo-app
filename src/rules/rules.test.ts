import { classifyBid, closeAuction, isShillBidder, nextProxyAction, rankBids, reserveVisibleTo, sourcingBidAllowed } from './auction';
import {
  advanceInterestPaise,
  buyerBill,
  buyerInterestPaise,
  buyerRiskRank,
  canReconcile,
  canReleaseLot,
  canWithdrawLot,
  commodityAmountPaise,
  dueDateFor,
  GUNTUR_CHILLI_EXAMPLE,
  producerPatti,
  producerPayoutDue,
  validateBackout,
  validatePayment,
  resolveWeighbridgeTolerance,
  weighbridgeFraudAlert,
} from './bill';
import { interestStatement, reminderKind } from './interest';
import { formatInr, simpleInterestPaise } from './money';
import { can, canReviewOwnKyc, checkLimit, inspectorConflict, moduleVisible } from './rbac';
import { applyQueue, bagState, canLockWeighment, sideTotal, varianceFlagged } from './weighment';

const LOT_PRINCIPAL = 31_600_000;

describe('money and bills', () => {
  test('formats rupees with Indian grouping', () => {
    expect(formatInr(LOT_PRINCIPAL)).toBe('₹3,16,000.00');
    expect(formatInr(272712)).toBe('₹2,727.12');
  });

  test('commodity line is kg/100 × price per quintal and packing is separate', () => {
    const commodity = commodityAmountPaise(2000, 1_580_000);
    expect(commodity).toBe(LOT_PRINCIPAL);
    expect(commodity + 240_000).toBe(31_840_000);
  });

  test('due date is sale date plus association credit days', () => {
    expect(dueDateFor('2026-10-01', 15)).toBe('2026-10-16');
  });

  test('payments cannot exceed outstanding or reuse a reference', () => {
    expect(validatePayment({ amountPaise: 100, outstandingPaise: 50, mode: 'upi', reference: 'U1', existingReferences: [] })).toEqual({
      ok: false,
      reason: 'above_outstanding',
    });
    expect(validatePayment({ amountPaise: 100, outstandingPaise: 500, mode: 'neft', existingReferences: [] })).toEqual({
      ok: false,
      reason: 'reference_required',
    });
    expect(
      validatePayment({ amountPaise: 100, outstandingPaise: 500, mode: 'upi', reference: 'UPI-9', existingReferences: ['UPI-9'] }),
    ).toEqual({ ok: false, reason: 'duplicate_reference' });
    expect(canReconcile('munim', 'munim')).toBe(false);
    expect(canReconcile('accounts', 'munim')).toBe(true);
  });
});

describe('association interest', () => {
  test('21% simple interest on the full principal for 15 days late', () => {
    expect(simpleInterestPaise(LOT_PRINCIPAL, 2100, 15)).toBe(272_712);
    const statement = interestStatement({
      principalPaise: LOT_PRINCIPAL,
      dueDate: '2026-10-16',
      asOf: '2026-10-31',
    });
    expect(statement.daysLate).toBe(15);
    expect(statement.interestPaise).toBe(272_712);
    expect(statement.outstandingPaise).toBe(LOT_PRINCIPAL + 272_712);
  });

  test('partial payment accrues interest only on the balance afterwards', () => {
    const statement = interestStatement({
      principalPaise: LOT_PRINCIPAL,
      dueDate: '2026-10-16',
      asOf: '2026-10-31',
      payments: [{ date: '2026-10-21', amountPaise: 10_000_000 }],
    });
    expect(statement.periods).toHaveLength(2);
    expect(statement.periods[0]).toMatchObject({ days: 5, principalPaise: LOT_PRINCIPAL, interestPaise: 90_904 });
    expect(statement.periods[1]).toMatchObject({ days: 10, principalPaise: 21_600_000, interestPaise: 124_274 });
    expect(statement.interestPaise).toBe(215_178);
    expect(statement.principalOutstandingPaise).toBe(21_600_000);
    expect(statement.outstandingPaise).toBe(21_815_178);
  });

  test('no interest on or before the due date, waiver reduces the interest', () => {
    const early = interestStatement({ principalPaise: LOT_PRINCIPAL, dueDate: '2026-10-16', asOf: '2026-10-16' });
    expect(early.interestPaise).toBe(0);
    const waived = interestStatement({
      principalPaise: LOT_PRINCIPAL,
      dueDate: '2026-10-16',
      asOf: '2026-10-31',
      waiverPaise: 272_712,
    });
    expect(waived.interestPaise).toBe(0);
    expect(waived.outstandingPaise).toBe(LOT_PRINCIPAL);
  });

  test('reminder schedule', () => {
    expect(reminderKind('2026-10-16', '2026-10-13')).toBe('before');
    expect(reminderKind('2026-10-16', '2026-10-16')).toBe('due');
    expect(reminderKind('2026-10-16', '2026-10-17')).toBe('overdue');
  });
});

describe('synced weighment', () => {
  test('per-bag states and tolerance', () => {
    expect(bagState(null, 40.2)).toBe('PENDING');
    expect(bagState(40.2, 40.3)).toBe('MATCHED');
    expect(bagState(40.2, 41.1)).toBe('MISMATCH');
    expect(bagState(40.2, null, { queued: true })).toBe('QUEUED');
  });

  test('offline queue applies on reconnect and a later entry wins', () => {
    const bags = applyQueue(
      [{ serial: 'B-01', sellerKg: null, buyerKg: 40 }],
      [
        { side: 'seller', serial: 'B-01', kg: 39 },
        { side: 'seller', serial: 'B-01', kg: 40.1 },
      ],
    );
    expect(bags[0]?.sellerKg).toBe(40.1);
    expect(bagState(bags[0]!.sellerKg, bags[0]!.buyerKg)).toBe('MATCHED');
  });

  test('quantity variance above 2% is flagged and lock needs agreement plus both OTPs', () => {
    expect(varianceFlagged(2000, 2041)).toBe(true);
    expect(varianceFlagged(2000, 2030)).toBe(false);
    const bags = [
      { sellerKg: 40, buyerKg: 40, state: 'MATCHED' as const },
      { sellerKg: 41, buyerKg: 39, state: 'MISMATCH' as const },
    ];
    expect(canLockWeighment({ bags, sellerOtp: true, buyerOtp: true }).ok).toBe(false);
    expect(sideTotal([{ sellerKg: 40.2, buyerKg: 40, state: 'MISMATCH' }, { sellerKg: 39.8, buyerKg: 40, state: 'MATCHED' }], 'seller')).toBe(80);
    const locked = canLockWeighment({
      bags: [{ sellerKg: 40, buyerKg: 40, state: 'MATCHED' }],
      sellerOtp: true,
      buyerOtp: true,
    });
    expect(locked.ok).toBe(true);
  });
});

describe('auction reserve and auto-bid', () => {
  const reserve = 2_140_000;
  const offer = 2_240_000;

  test('bids under the reserve are rejected without revealing it', () => {
    const decision = classifyBid({
      pricePaise: 2_080_000,
      reservePaise: reserve,
      offerPaise: offer,
      autoAccept: true,
      shill: false,
      withinLimit: true,
    });
    expect(decision.outcome).toBe('rejected_below_reserve');
    expect(decision.buyerMessage).toBe('bid_not_accepted');
  });

  test('the first bid at the offer auto-accepts and still needs the sale OTP', () => {
    const decision = classifyBid({
      pricePaise: offer,
      reservePaise: reserve,
      offerPaise: offer,
      autoAccept: true,
      shill: false,
      withinLimit: true,
    });
    expect(decision).toMatchObject({ outcome: 'accepted_pending_otp', autoAccept: true });
  });

  test('producer, family org and linked agent cannot bid', () => {
    expect(isShillBidder({ bidderOrgId: 'org-producer', lotOrgId: 'org-producer', linkedAgentOrgIds: [] })).toBe(true);
    expect(isShillBidder({ bidderOrgId: 'org-agent', lotOrgId: 'org-producer', linkedAgentOrgIds: ['org-agent'] })).toBe(true);
    expect(classifyBid({ pricePaise: offer, reservePaise: reserve, offerPaise: offer, autoAccept: false, shill: true, withinLimit: true }).outcome).toBe(
      'blocked_shill',
    );
  });

  test('proxy steps only as far as needed and alerts when outbid over the max', () => {
    expect(
      nextProxyAction({ myMaxPaise: 2_250_000, stepPaise: 5_000, myMaxSetAt: '2026-10-11T09:00:00Z', bestPricePaise: 2_215_000, bestIsMine: false }),
    ).toEqual({ action: 'bid', pricePaise: 2_220_000 });
    expect(
      nextProxyAction({ myMaxPaise: 2_250_000, stepPaise: 5_000, myMaxSetAt: '2026-10-11T09:00:00Z', bestPricePaise: 2_255_000, bestIsMine: false }),
    ).toEqual({ action: 'outbid', maxPaise: 2_250_000, bestPaise: 2_255_000 });
    expect(
      nextProxyAction({ myMaxPaise: 2_250_000, stepPaise: 5_000, myMaxSetAt: '2026-10-11T09:00:00Z', bestPricePaise: 2_220_000, bestIsMine: true }),
    ).toEqual({ action: 'hold', pricePaise: 2_220_000 });
  });

  test('equal max goes to the earlier max; equal manual bids go to the earlier bid', () => {
    const tie = nextProxyAction({
      myMaxPaise: 2_200_000,
      stepPaise: 5_000,
      myMaxSetAt: '2026-10-11T08:00:00Z',
      bestPricePaise: 2_200_000,
      bestIsMine: false,
      bestSetAt: '2026-10-11T09:00:00Z',
    });
    expect(tie).toEqual({ action: 'hold', pricePaise: 2_200_000 });
    const late = nextProxyAction({
      myMaxPaise: 2_200_000,
      stepPaise: 5_000,
      myMaxSetAt: '2026-10-11T10:00:00Z',
      bestPricePaise: 2_200_000,
      bestIsMine: false,
      bestSetAt: '2026-10-11T09:00:00Z',
    });
    expect(late.action).toBe('outbid');
    const ranked = rankBids([
      { id: 'late', pricePaise: 2_200_000, createdAt: '2026-10-11T10:00:00Z', bidderOrgId: 'b' },
      { id: 'early', pricePaise: 2_200_000, createdAt: '2026-10-11T09:00:00Z', bidderOrgId: 'a' },
    ]);
    expect(ranked[0]?.id).toBe('early');
  });

  test('close sells only when the best bid meets the hidden reserve', () => {
    const bids = [
      { id: 'a', pricePaise: 2_215_000, createdAt: '2026-10-11T09:00:00Z', bidderOrgId: 'buyer-a' },
      { id: 'c', pricePaise: 2_080_000, createdAt: '2026-10-11T09:05:00Z', bidderOrgId: 'buyer-c' },
    ];
    expect(closeAuction({ reservePaise: reserve, bids }).status).toBe('sold');
    expect(closeAuction({ reservePaise: 2_300_000, bids }).status).toBe('unsold');
  });

  test('buyers never see the reserve; sourcing bids need a live mandate', () => {
    expect(reserveVisibleTo('buyer')).toBe(false);
    expect(reserveVisibleTo('producer')).toBe(true);
    expect(reserveVisibleTo('platform')).toBe(true);
    expect(
      sourcingBidAllowed({
        purposeVerified: true,
        mandateActive: false,
        mandateCeilingPaise: 3_000_000,
        bidPaise: 2_200_000,
        remainingKg: 2000,
        qtyKg: 2000,
      }).reason,
    ).toBe('mandate_required');
    expect(
      sourcingBidAllowed({
        purposeVerified: true,
        mandateActive: true,
        mandateCeilingPaise: 2_000_000,
        bidPaise: 2_200_000,
        remainingKg: 2000,
        qtyKg: 500,
      }).reason,
    ).toBe('above_ceiling');
  });

  test('a bid above the purchaser limit is held for the owner', () => {
    expect(
      classifyBid({ pricePaise: 2_400_000, reservePaise: reserve, offerPaise: offer, autoAccept: false, shill: false, withinLimit: false }).outcome,
    ).toBe('pending_approval');
  });
});

describe('two-level RBAC', () => {
  test('field worker has no money actions and purchaser bids route above the cap', () => {
    expect(can('PR_WORKER', 'payment.record')).toBe(false);
    expect(can('PR_WORKER', 'bid.accept')).toBe(false);
    expect(moduleVisible('PR_WORKER', 'payments')).toBe(false);
    expect(moduleVisible('PR_MANAGER', 'payments')).toBe(true);
    expect(checkLimit('BY_PURCHASER', 'bid_per_q', 2_300_000, { bid_per_q: 2_250_000 })).toEqual({
      allowed: false,
      approver: 'BY_OWNER',
      reason: 'bid_per_q_above_limit',
    });
    expect(checkLimit('CA_SALES', 'deal_value', 600_000_00, { deal_value: 500_000_00 }).approver).toBe('CA_OWNER');
  });

  test('segregation of duties', () => {
    expect(canReviewOwnKyc('kavya', 'kavya')).toBe(false);
    expect(inspectorConflict('harish', ['ramesh', 'harish'])).toBe(true);
    expect(can('CA_MUNIM', 'waiver.approve')).toBe(false);
    expect(can('CA_OWNER', 'waiver.approve')).toBe(true);
    expect(can('PL_AUDIT', 'reserve.view')).toBe(true);
    expect(can('BY_PURCHASER', 'reserve.view')).toBe(false);
  });
});

const EXAMPLE_LOT = {
  bags: 63,
  bagKg: 40,
  tareKgPerBag: GUNTUR_CHILLI_EXAMPLE.tareKgPerBag,
  pricePaisePerQuintal: 2_285_000,
};

const EXAMPLE_PATTI = {
  lot: EXAMPLE_LOT,
  commissionRate: 0.02,
  commissionCap: 0.05,
  hamali: GUNTUR_CHILLI_EXAMPLE.hamali,
  securityFee: GUNTUR_CHILLI_EXAMPLE.securityFee,
  advances: [{ amountPaise: 5_000_000, givenOn: '2026-09-12', recoveredOn: '2026-10-12', annualRateBps: 1800 }],
  storageLoanPaise: 0,
  saleDate: '2026-10-12',
  holidays: GUNTUR_CHILLI_EXAMPLE.holidays,
};

describe('release 1 bill — worked example', () => {
  const patti = producerPatti(EXAMPLE_PATTI);
  const bill = buyerBill({
    lot: EXAMPLE_LOT,
    marketFeeRate: GUNTUR_CHILLI_EXAMPLE.marketFeeRate,
    saleDate: '2026-10-12',
  });

  test('net weight, sale value and producer patti match to the paisa', () => {
    expect(patti.netKg).toBe(2488.5);
    expect(patti.saleValuePaise).toBe(56_862_225);
    expect(patti.commissionPaise).toBe(1_137_244);
    expect(patti.hamaliPaise).toBe(189_000);
    expect(patti.hamaliBasis).toBe('per_bag');
    expect(patti.securityFeePaise).toBe(56_862);
    expect(patti.securityFeeBasis).toBe('percent');
    expect(patti.securityFeeRemittedBy).toBe('agent');
    expect(patti.dryingPaise).toBe(0);
    expect(patti.regradingPaise).toBe(0);
    expect(patti.otherExpensesPaise).toBe(0);
    expect(patti.advancePaise).toBe(5_000_000);
    expect(patti.advanceInterestPaise).toBe(73_973);
    expect(patti.netPayablePaise).toBe(50_405_146);
    expect(formatInr(patti.netPayablePaise)).toBe('₹5,04,051.46');
    expect(patti.payoutDue).toBe('2026-10-13');
  });

  test('market fee is payable to the committee and stays outside the agent receivable', () => {
    expect(bill.marketFeePaise).toBe(568_622);
    expect(bill.marketFeePayee).toBe('market_committee');
    expect(bill.agentCollectsMarketFee).toBe(false);
    expect(bill.gstPaise).toBe(0);
    expect(bill.tdsPaise).toBe(0);
    expect(bill.agentReceivablePaise).toBe(56_862_225);
    expect(bill.buyerPayablePaise).toBe(57_430_847);
    expect(bill.buyerPayablePaise).toBe(bill.agentReceivablePaise + bill.marketFeePaise);
    expect(formatInr(bill.buyerPayablePaise)).toBe('₹5,74,308.47');
    expect(bill.dueDate).toBe('2026-10-27');
  });

  test('paise stay exact and the total is not rounded to the rupee', () => {
    expect(patti.netPayablePaise % 100).not.toBe(0);
    expect(bill.buyerPayablePaise % 100).not.toBe(0);
    expect(Math.round(patti.netPayablePaise / 100) * 100).not.toBe(patti.netPayablePaise);
  });

  test('interest runs on the agent receivable, counts holidays, and accepts a part-payment', () => {
    expect(buyerInterestPaise({ billTotalPaise: bill.agentReceivablePaise, dueDate: bill.dueDate, asOf: '2026-11-01' })).toBe(163_576);
    expect(formatInr(163_576)).toBe('₹1,635.76');
    const partial = buyerInterestPaise({
      billTotalPaise: bill.agentReceivablePaise,
      dueDate: '2026-10-27',
      asOf: '2026-11-01',
      payments: [{ date: '2026-10-29', amountPaise: 20_000_000 }],
    });
    expect(partial).toBe(129_056);
    expect(buyerInterestPaise({ billTotalPaise: bill.agentReceivablePaise, dueDate: '2026-10-27', asOf: '2026-10-27' })).toBe(0);
  });

  test('security fee and hamali follow the configured basis', () => {
    const perBag = producerPatti({
      ...EXAMPLE_PATTI,
      advances: [],
      securityFee: { basis: 'per_bag', rate: 200 },
    });
    expect(perBag.securityFeePaise).toBe(12_600);
    const perQuintal = producerPatti({
      ...EXAMPLE_PATTI,
      advances: [],
      hamali: { basis: 'per_quintal', rate: 2_000 },
      securityFee: { basis: 'per_quintal', rate: 1_000 },
    });
    expect(perQuintal.hamaliPaise).toBe(49_770);
    expect(perQuintal.securityFeePaise).toBe(24_885);
    expect(perQuintal.securityFeeRemittedBy).toBe('agent');
    expect(() => producerPatti({ ...EXAMPLE_PATTI, hamali: { basis: 'percent' as 'per_bag', rate: 0.01 } })).toThrow('hamali_basis');
  });

  test('optional drying, regrading and other lines reduce the farmer payout', () => {
    const withLines = producerPatti({
      ...EXAMPLE_PATTI,
      deductions: [
        { kind: 'drying', label: 'Excess moisture', amountPaise: 10_000 },
        { kind: 'regrading', label: 'Cleaning', amountPaise: 5_000 },
        { kind: 'other', label: 'Gunny', amountPaise: 2_000 },
      ],
    });
    expect(withLines.dryingPaise).toBe(10_000);
    expect(withLines.regradingPaise).toBe(5_000);
    expect(withLines.otherExpenses).toEqual([{ kind: 'other', label: 'Gunny', amountPaise: 2_000 }]);
    expect(withLines.netPayablePaise).toBe(50_405_146 - 17_000);
    expect(() => producerPatti({ ...EXAMPLE_PATTI, deductions: [{ kind: 'other', label: '  ', amountPaise: 100 }] })).toThrow('other_label_required');
  });

  test('edges: withdraw, payout consent, storage loan, fraud alert, back-out', () => {
    expect(canWithdrawLot({ samplingDone: true, saleConfirmed: false }).ok).toBe(true);
    expect(canWithdrawLot({ samplingDone: true, saleConfirmed: true })).toEqual({ ok: false, reason: 'blocked_after_sampling_and_sale' });
    expect(producerPayoutDue('2026-10-16', [], '2026-10-20')).toBe('2026-10-20');
    expect(producerPayoutDue('2026-10-17', [])).toBe('2026-10-19');
    expect(canReleaseLot({ stored: true, storageLoanPaise: 100, loanSettled: false })).toEqual({ ok: false, reason: 'storage_loan_open' });
    expect(canReleaseLot({ stored: true, storageLoanPaise: 100, loanSettled: true }).ok).toBe(true);
    expect(advanceInterestPaise({ amountPaise: 5_000_000, givenOn: '2026-09-12', recoveredOn: '2026-10-12', annualRateBps: 1800 })).toBe(73_973);
    expect(GUNTUR_CHILLI_EXAMPLE.weighbridgeTolerance).toEqual({ byCommodity: null, sharedLorry: null, note: 'to be defined' });
    expect(weighbridgeFraudAlert({ lorryNetKg: 2600, bagNetKg: 2488.5, tolerance: null })).toEqual({
      alert: false,
      status: 'tolerance_to_be_defined',
    });
    expect(weighbridgeFraudAlert({ lorryNetKg: 2500, bagNetKg: 2488.5, tolerance: 0.005 })).toEqual({ alert: false, status: 'within_tolerance' });
    expect(weighbridgeFraudAlert({ lorryNetKg: 2600, bagNetKg: 2488.5, tolerance: 0.005 }).alert).toBe(true);
    const configured = { byCommodity: 0.005, sharedLorry: 0.02, note: 'to be defined' as const };
    expect(resolveWeighbridgeTolerance(configured, false)).toBe(0.005);
    expect(resolveWeighbridgeTolerance(configured, true)).toBe(0.02);
    expect(resolveWeighbridgeTolerance(GUNTUR_CHILLI_EXAMPLE.weighbridgeTolerance, true)).toBeNull();
    expect(validateBackout('other', '')).toEqual({ ok: false, reason: 'other_text_required' });
    expect(validateBackout('quality_not_as_sample', '').ok).toBe(true);
    expect(buyerRiskRank({ overdueDays: 0, disputes: 0, backouts: 0, onTimePayments: 4 }).band).toBe('low');
    expect(() =>
      producerPatti({
        ...EXAMPLE_PATTI,
        commissionRate: 0.06,
        advances: [],
        holidays: [],
      }),
    ).toThrow('commission_above_cap');
  });
});
