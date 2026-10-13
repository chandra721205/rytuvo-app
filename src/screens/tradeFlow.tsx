import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Button, Card, Chip, Input, OTPInput } from '../design-system';
import { colors } from '../design-system/tokens';
import { useTx } from '../i18n';
import { formatInr } from '../rules/money';
import { BACKOUT_REASONS, useTrade, type DemoTrade } from '../state/tradeStore';
import type { ScreenSpec } from './types';

const PHASES: { key: string; te: string; to: string; ready: (t: DemoTrade) => boolean; done: (t: DemoTrade) => boolean }[] = [
  { key: 'Setup', te: 'సెటప్', to: '/producer/p-101-producer-type', ready: () => true, done: (t) => Boolean(t.producerType) },
  { key: 'Farm', te: 'పొలం', to: '/producer/p-102-matchmaking', ready: (t) => Boolean(t.producerType), done: (t) => t.lotCreated },
  { key: 'Harvest', te: 'కోత', to: '/producer/p-103-engage-agent', ready: (t) => t.lotCreated, done: (t) => t.engaged },
  { key: 'Quality', te: 'నాణ్యత', to: '/producer/p-104-ai-quality', ready: (t) => t.engaged, done: (t) => t.samplingDone },
  { key: 'Store/Sell', te: 'నిల్వ/అమ్మకం', to: '/producer/p-114-unsold', ready: (t) => t.samplingDone, done: (t) => t.stored || t.listed },
  { key: 'Selling', te: 'అమ్మకం', to: '/producer/p-106-confirm-order', ready: (t) => t.listed, done: (t) => t.close !== 'open' },
  { key: 'Deal', te: 'డీల్', to: '/producer/p-107-transaction-otp', ready: (t) => t.close === 'sold', done: (t) => t.saleConfirmed },
  { key: 'Done', te: 'పూర్తి', to: '/producer/p-111-journey-complete', ready: (t) => t.saleConfirmed, done: (t) => t.producerPaid },
];

const BACKOUT_LABELS: Record<string, [string, string]> = {
  quality_not_as_sample: ['Quality not as per sample', 'నమూనా ప్రకారం నాణ్యత లేదు'],
  weight_dispute: ['Weight dispute', 'బరువు వివాదం'],
  price_error: ['Price error / wrong bid', 'ధర పొరపాటు'],
  payment_issue: ['Payment issue', 'చెల్లింపు సమస్య'],
  transport_unavailable: ['Transport unavailable', 'రవాణా లేదు'],
  duplicate_bid: ['Duplicate bid', 'నకిలీ బిడ్'],
  other: ['Other', 'ఇతర'],
};

