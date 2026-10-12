import { submitStage } from '../oneTradie/bind';
import { stageById } from '../oneTradie/flow';
import { useTrade } from './tradeStore';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const OTP = '123456';
const t = () => useTrade.getState();

describe('one trade end to end: producer -> agent -> buyer -> settlement', () => {
  test('full trade with notifications to each side', () => {
    t().resetDemo();
    // Producer (1Tradie flow): profile, lot with hidden stop-loss, engage agent.
    expect(submitStage(stageById.profile, { 'Producer type': 'small', 'Full name': 'Ramesh', 'Mobile number': '9876543210' }).error).toBeUndefined();
    const lot = submitStage(stageById['lot-management'], {
      Commodity: 'Chilli', Variety: 'Teja', 'Market yard': 'Guntur', Bags: '63', 'Gross kg per bag': '40',
      'Offer price ₹/quintal': '22400', 'Hidden stop-loss ₹/quintal': '22000',
    });
    expect(lot.error).toBeUndefined();
    expect(t().inboxFor('agent').some((i) => /Lot created/.test(i.text))).toBe(true);
    expect(submitStage(stageById['commission-agent'], { 'Commission %': '2', 'Enter OTP': OTP, 'Enter 6-digit OTP': OTP }).error).toBeUndefined();
    expect(submitStage(stageById.grading, { 'Final grade': 'A (Premium)' }).error).toBeUndefined();

    // Agent publishes. Buyer browses and bids; below the hidden reserve is refused.
    expect(t().placeBid('Sai Exports', 22500)).toMatch(/not open/);
    expect(t().listLot()).toBeNull();
    expect(t().inboxFor('buyer').some((i) => /listed/.test(i.text))).toBe(true);
    expect(t().placeBid('Sai Exports', 21000)).toBe('Bid not accepted');
    expect(t().placeBid('Sai Exports', 22500)).toBeNull();
    expect(t().inboxFor('producer')[0].text).toMatch(/22500/);
    expect(t().closeAuction('sold')).toBeNull();

    // Producer confirms the sale with OTP (1Tradie market-auction step).
    expect(submitStage(stageById['market-auction'], { 'Sale confirmation OTP': OTP }).error).toBeUndefined();
    expect(t().trade.saleConfirmed).toBe(true);
    expect(t().withdraw('changed mind')).not.toBeNull();

    // Weighment with OTP lock.
    for (const row of t().trade.bagRows) {
      t().setBag(row.serial, 'seller', 39.6);
      t().setBag(row.serial, 'buyer', 39.5);
    }
    expect(t().lockWeighment(OTP)).toBeNull();
    t().setLorry('loaded', 14000);
    t().setLorry('empty', 11500);

    // Bills: producer accepts patti, agent pays producer and recovers the advance.
    expect(submitStage(stageById['weighing-confirmation'], { 'Bags weighed': '63', 'Patti acceptance OTP': OTP }).error).toBeUndefined();
    const patti = t().patti();
    expect(patti.netPayablePaise).toBeGreaterThan(0);
    expect(t().payProducer('UTR123', OTP)).toBeNull();

    // Buyer: e-way bill, lifting OTP, payment within 15 days -> no interest.
    expect(t().confirmLifting(OTP)).toMatch(/e-way/);
    expect(t().saveEway({ ewayNumber: 'EWB1', ewayVehicle: 'AP07TX1234', ewayPerson: 'Kiran', ewayPhone: '9000000000' })).toBeNull();
    expect(t().confirmLifting(OTP)).toBeNull();
    const bill = t().bill();
    expect(t().payBuyer('2026-10-20', bill.agentReceivablePaise, 'NEFT1')).toBeNull();
    expect(t().interestPaise()).toBe(0);
    expect(t().trade.producerPaid && t().trade.liftingOtpOk).toBe(true);
    expect(t().inboxFor('agent').some((i) => /Buyer payment/.test(i.text))).toBe(true);
  });
});
