import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Badge, Button, Card, Input } from '../design-system';
import { colors } from '../design-system/tokens';
import { useTx } from '../i18n';
import { useApp } from '../state/store';
import { useTrade, type InboxItem } from '../state/tradeStore';

/** Screens where the shared offline trade shows live, whichever role is on the device. */
export const SYNC_SCREENS: Record<string, 'producerBids' | 'buyerBid' | 'agentDesk'> = {
  'P-06': 'producerBids',
  'P-84': 'producerBids',
  'P-100': 'producerBids',
  'B-01': 'buyerBid',
  'B-02': 'buyerBid',
  'B-14': 'buyerBid',
  'A-01': 'agentDesk',
  'A-04': 'agentDesk',
};

export function SyncPanel({ id, go }: { id: string; go: (route?: string) => void }) {
  const kind = SYNC_SCREENS[id];
  if (kind === 'producerBids') return <ProducerBids go={go} />;
  if (kind === 'buyerBid') return <BuyerBid go={go} />;
  if (kind === 'agentDesk') return <AgentDesk go={go} />;
  return null;
}

function ProducerBids({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const best = trade.bids?.[0];
  return (
    <Card>
      <Text style={styles.h}>{tx('Live bids on your lot', 'మీ లాట్‌పై ప్రత్యక్ష బిడ్లు')}</Text>
      <Text style={styles.p}>{tx(`Offer ₹${trade.offerRupees}/q · hidden stop-loss ₹${trade.reserveRupees}/q`, `ఆఫర్ ₹${trade.offerRupees} · దాచిన స్టాప్-లాస్ ₹${trade.reserveRupees}`)}</Text>
      {(trade.bids ?? []).slice(0, 5).map((b) => (
        <Text key={b.at} style={styles.p}>{`${b.buyer} · ₹${b.rupees}/q`}</Text>
      ))}
      {!best ? <Text style={styles.p}>{tx(trade.listed ? 'Waiting for buyers.' : 'Not listed yet.', trade.listed ? 'కొనుగోలుదారుల కోసం.' : 'ఇంకా లిస్ట్ కాలేదు.')}</Text> : null}
      {trade.close === 'sold' && !trade.saleConfirmed ? <Button label={tx('Confirm sale with OTP', 'OTP తో అమ్మకం')} onPress={() => go('/producer/p-107-transaction-otp')} /> : null}
    </Card>
  );
}

function BuyerBid({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const placeBid = useTrade((s) => s.placeBid);
  const showToast = useApp((s) => s.showToast);
  const [rupees, setRupees] = useState('');
  return (
    <Card>
      <Text style={styles.h}>{tx(`Lot ${trade.commodity} ${trade.variety} · ${trade.bags} bags`, `లాట్ ${trade.variety} · ${trade.bags} బస్తాలు`)}</Text>
      <Badge label={trade.listed && trade.close === 'open' ? tx('Open for bids', 'బిడ్లకు తెరిచి') : tx('Not open', 'తెరవలేదు')} tone={trade.listed ? 'success' : 'info'} />
      <Text style={styles.p}>{tx(`Best bid ₹${trade.bids?.[0]?.rupees ?? 0}/q. The reserve is hidden.`, `ఉత్తమ బిడ్ ₹${trade.bids?.[0]?.rupees ?? 0}. రిజర్వ్ దాచబడింది.`)}</Text>
      <Input label={tx('Your bid ₹/quintal', 'మీ బిడ్ ₹/క్వింటాల్')} value={rupees} onChangeText={setRupees} keyboard="numeric" />
      <Button
        label={tx('Place bid', 'బిడ్ వేయండి')}
        onPress={() => {
          const err = placeBid('Sai Exports', Number(rupees));
          showToast(err ?? tx('Bid placed. Producer and agent notified.', 'బిడ్ వేశారు.'));
        }}
      />
      {trade.saleConfirmed ? <Button label={tx('Upload e-way bill', 'ఇ-వే బిల్లు')} tone="secondary" onPress={() => go('/buyer/b-63-eway')} /> : null}
      {trade.liftingOtpOk ? <Button label={tx('Pay the bill', 'బిల్లు చెల్లించండి')} tone="secondary" onPress={() => go('/buyer/b-60-buyer-bill')} /> : null}
    </Card>
  );
}

function AgentDesk({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const listLot = useTrade((s) => s.listLot);
  const closeAuction = useTrade((s) => s.closeAuction);
  const showToast = useApp((s) => s.showToast);
  const step = !trade.lotCreated
    ? tx('Incoming: waiting for the producer lot', 'రైతు లాట్ కోసం')
    : !trade.engaged
      ? tx('Incoming lot: producer has not confirmed you yet', 'రైతు నిర్ధారణ కోసం')
      : !trade.listed
        ? tx('Set the reserve and publish', 'రిజర్వ్ పెట్టి ప్రచురించండి')
        : trade.close === 'open'
          ? tx(`Live: ${trade.bids?.length ?? 0} bids`, `ప్రత్యక్షం: ${trade.bids?.length ?? 0} బిడ్లు`)
          : tx(`Closed ${trade.close}`, `ముగిసింది ${trade.close}`);
  return (
    <Card>
      <Text style={styles.h}>{tx('Shared trade desk', 'భాగస్వామ్య వ్యాపార డెస్క్')}</Text>
      <Text style={styles.p}>{step}</Text>
      {trade.engaged && !trade.listed ? (
        <Button label={tx('Publish to buyers', 'కొనుగోలుదారులకు ప్రచురించండి')} onPress={() => showToast(listLot() ?? tx('Published. Buyers notified.', 'ప్రచురించారు.'))} />
      ) : null}
      {trade.listed && trade.close === 'open' && (trade.bids?.length ?? 0) > 0 ? (
        <Button label={tx('Close as sold to best bid', 'ఉత్తమ బిడ్‌కు అమ్మండి')} onPress={() => showToast(closeAuction('sold') ?? tx('Sold. Producer asked for OTP.', 'అమ్మారు.'))} />
      ) : null}
      {trade.listed && trade.close === 'open' ? <Button label={tx('Close unsold', 'అమ్మకం లేదు')} tone="secondary" onPress={() => showToast(closeAuction('unsold') ?? '')} /> : null}
      <Button label={tx('Lot desk: weighment, bills, lifting, payment', 'లాట్ డెస్క్')} tone="secondary" onPress={() => go('/agent/a-60-buyer-bill')} />
    </Card>
  );
}

export function Inbox({ role }: { role: InboxItem['to'] }) {
  const tx = useTx();
  const items = useTrade((s) => s.trade.inbox ?? []).filter((i) => i.to === role).slice(0, 4);
  if (!items.length) return null;
  return (
    <Card>
      <Text style={styles.h}>{tx('Notifications', 'నోటిఫికేషన్లు')}</Text>
      {items.map((i) => (
        <Text key={i.seq} style={styles.p}>{`• ${i.text}`}</Text>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  h: { fontSize: 16, fontWeight: '700', color: colors.ink },
  p: { color: colors.secondary, marginVertical: 2 },
  gap: { gap: 8 },
});