export function TradeHomeLinks({ spec, go }: { spec: ScreenSpec; go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  if (spec.id === 'P-01') {
    const next = PHASES.find((phase) => phase.ready(trade) && !phase.done(trade)) ?? PHASES[0];
    return (
      <Card>
        <Text style={styles.h}>{tx('Continue this trade', 'ఈ వ్యాపారం కొనసాగించండి')}</Text>
        <Text style={styles.p}>{tx(`${next.key} is the next open phase.`, `${next.te} తదుపరి దశ.`)}</Text>
        <Button label={tx('Open the journey', 'ప్రయాణం')} onPress={() => go('/producer/p-100-journey')} />
      </Card>
    );
  }
  if (spec.id === 'A-01') {
    return (
      <Card>
        <Text style={styles.h}>{tx('Ramesh · Teja · Guntur', 'రమేష్ · తేజ · గుంటూరు')}</Text>
        <Text style={styles.p}>{tx(trade.listed ? 'Listed on the shared demo.' : 'Waiting for the producer engagement.', trade.listed ? 'డెమోలో లిస్ట్ అయింది.' : 'రైతు అంగీకారం కోసం.')}</Text>
        <Button label={tx('Open the lot desk', 'లాట్ డెస్క్')} onPress={() => go('/agent/a-60-buyer-bill')} />
      </Card>
    );
  }
  if (spec.id === 'B-01') {
    return (
      <Card>
        <Text style={styles.h}>{tx('Teja lot by token', 'టోకెన్ ద్వారా తేజ')}</Text>
        <Text style={styles.p}>{tx('The reserve stays hidden. The bill is the shared demo.', 'రిజర్వ్ కనిపించదు. బిల్లు డెమో.')}</Text>
        <Button label={tx('Buyer bill', 'కొనుగోలు బిల్లు')} onPress={() => go('/buyer/b-60-buyer-bill')} />
      </Card>
    );
  }
  return null;
}

export function TradeFlow({ spec, go }: { spec: ScreenSpec; go: (route?: string) => void }) {
  const id = spec.id;
  if (id === 'P-100') return <Journey go={go} />;
  if (id === 'P-101') return <ProducerType go={go} />;
  if (id === 'P-102') return <Matchmaking go={go} />;
  if (id === 'P-103') return <Engage go={go} />;
  if (id === 'P-104') return <AiQuality go={go} />;
  if (id === 'P-105') return <GradingDone go={go} />;
  if (id === 'P-106') return <ConfirmOrder go={go} />;
  if (id === 'P-107') return <SaleOtp go={go} />;
  if (id === 'P-108') return <Receiving go={go} />;
  if (id === 'P-109') return <ReceivingIssue go={go} />;
  if (id === 'P-110') return <Advance go={go} />;
  if (id === 'P-111') return <JourneyDone go={go} />;
  if (id === 'P-112' || id === 'P-88') return <Patti go={go} />;
  if (id === 'P-113') return <Withdraw go={go} />;
  if (id === 'P-114') return <Unsold go={go} />;
  if (id === 'P-115') return <StorageLoan go={go} />;
  if (id === 'P-116') return <Consents />;
  if (id === 'P-117') return <PayoutDue go={go} />;
  if (id === 'A-60') return <AgentDesk go={go} />;
  if (id === 'A-61') return <YardRules />;
  if (id === 'A-62') return <Weighbridge which="loaded" go={go} />;
  if (id === 'A-63') return <Weighbridge which="empty" go={go} />;
  if (id === 'A-64') return <FraudAlert />;
  if (id === 'A-65') return <RiskRank />;
  if (id === 'A-66') return <AdvanceRecovery go={go} />;
  if (id === 'A-67') return <LiftingOtp />;
  if (id === 'A-68') return <BackoutDecision />;
  if (id === 'B-60') return <BuyerPay />;
  if (id === 'B-61') return <BackoutForm go={go} />;
  if (id === 'B-62') return <Escalation />;
  if (id === 'B-63') return <Eway />;
  if (id === 'B-64') return <Retest />;
  return <Journey go={go} />;
}

function Journey({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const next = PHASES.find((phase) => !phase.done(trade)) ?? PHASES[PHASES.length - 1];
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Eight phases. A later phase stays closed until the one before it is done.', 'ఎనిమిది దశలు. ముందు దశ పూర్తయ్యే వరకు తర్వాత దశ మూసి ఉంటుంది.')}</Text>
      {PHASES.map((phase, index) => {
        const open = phase.ready(trade);
        return (
          <Card key={phase.key}>
            <Text style={styles.row}>{`${index + 1}. ${tx(phase.key, phase.te)}`}</Text>
            <Badge label={phase.done(trade) ? tx('Done', 'పూర్తి') : open ? tx('Open', 'తెరిచి') : tx('Locked', 'మూసి')} tone={phase.done(trade) ? 'success' : open ? 'gold' : 'info'} />
            {open ? <Button label={tx('Open', 'తెరవండి')} tone="secondary" onPress={() => go(phase.to)} /> : null}
          </Card>
        );
      })}
      <Button label={tx(`Continue · ${next.key}`, `కొనసాగించండి · ${next.te}`)} onPress={() => next.ready(trade) && go(next.to)} />
      <Button label={tx('Full 1Tradie producer flow (26 steps)', '1ట్రేడీ పూర్తి ప్రవాహం')} tone="secondary" onPress={() => go('/producer/1t/dashboard')} />
      <Button label={tx('Withdraw the lot', 'లాట్ వెనక్కి')} tone="secondary" onPress={() => go('/producer/p-113-withdraw-lot')} />
    </View>
  );
}

function ProducerType({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const setType = useTrade((s) => s.setProducerType);
  const current = useTrade((s) => s.trade.producerType);
  const options: { id: DemoTrade['producerType']; en: string; te: string }[] = [
    { id: 'small', en: 'Small · under 5 acres', te: 'చిన్న · 5 ఎకరాల లోపు' },
    { id: 'medium', en: 'Medium · 5–50 acres or a cooperative', te: 'మధ్య · 5–50 ఎకరాలు లేదా సహకారం' },
    { id: 'large', en: 'Large · over 50 acres or an FPO', te: 'పెద్ద · 50 ఎకరాల పైన లేదా FPO' },
  ];
  return (
    <View style={styles.gap}>
      {options.map((option) => (
        <Chip key={option.id} label={tx(option.en, option.te)} selected={current === option.id} onPress={() => option.id && setType(option.id)} />
      ))}
      <Button label={tx('Continue', 'కొనసాగించండి')} onPress={() => current && go('/producer/p-102-matchmaking')} />
    </View>
  );
}

function Matchmaking({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const [category, setCategory] = useState('Spices');
  const [commodity, setCommodity] = useState('Chilli');
  const [variety, setVariety] = useState('Teja');
  const [yard, setYard] = useState('Guntur');
  const [bags, setBags] = useState('63');
  const [bagKg, setBagKg] = useState('40');
  const [offer, setOffer] = useState('22850');
  const [reserve, setReserve] = useState('22000');
  const [error, setError] = useState('');
  const createLot = useTrade((s) => s.createLot);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Venkata Rao matches this yard and commodity. The reserve stays hidden from buyers.', 'వెంకటరావు ఈ యార్డు, సరుకుకు సరిపోతారు. రిజర్వ్ కొనుగోలుదారులకు కనిపించదు.')}</Text>
      <Input label={tx('Category', 'వర్గం')} value={category} onChangeText={setCategory} />
      <Input label={tx('Commodity', 'సరుకు')} value={commodity} onChangeText={setCommodity} />
      <Input label={tx('Variety', 'రకం')} value={variety} onChangeText={setVariety} />
      <Input label={tx('Yard', 'యార్డు')} value={yard} onChangeText={setYard} />
      <Input label={tx('Bags', 'సంచులు')} value={bags} onChangeText={setBags} keyboard="numeric" />
      <Input label={tx('Gross kg per bag', 'సంచికి స్థూల కిలో')} value={bagKg} onChangeText={setBagKg} keyboard="numeric" />
      <Input label={tx('Offer ₹ per quintal', 'ఆఫర్ ₹ క్వింటాల్')} value={offer} onChangeText={setOffer} keyboard="numeric" />
      <Input label={tx('Hidden reserve ₹ per quintal', 'దాచిన రిజర్వ్ ₹')} value={reserve} onChangeText={setReserve} keyboard="numeric" />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Create the lot', 'లాట్ సృష్టించండి')}
        onPress={() => {
          const message = createLot({
            category: category.trim(),
            commodity: commodity.trim(),
            variety: variety.trim(),
            yard: yard.trim(),
            bags: Number(bags),
            bagKg: Number(bagKg),
            offerRupees: Number(offer),
            reserveRupees: Number(reserve),
          });
          setError(message ?? '');
          if (!message) go('/producer/p-103-engage-agent');
        }}
      />
    </View>
  );
}

function Engage({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const engage = useTrade((s) => s.engage);
  const [rate, setRate] = useState('2');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Commission is paid by the producer, at or under the 5% example cap. EXAMPLE rate.', 'కమీషన్ రైతు చెల్లిస్తారు. ఉదాహరణ పరిమితి 5%.')}</Text>
      <Input label={tx('Agreed commission %', 'అంగీకరించిన కమీషన్ %')} value={rate} onChangeText={setRate} keyboard="numeric" />
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Confirm with OTP', 'OTP తో నిర్ధారించండి')}
        onPress={() => {
          const message = engage(Number(rate) / 100, code);
          setError(message ?? '');
          if (!message) go('/producer/p-104-ai-quality');
        }}
      />
    </View>
  );
}

function AiQuality({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const setAiGrade = useTrade((s) => s.setAiGrade);
  const grade = useTrade((s) => s.trade.aiGrade);
  return (
    <View style={styles.gap}>
      <Badge label={tx('Guide only', 'మార్గదర్శకం మాత్రమే')} tone="warning" />
      <Text style={styles.p}>{tx('Grok reads the sample photo and suggests a grade. It does not set the price.', 'గ్రోక్ నమూనా చూసి గ్రేడ్ సూచిస్తుంది. ధర పెట్టదు.')}</Text>
      <Chip label="Teja · Grade A" selected={grade === 'A'} onPress={() => setAiGrade('A')} />
      <Button label={tx('Record the sample', 'నమూనా నమోదు')} onPress={() => go('/producer/p-105-grading-done')} />
    </View>
  );
}

function GradingDone({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const complete = useTrade((s) => s.completeGrading);
  const done = useTrade((s) => s.trade.samplingDone);
  return (
    <View style={styles.gap}>
      <Badge label={done ? tx('Sampling done', 'నమూనా పూర్తి') : tx('Not sampled', 'నమూనా లేదు')} tone={done ? 'success' : 'info'} />
      <Text style={styles.p}>{tx('After sampling and a confirmed sale, the lot can no longer be withdrawn.', 'నమూనా మరియు అమ్మకం నిర్ధారణ తర్వాత లాట్ వెనక్కి తీయలేరు.')}</Text>
      <Button
        label={tx('Mark grading complete', 'గ్రేడింగ్ పూర్తి')}
        onPress={() => {
          complete();
          go('/producer/p-100-journey');
        }}
      />
    </View>
  );
}

function ConfirmOrder({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('The agent lists the lot. You authorise the sale only after it closes sold.', 'ఏజెంట్ లాట్ లిస్ట్ చేస్తారు. అమ్మకం ముగిసిన తర్వాత మీ OTP.')}</Text>
      <Badge label={trade.listed ? tx('Listed', 'లిస్ట్') : tx('Not listed yet', 'ఇంకా లిస్ట్ కాలేదు')} tone={trade.listed ? 'success' : 'warning'} />
      <Badge label={trade.close === 'sold' ? tx('Sold', 'అమ్ముడు') : trade.close === 'unsold' ? tx('Unsold', 'అమ్ముడు కాలేదు') : tx('Auction open', 'వేలం తెరిచి')} tone="gold" />
      <Button label={tx('Sale OTP', 'అమ్మకం OTP')} onPress={() => go('/producer/p-107-transaction-otp')} />
      <Button label={tx('Switch the role to the agent', 'ఏజెంట్ పాత్ర')} tone="secondary" onPress={() => go('/agent/a-60-buyer-bill')} />
    </View>
  );
}

function SaleOtp({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const confirmSale = useTrade((s) => s.confirmSale);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Buyer payment is due 15 days after the sale, then 21% p.a. simple. EXAMPLE.', 'అమ్మకం తర్వాత 15 రోజులు, తర్వాత 21%. ఉదాహరణ.')}</Text>
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Authorise the sale', 'అమ్మకం అనుమతి')}
        onPress={() => {
          const message = confirmSale(code);
          setError(message ?? '');
          if (!message) go('/producer/p-112-producer-patti');
        }}
      />
    </View>
  );
}

function Receiving({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const points = ['Count', 'Seal', 'Grade', 'Moisture', 'Bags', 'Vehicle'];
  const [checked, setChecked] = useState<string[]>([]);
  return (
    <View style={styles.gap}>
      {points.map((point) => (
        <Chip
          key={point}
          label={point}
          selected={checked.includes(point)}
          onPress={() => setChecked((current) => (current.includes(point) ? current.filter((item) => item !== point) : [...current, point]))}
        />
      ))}
      <Button label={tx('All clear', 'అంతా సరిగ్గా')} onPress={() => checked.length === points.length && go('/producer/p-111-journey-complete')} />
      <Button label={tx('Report an issue', 'సమస్య')} tone="secondary" onPress={() => go('/producer/p-109-receiving-issue')} />
    </View>
  );
}

function ReceivingIssue({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const setIssue = useTrade((s) => s.setReceivingIssue);
  const [text, setText] = useState('');
  return (
    <View style={styles.gap}>
      <Input label={tx('What failed on the checklist', 'ఏమి తప్పింది')} value={text} onChangeText={setText} />
      <Button
        label={tx('Save the issue', 'సమస్య సేవ్')}
        onPress={() => {
          if (!text.trim()) return;
          setIssue(text.trim());
          go('/producer/p-116-consents');
        }}
      />
    </View>
  );
}

function Advance({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const chooseStore = useTrade((s) => s.chooseStore);
  const [purpose, setPurpose] = useState('Agent advance');
  const [party, setParty] = useState('Venkata Rao');
  const [amount, setAmount] = useState('50000');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Both sides confirm. The worked example keeps the ₹50,000 agent advance dated 12 Sep 2026.', 'ఇరువైపులా OTP. ఉదాహరణ అడ్వాన్స్ ₹50,000, 12 సెప్టెంబర్ 2026.')}</Text>
      <Input label={tx('Purpose', 'ఉద్దేశం')} value={purpose} onChangeText={setPurpose} />
      <Input label={tx('Counterparty', 'ఎవరికి')} value={party} onChangeText={setParty} />
      <Input label={tx('Amount ₹', 'మొత్తం ₹')} value={amount} onChangeText={setAmount} keyboard="numeric" />
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Record', 'నమోదు')}
        onPress={() => {
          if (!purpose.trim() || !party.trim()) return setError('Purpose and counterparty are required');
          if (!(Number(amount) > 0)) return setError('Enter an amount');
          if (code.trim() !== '123456') return setError('OTP must be 123456');
          if (purpose.toLowerCase().includes('storage')) chooseStore(Number(amount));
          setError('');
          go('/producer/p-112-producer-patti');
        }}
      />
    </View>
  );
}

function JourneyDone({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  return (
    <View style={styles.gap}>
      <Badge label={trade.producerPaid ? tx('Paid', 'చెల్లింపు') : tx('Patti still open', 'పట్టీ తెరిచి')} tone={trade.producerPaid ? 'success' : 'gold'} />
      <Text style={styles.p}>{tx(`${trade.variety} · ${trade.yard} · ${trade.bags} bags`, `${trade.variety} · ${trade.yard}`)}</Text>
      <Button label={tx('Producer patti', 'రైతు పట్టీ')} onPress={() => go('/producer/p-112-producer-patti')} />
    </View>
  );
}

function Patti({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const patti = useTrade((s) => s.patti);
  const setBag = useTrade((s) => s.setBag);
  const accept = useTrade((s) => s.acceptDeductions);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const lines = patti();
  return (
    <View style={styles.gap}>
      <Line label={tx('Sale value', 'అమ్మకం')} value={formatInr(lines.saleValuePaise)} />
      <Line label={tx('Commission', 'కమీషన్')} value={formatInr(lines.commissionPaise)} />
      <Line label={tx('Hamali', 'హమాలి')} value={formatInr(lines.hamaliPaise)} />
      <Line label={tx('Security fee · agent remits', 'సెక్యూరిటీ · ఏజెంట్')} value={formatInr(lines.securityFeePaise)} />
      {lines.dryingPaise > 0 ? <Line label={tx('Drying', 'ఆరబెట్టడం')} value={formatInr(lines.dryingPaise)} /> : null}
      {lines.regradingPaise > 0 ? <Line label={tx('Regrading', 'గ్రేడింగ్')} value={formatInr(lines.regradingPaise)} /> : null}
      {lines.otherExpenses.map((line) => (
        <Line key={line.label} label={line.label} value={formatInr(line.amountPaise)} />
      ))}
      <Line label={tx('Advance', 'అడ్వాన్స్')} value={formatInr(lines.advancePaise)} />
      <Line label={tx('Advance interest', 'అడ్వాన్స్ వడ్డీ')} value={formatInr(lines.advanceInterestPaise)} />
      <Line label={tx('Net payable', 'నికరం')} value={formatInr(lines.netPayablePaise)} />
      <Text style={styles.note}>{tx(`Payout due ${lines.payoutDue}. Rates are EXAMPLE and snapshotted on the sale date.`, `చెల్లింపు ${lines.payoutDue}. రేట్లు ఉదాహరణ.`)}</Text>
      {trade.bagRows.map((row) => (
        <BagField key={row.serial} serial={row.serial} side="seller" value={row.sellerKg} onChange={(kg) => setBag(row.serial, 'seller', kg)} />
      ))}
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Accept deductions', 'మినహాయింపులు అంగీకరించండి')}
        onPress={() => {
          const message = accept(code);
          setError(message ?? '');
          if (!message) go('/producer/p-117-payout-due');
        }}
      />
    </View>
  );
}

function Withdraw({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const withdraw = useTrade((s) => s.withdraw);
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Allowed until sampling is done and the sale is confirmed.', 'నమూనా మరియు అమ్మకం నిర్ధారణ వరకు.')}</Text>
      <Input label={tx('Reason', 'కారణం')} value={reason} onChangeText={setReason} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Withdraw', 'వెనక్కి')}
        tone="danger"
        onPress={() => {
          const message = withdraw(reason);
          setError(message ?? '');
          if (!message) go('/producer/p-100-journey');
        }}
      />
    </View>
  );
}

function Unsold({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const chooseStore = useTrade((s) => s.chooseStore);
  const trade = useTrade((s) => s.trade);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx(trade.close === 'unsold' ? 'Unsold. Re-auction has no limit.' : 'Choose store or wait for the agent to list.', 'అమ్ముడు కాలేదు. మళ్ళీ వేలానికి పరిమితి లేదు.')}</Text>
      <Button label={tx('Store and ask for a loan', 'నిల్వ మరియు రుణం')} onPress={() => go('/producer/p-115-storage-loan')} />
      <Button
        label={tx('Keep it for sale', 'అమ్మకానికి')}
        tone="secondary"
        onPress={() => {
          chooseStore(0);
          go('/producer/p-106-confirm-order');
        }}
      />
    </View>
  );
}

function StorageLoan({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const chooseStore = useTrade((s) => s.chooseStore);
  const settle = useTrade((s) => s.settleStorageLoan);
  const trade = useTrade((s) => s.trade);
  const [amount, setAmount] = useState('25000');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('The bank or NBFC message stays in this app. The lot stays until the loan is settled by OTP.', 'బ్యాంక్ సందేశం ఇక్కడే. రుణం తీరే వరకు లాట్ విడుదల కాదు.')}</Text>
      <Input label={tx('Loan ₹', 'రుణం ₹')} value={amount} onChangeText={setAmount} keyboard="numeric" />
      <Button label={tx('Accept the storage loan', 'నిల్వ రుణం')} onPress={() => chooseStore(Number(amount) || 0)} />
      <Badge label={trade.storageLoanSettled ? tx('Settled', 'తీరింది') : tx('Open', 'తెరిచి')} tone={trade.storageLoanSettled ? 'success' : 'warning'} />
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Settle and release', 'తీర్చి విడుదల')}
        onPress={() => {
          const message = settle(code);
          setError(message ?? '');
          if (!message) go('/producer/p-100-journey');
        }}
      />
    </View>
  );
}

function Consents() {
  const tx = useTx();
  const consent = useTrade((s) => s.consentEscalation);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const flags = useTrade((s) => s.trade);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Market-committee escalation needs the buyer request plus producer and agent OTPs.', 'మార్కెట్ కమిటీకి రైతు మరియు ఏజెంట్ OTP కావాలి.')}</Text>
      <Badge label={flags.producerEscalationOtp ? tx('Producer signed', 'రైతు సంతకం') : tx('Producer pending', 'రైతు మిగిలి')} tone="info" />
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Producer OTP', 'రైతు OTP')}
        onPress={() => {
          const message = consent('producer', code);
          setError(message ?? '');
        }}
      />
    </View>
  );
}

function PayoutDue({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const lines = useTrade((s) => s.patti)();
  const consent = useTrade((s) => s.consentPayout);
  const [date, setDate] = useState('2026-10-20');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.h}>{formatInr(lines.netPayablePaise)}</Text>
      <Text style={styles.p}>{tx(`Due on the sale day or the next working day: ${lines.payoutDue}.`, `చెల్లింపు తేదీ ${lines.payoutDue}.`)}</Text>
      <Input label={tx('Later date you accept', 'తర్వాత తేదీ')} value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" />
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Agree a later payout', 'తర్వాత చెల్లింపు')}
        onPress={() => {
          const message = consent(date, code);
          setError(message ?? '');
        }}
      />
      <Button label={tx('Ask the agent to pay', 'ఏజెంట్ చెల్లింపు')} tone="secondary" onPress={() => go('/agent/a-66-advance-recovery')} />
    </View>
  );
}

function AgentDesk({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const listLot = useTrade((s) => s.listLot);
  const closeAuction = useTrade((s) => s.closeAuction);
  const bill = useTrade((s) => s.bill)();
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('GST and TDS stay off until a CA confirms. The market fee is paid to the committee, not to the agent.', 'GST, TDS డిఫాల్ట్‌గా ఆఫ్. మార్కెట్ ఫీజు కమిటీకి.')}</Text>
      <Line label={tx('Sale', 'అమ్మకం')} value={formatInr(bill.saleValuePaise)} />
      <Line label={tx('Agent receivable', 'ఏజెంట్')} value={formatInr(bill.agentReceivablePaise)} />
      <Line label={tx('Market fee · committee', 'మార్కెట్ ఫీజు · కమిటీ')} value={formatInr(bill.marketFeePaise)} />
      <Line label={tx('GST', 'GST')} value={formatInr(bill.gstPaise)} />
      <Line label={tx('TDS', 'TDS')} value={formatInr(bill.tdsPaise)} />
      <Line label={tx('Buyer pays in all', 'కొనుగోలుదారు మొత్తం')} value={formatInr(bill.buyerPayablePaise)} />
      <Text style={styles.note}>{tx(`Due ${bill.dueDate}`, `గడువు ${bill.dueDate}`)}</Text>
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={trade.listed ? tx('Listed', 'లిస్ట్ అయింది') : tx('List the lot', 'లాట్ లిస్ట్')}
        onPress={() => setError(listLot() ?? '')}
      />
      <Button label={tx('Close sold', 'అమ్మకం')} onPress={() => setError(closeAuction('sold') ?? '')} />
      <Button label={tx('Close unsold', 'అమ్ముడు కాలేదు')} tone="secondary" onPress={() => setError(closeAuction('unsold') ?? '')} />
      <Button label={tx('Weighbridge entry', 'వెయిట్‌బ్రిడ్జ్')} tone="secondary" onPress={() => go('/agent/a-62-weighbridge-entry')} />
    </View>
  );
}

function YardRules() {
  const tx = useTx();
  const rules = useTrade((s) => s.trade.gradeRules);
  const add = useTrade((s) => s.addGradeRule);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Guntur × chilli rates are EXAMPLE. Grade deductions start empty. A proposal is audit-logged on this phone.', 'గుంటూరు × మిరప రేట్లు ఉదాహరణ. గ్రేడ్ పట్టిక ఖాళీ.')}</Text>
      <Line label={tx('Commission cap', 'కమీషన్ పరిమితి')} value="5%" />
      <Line label={tx('Hamali', 'హమాలి')} value="₹30 / bag" />
      <Line label={tx('Buyer interest', 'కొనుగోలు వడ్డీ')} value="21% after day 15" />
      {rules.length === 0 ? <Badge label={tx('No grade rules yet', 'గ్రేడ్ నియమాలు లేవు')} tone="info" /> : null}
      {rules.map((rule) => (
        <Text key={rule.name} style={styles.p}>{`${rule.name} · ${rule.note}`}</Text>
      ))}
      <Input label={tx('Grade name', 'గ్రేడ్')} value={name} onChangeText={setName} />
      <Input label={tx('Deduction note', 'మినహాయింపు')} value={note} onChangeText={setNote} />
      <Button label={tx('Add rule', 'నియమం జోడించండి')} onPress={() => name.trim() && add(name.trim(), note.trim())} />
    </View>
  );
}

function Weighbridge({ which, go }: { which: 'loaded' | 'empty'; go: (route?: string) => void }) {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const setLorry = useTrade((s) => s.setLorry);
  const setBag = useTrade((s) => s.setBag);
  const lock = useTrade((s) => s.lockWeighment);
  const [kg, setKg] = useState(which === 'loaded' ? '8500' : '6011.5');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>
        {which === 'loaded'
          ? tx('Loaded lorry plus produce at the gate. Buyer phone records each bag.', 'లోడ్ లారీ. కొనుగోలు ఫోన్ సంచులు.')
          : tx('Empty lorry at the exit. Net is loaded minus empty.', 'ఖాళీ లారీ. నికరం = లోడ్ − ఖాళీ.')}
      </Text>
      <Input label={tx('Kilograms', 'కిలోలు')} value={kg} onChangeText={setKg} keyboard="numeric" />
      <Button label={tx('Save the bridge weight', 'బరువు సేవ్')} onPress={() => setLorry(which, Number(kg))} />
      {which === 'loaded'
        ? trade.bagRows.map((row) => (
            <BagField key={row.serial} serial={row.serial} side="buyer" value={row.buyerKg} onChange={(value) => setBag(row.serial, 'buyer', value)} />
          ))
        : null}
      {which === 'loaded' ? <OTPInput value={code} onChange={setCode} /> : null}
      {error ? <Text style={styles.err}>{error}</Text> : null}
      {which === 'loaded' ? (
        <Button
          label={tx('Lock the bags', 'సంచులు లాక్')}
          onPress={() => {
            const message = lock(code);
            setError(message ?? '');
          }}
        />
      ) : (
        <Button label={tx('See the comparison', 'పోలిక')} onPress={() => go('/agent/a-64-fraud-alert')} />
      )}
    </View>
  );
}

function FraudAlert() {
  const tx = useTx();
  const trade = useTrade((s) => s.trade);
  const lorry = trade.lorryLoadedKg != null && trade.lorryEmptyKg != null ? trade.lorryLoadedKg - trade.lorryEmptyKg : null;
  return (
    <View style={styles.gap}>
      <Badge
        label={
          trade.fraudStatus === 'alert'
            ? tx('Weight difference over 4%: review', 'బరువు తేడా 4% పైగా: పరిశీలించండి')
            : trade.fraudStatus === 'review'
              ? tx('Weight difference 3–4%: review', 'బరువు తేడా 3–4%: పరిశీలన')
              : trade.fraudStatus === 'pending'
                ? tx('Waiting for entry and exit weights', 'ఎంట్రీ, ఎగ్జిట్ బరువుల కోసం')
                : tx('Within 3%: normal', '3% లోపు: సాధారణం')
        }
        tone={trade.fraudStatus === 'alert' ? 'danger' : trade.fraudStatus === 'review' ? 'warning' : 'success'}
      />
      <Text style={styles.p}>{tx('Basic rule check: lorry net vs bag total. Up to 3% is normal, 3–4% is a review warning, over 4% is an alert to the agent and admin. Yard or commodity can change these limits. It never notifies authorities or penalises automatically.', 'ప్రాథమిక నియమ తనిఖీ: 3% వరకు సాధారణం, 3–4% పరిశీలన, 4% పైగా ఏజెంట్, అడ్మిన్‌కు హెచ్చరిక. యార్డు/సరుకు మార్చవచ్చు. అధికారులకు ఆటోగా తెలియజేయదు.')}</Text>
      <Text style={styles.note}>{tx('AI fraud model: coming later.', 'AI మోసం మోడల్: త్వరలో.')}</Text>
      <Text style={styles.note}>{lorry == null ? tx('Record entry and exit first.', 'ముందు ఎంట్రీ, ఎగ్జిట్.') : tx(`Lorry net ${lorry.toFixed(1)} kg`, `లారీ నికరం ${lorry.toFixed(1)} కిలో`)}</Text>
    </View>
  );
}

function RiskRank() {
  const tx = useTx();
  const risk = useTrade((s) => s.risk)();
  return (
    <View style={styles.gap}>
      <Text style={styles.h}>{String(risk.score)}</Text>
      <Badge label={risk.band} tone={risk.band === 'low' ? 'success' : risk.band === 'watch' ? 'warning' : 'danger'} />
      <Text style={styles.p}>{tx('Suggestion only. Volumes and raw history stay hidden from other parties.', 'సూచన మాత్రమే. వాల్యూమ్‌లు దాచబడ్డాయి.')}</Text>
    </View>
  );
}

function AdvanceRecovery({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const pay = useTrade((s) => s.payProducer);
  const consent = useTrade((s) => s.consentEscalation);
  const lines = useTrade((s) => s.patti)();
  const [utr, setUtr] = useState('UTR123');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Line label={tx('Recovered advance', 'వసూలు అడ్వాన్స్')} value={formatInr(lines.advancePaise)} />
      <Line label={tx('Pay the producer', 'రైతుకు')} value={formatInr(lines.netPayablePaise)} />
      <Input label={tx('UTR', 'UTR')} value={utr} onChangeText={setUtr} />
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Pay the producer', 'రైతుకు చెల్లించండి')}
        onPress={() => {
          const message = pay(utr, code);
          setError(message ?? '');
        }}
      />
      <Button label={tx('Escalation OTP', 'ఎస్కలేషన్ OTP')} tone="secondary" onPress={() => setError(consent('agent', code) ?? '')} />
      <Button label={tx('Lifting OTP', 'లిఫ్టింగ్ OTP')} tone="secondary" onPress={() => go('/agent/a-67-lifting-otp')} />
    </View>
  );
}

function LiftingOtp() {
  const tx = useTx();
  const confirm = useTrade((s) => s.confirmLifting);
  const trade = useTrade((s) => s.trade);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx(`Vehicle ${trade.ewayVehicle || '—'} · ${trade.ewayPerson || '—'}. The representative confirms.`, `వాహనం ${trade.ewayVehicle || '—'}`)}</Text>
      <OTPInput value={code} onChange={setCode} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Badge label={trade.liftingOtpOk ? tx('Lifted', 'లిఫ్ట్ అయింది') : tx('Waiting', 'వేచి')} tone={trade.liftingOtpOk ? 'success' : 'info'} />
      <Button
        label={tx('Representative OTP', 'ప్రతినిధి OTP')}
        onPress={() => {
          const message = confirm(code);
          setError(message ?? '');
        }}
      />
    </View>
  );
}

function BackoutDecision() {
  const tx = useTx();
  const resolve = useTrade((s) => s.resolveBackout);
  const choice = useTrade((s) => s.trade.afterBackout);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('After a back-out, the agent offers the lot to the next bidder or re-lists it.', 'వెనక్కి తీసుకుంటే తదుపరి బిడ్డర్ లేదా మళ్ళీ లిస్ట్.')}</Text>
      <Badge label={choice ?? tx('No decision yet', 'నిర్ణయం లేదు')} tone="gold" />
      <Button label={tx('Next bidder', 'తదుపరి బిడ్డర్')} onPress={() => resolve('next')} />
      <Button label={tx('Re-list', 'మళ్ళీ లిస్ట్')} tone="secondary" onPress={() => resolve('relist')} />
    </View>
  );
}

function BuyerPay() {
  const tx = useTx();
  const bill = useTrade((s) => s.bill)();
  const pay = useTrade((s) => s.payBuyer);
  const interest = useTrade((s) => s.interestPaise)();
  const [date, setDate] = useState('2026-11-01');
  const [amount, setAmount] = useState(String(bill.agentReceivablePaise / 100));
  const [ref, setRef] = useState('NEFT1');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      <Line label={tx('Pay the agent', 'ఏజెంట్‌కు')} value={formatInr(bill.agentReceivablePaise)} />
      <Line label={tx('Pay the market committee', 'కమిటీకి')} value={formatInr(bill.marketFeePaise)} />
      <Text style={styles.note}>{tx(`Agent due ${bill.dueDate}. Interest from the next day is on the agent receivable only and counts holidays. EXAMPLE 21%.`, `గడువు ${bill.dueDate}.`)}</Text>
      <Input label={tx('Paid on', 'చెల్లించిన తేదీ')} value={date} onChangeText={setDate} />
      <Input label={tx('Amount ₹', 'మొత్తం ₹')} value={amount} onChangeText={setAmount} keyboard="numeric" />
      <Input label={tx('Reference', 'రిఫరెన్స్')} value={ref} onChangeText={setRef} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Record payment', 'చెల్లింపు')}
        onPress={() => {
          const message = pay(date, Math.round(Number(amount) * 100), ref);
          setError(message ?? '');
        }}
      />
      <Line label={tx('Interest on this date', 'వడ్డీ')} value={formatInr(interest)} />
      <Button label={tx('Back out', 'వెనక్కి')} tone="secondary" onPress={() => undefined} />
    </View>
  );
}

function BackoutForm({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const backOut = useTrade((s) => s.backOut);
  const [reason, setReason] = useState('');
  const [other, setOther] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.gap}>
      {BACKOUT_REASONS.map((id) => (
        <Chip key={id} label={tx(BACKOUT_LABELS[id][0], BACKOUT_LABELS[id][1])} selected={reason === id} onPress={() => setReason(id)} />
      ))}
      {reason === 'other' ? <Input label={tx('Tell us why', 'కారణం')} value={other} onChangeText={setOther} /> : null}
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Submit the back-out', 'వెనక్కి పంపండి')}
        onPress={() => {
          const message = backOut(reason, other);
          setError(message ?? '');
          if (!message) go('/buyer/b-62-escalation');
        }}
      />
    </View>
  );
}

function Escalation() {
  const tx = useTx();
  const request = useTrade((s) => s.requestEscalation);
  const [error, setError] = useState('');
  const on = useTrade((s) => s.trade.escalate);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('The committee hears it only if you ask and both the producer and the agent agree.', 'మీరు అడిగితే, రైతు మరియు ఏజెంట్ అంగీకరిస్తే.')}</Text>
      <Badge label={on ? tx('Requested', 'అడిగారు') : tx('Not requested', 'అడగలేదు')} tone={on ? 'warning' : 'info'} />
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button label={tx('Ask the committee', 'కమిటీ')} onPress={() => setError(request() ?? '')} />
    </View>
  );
}

function Eway() {
  const tx = useTx();
  const save = useTrade((s) => s.saveEway);
  const [number, setNumber] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [person, setPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const saved = useTrade((s) => s.trade.ewayNumber);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('Upload the e-way number with the vehicle and the person who carries the paper copy.', 'ఈ-వే నంబర్, వాహనం, వ్యక్తి.')}</Text>
      <Input label={tx('E-way number', 'ఈ-వే నంబర్')} value={number} onChangeText={setNumber} />
      <Input label={tx('Vehicle', 'వాహనం')} value={vehicle} onChangeText={setVehicle} />
      <Input label={tx('Authorised person', 'అధికారి')} value={person} onChangeText={setPerson} />
      <Input label={tx('Phone', 'ఫోన్')} value={phone} onChangeText={setPhone} keyboard="phone-pad" />
      {saved ? <Badge label={saved} tone="success" /> : null}
      {error ? <Text style={styles.err}>{error}</Text> : null}
      <Button
        label={tx('Save the e-way bill', 'ఈ-వే సేవ్')}
        onPress={() => setError(save({ ewayNumber: number, ewayVehicle: vehicle, ewayPerson: person, ewayPhone: phone }) ?? '')}
      />
    </View>
  );
}

function Retest() {
  const tx = useTx();
  const pay = useTrade((s) => s.payRetest);
  const paid = useTrade((s) => s.trade.retestPaid);
  return (
    <View style={styles.gap}>
      <Text style={styles.p}>{tx('A dispute re-test is paid by the buyer. The committee decides the result.', 'మళ్ళీ పరీక్ష ఖర్చు కొనుగోలుదారు. నిర్ణయం కమిటీది.')}</Text>
      <Badge label={paid ? tx('Paid', 'చెల్లింపు') : tx('Unpaid', 'చెల్లించలేదు')} tone={paid ? 'success' : 'warning'} />
      <Button label={tx('Pay for the re-test', 'మళ్ళీ పరీక్ష')} onPress={pay} />
    </View>
  );
}

function BagField({ serial, side, value, onChange }: { serial: string; side: 'seller' | 'buyer'; value: number | null; onChange: (kg: number) => void }) {
  const tx = useTx();
  const [text, setText] = useState(value == null ? '' : String(value));
  return (
    <Input
      label={`${serial} · ${tx(side === 'seller' ? 'Seller kg' : 'Buyer kg', side === 'seller' ? 'అమ్మకం కిలో' : 'కొనుగోలు కిలో')}`}
      value={text}
      keyboard="numeric"
      onChangeText={(next) => {
        setText(next);
        const kg = Number(next);
        if (Number.isFinite(kg)) onChange(kg);
      }}
    />
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.line}>
      <Text style={styles.p}>{label}</Text>
      <Text style={styles.row}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gap: { gap: 12 },
  h: { fontSize: 22, fontWeight: '700', color: colors.ink, fontFamily: 'Poppins' },
  p: { color: colors.ink, fontSize: 16, lineHeight: 22, fontFamily: 'Noto Sans' },
  row: { fontSize: 16, fontWeight: '700', color: colors.ink, fontFamily: 'Noto Sans' },
  note: { color: colors.secondary, fontSize: 14, lineHeight: 20, fontFamily: 'Noto Sans' },
  err: { color: colors.chilli, fontWeight: '700' },
  line: { flexDirection: 'row', justifyContent: 'space-between', gap: 8, alignItems: 'center' },
});
