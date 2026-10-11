import { useState, type ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { Badge, BidCard, BottomSheetPicker, Button, Card, Chip, EmptyState, Input, LotCard, OTPInput, Stepper } from '../design-system';
import { colors, space } from '../design-system/tokens';
import { formatInr } from '../rules/money';
import { interestStatement } from '../rules/interest';
import { can, moduleVisible, permissionsFor } from '../rules/rbac';
import { personas, useApp } from '../state/store';
import { useTx } from '../i18n';
import type { ScreenSpec } from './types';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={{ gap: 8 }}>
      <Text style={styles.h}>{title}</Text>
      {children}
    </View>
  );
}

export function ScreenBody({ spec, go }: { spec: ScreenSpec; go: (route?: string) => void }) {
  const tx = useTx();
  const template = spec.template;
  if (template === 'splash') return <Splash go={go} />;
  if (template === 'phone') return <Phone />;
  if (template === 'otp') return <Otp go={go} spec={spec} />;
  if (template === 'roles') return <Roles go={go} />;
  if (template === 'language') return <Language />;
  if (template === 'purposes') return <Purposes />;
  if (template === 'cascade') return <Cascade />;
  if (template === 'kyc') return <Kyc spec={spec} />;
  if (template === 'weighment') return <Weighment spec={spec} />;
  if (template === 'auction') return <Auction spec={spec} />;
  if (template === 'autobid') return <AutoBid spec={spec} />;
  if (template === 'interest') return <Interest spec={spec} />;
  if (template === 'assistant') return <Assistant spec={spec} />;
  if (template === 'team') return <Team spec={spec} />;
  if (template === 'master') return <Master spec={spec} />;
  if (template === 'empty') return <EmptyState title={tx(spec.title, spec.titleTe)} body={tx(spec.summary, spec.summaryTe)} action={tx('Go home', 'హోమ్')} onAction={() => go('/')} />;
  if (template === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.fieldGreen} />
        <Text style={styles.p}>{tx('Loading the yard…', 'యార్డు లోడ్ అవుతోంది…')}</Text>
      </View>
    );
  }
  if (template === 'offline') return <Offline />;
  if (template === 'error') {
    return <EmptyState title={tx('Something needs a retry', 'మళ్ళీ ప్రయత్నించండి')} body={tx(spec.summary, spec.summaryTe)} action={tx('Retry', 'మళ్ళీ')} onAction={() => go(spec.route)} />;
  }
  if (template === 'flow') return <Flow spec={spec} />;
  return <Generic spec={spec} go={go} />;
}

function Splash({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  const enter = useApp((s) => s.enterAs);
  return (
    <View style={{ gap: space.lg }}>
      <View style={styles.hero}>
        <Text style={styles.word}>Rytuvo</Text>
        <Text style={styles.te}>రైతువో</Text>
        <Text style={styles.pLight}>{tx('Fair commodity markets', 'న్యాయమైన సరుకు మార్కెట్లు')}</Text>
      </View>
      <Text style={styles.p}>{tx('Open a stakeholder. Every screen works on the demo data, offline.', 'ఒక పాత్రను తెరవండి. అన్ని స్క్రీన్లు డెమో డేటాతో పని చేస్తాయి.')}</Text>
      <View style={styles.grid}>
        {personas.map((persona) => (
          <Pressable
            key={persona.memberId + persona.stakeholder}
            style={styles.persona}
            onPress={() => {
              enter(persona.memberId, persona.stakeholder);
              go(homeFor(persona.stakeholder));
            }}
          >
            <Text style={styles.personaText}>{tx(persona.label, persona.labelTe)}</Text>
          </Pressable>
        ))}
      </View>
      <Button label={tx('Sign in with mobile', 'మొబైల్‌తో సైన్ ఇన్')} onPress={() => go('/onboarding/ob-03-mobile-number')} />
    </View>
  );
}

function homeFor(stakeholder: string): string {
  const map: Record<string, string> = {
    producer: '/producer/p-01-home',
    agent: '/agent/a-01-home',
    buyer: '/buyer/b-01-market',
    inspector: '/quality/i-01-home',
    verifier: '/quality/v-01-home',
    lab: '/quality/l-01-home',
    transport: '/transport/t-01-home',
    storage: '/storage/s-01-home',
    bank: '/bank/f-01-home',
    insurance: '/insurance/n-01-home',
    yard: '/yard/y-01-gate',
    seller: '/inputs/is-01-home',
    service: '/inputs/sp-01-home',
    admin: '/admin/am-01-live-ops',
  };
  return map[stakeholder] ?? '/';
}

function Phone() {
  const tx = useTx();
  const request = useApp((s) => s.requestOtp);
  const [phone, setPhone] = useState('9848012345');
  return (
    <View style={{ gap: 12 }}>
      <Input label={tx('Mobile number', 'మొబైల్ నంబర్')} value={phone} onChangeText={setPhone} keyboard="phone-pad" placeholder="10-digit" />
      <Text style={styles.note}>{tx('Demo phones are prefilled. OTP is echoed only in this demo.', 'డెమో నంబర్లు సిద్ధంగా ఉన్నాయి. OTP ఈ డెమోలో మాత్రమే కనిపిస్తుంది.')}</Text>
      <Button label={tx('Send OTP', 'OTP పంపండి')} onPress={() => request(phone, 'LOGIN')} />
    </View>
  );
}

function Otp({ spec, go }: { spec: ScreenSpec; go: (route?: string) => void }) {
  const tx = useTx();
  const verify = useApp((s) => s.verifyOtp);
  const dev = useApp((s) => s.devCode);
  const [code, setCode] = useState('');
  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.p}>{tx('6-digit code. Demo code is 123456.', '6 అంకెల కోడ్. డెమో కోడ్ 123456.')}</Text>
      <OTPInput value={code} onChange={setCode} />
      {dev ? <Badge label={`DEV ONLY ${dev}`} tone="warning" /> : null}
      <Button
        label={tx(spec.primary?.label ?? 'Confirm', spec.primary?.labelTe ?? 'నిర్ధారించండి')}
        onPress={() => {
          if (verify(code || '123456')) go(spec.primary?.to ?? '/onboarding/ob-05-choose-role');
        }}
      />
    </View>
  );
}

function Roles({ go }: { go: (route?: string) => void }) {
  const tx = useTx();
  return (
    <View style={{ gap: 8 }}>
      {personas.map((persona) => (
        <Pressable key={persona.memberId + persona.stakeholder} style={styles.listRow} onPress={() => go(homeFor(persona.stakeholder))}>
          <Text style={styles.rowTitle}>{tx(persona.label, persona.labelTe)}</Text>
          <Badge label={persona.stakeholder} tone="info" />
        </Pressable>
      ))}
    </View>
  );
}

function Language() {
  const tx = useTx();
  const setLanguage = useApp((s) => s.setLanguage);
  const language = useApp((s) => s.session.language);
  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.p}>{tx('Choose the language for this phone.', 'ఈ ఫోన్ భాషను ఎంచుకోండి.')}</Text>
      <Chip label="English" selected={language === 'en'} onPress={() => setLanguage('en')} />
      <Chip label="తెలుగు" selected={language === 'te'} onPress={() => setLanguage('te')} />
    </View>
  );
}

function Purposes() {
  const tx = useTx();
  const selected = useApp((s) => s.selectedPurposes);
  const toggle = useApp((s) => s.togglePurpose);
  const notes = [
    ['trader', 'Trader', 'వ్యాపారి', 'APMC licence and GSTIN'],
    ['processor', 'Processor', 'ప్రాసెసర్', 'FSSAI and factory licence'],
    ['sourcing', 'Sourcing agent', 'సోర్సింగ్ ఏజెంట్', 'IEC, APMC, one agreement per client'],
  ] as const;
  return (
    <View style={{ gap: 10 }}>
      <Text style={styles.p}>{tx('A buyer can hold more than one purpose. Each purpose has its own KYC.', 'కొనుగోలుదారు ఒకటి కంటే ఎక్కువ ఉద్దేశాలు పెట్టుకోవచ్చు.')}</Text>
      {notes.map(([id, en, te, doc]) => (
        <Pressable key={id} style={styles.listRow} onPress={() => toggle(id)}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>{tx(en, te)}</Text>
            <Text style={styles.meta}>{doc}</Text>
          </View>
          <Badge label={selected.includes(id) ? tx('Selected', 'ఎంచుకున్నారు') : tx('Add', 'జోడించు')} tone={selected.includes(id) ? 'success' : 'info'} />
        </Pressable>
      ))}
    </View>
  );
}

function Cascade() {
  const tx = useTx();
  const yards = useApp((s) => s.yards);
  const [state, setState] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [yard, setYard] = useState<string>();
  const states = [...new Set(yards.map((item) => item.state))];
  const districts = [...new Set(yards.filter((item) => item.state === state).map((item) => item.district))];
  const names = yards.filter((item) => item.district === district).map((item) => item.name);
  return (
    <View style={{ gap: 12 }}>
      <BottomSheetPicker label={tx('State', 'రాష్ట్రం')} value={state} options={states} onChange={setState} />
      <BottomSheetPicker label={tx('District', 'జిల్లా')} value={district} options={districts} onChange={setDistrict} />
      <BottomSheetPicker label={tx('Market yard', 'మార్కెట్ యార్డ్')} value={yard} options={names} onChange={setYard} />
      {yard ? <Badge label={yard} tone="success" /> : null}
    </View>
  );
}

function Kyc({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const steps = ['Identity', 'Address', 'Bank', 'Review'];
  const current = spec.mode === 'pending' ? 3 : spec.mode === 'bank' ? 2 : spec.mode === 'address' ? 1 : 0;
  return (
    <View style={{ gap: 12 }}>
      <Stepper steps={steps} current={current} />
      <Card>
        <Text style={styles.rowTitle}>{tx(spec.title, spec.titleTe)}</Text>
        <Text style={styles.p}>{tx(spec.summary, spec.summaryTe)}</Text>
        <Badge label={tx('Self-declared · not a government check', 'స్వయం ప్రకటన')} tone="warning" />
      </Card>
      {(spec.notes ?? []).map((note) => (
        <Text key={note} style={styles.note}>
          {note}
        </Text>
      ))}
    </View>
  );
}

function Weighment({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const weighment = useApp((s) => s.weighment);
  const setBag = useApp((s) => s.setBagWeight);
  const flush = useApp((s) => s.flushWeighmentQueue);
  const confirm = useApp((s) => s.confirmWeighmentOtp);
  const offline = useApp((s) => s.session.offline || s.weighment.offline);
  const setOffline = useApp((s) => s.setOffline);
  const [serial, setSerial] = useState('B-04');
  const [kg, setKg] = useState('40.0');
  const [otp, setOtp] = useState('');
  const side = spec.mode === 'buyer' || spec.mode === 'buyer-summary' ? 'buyer' : 'seller';
  const seller = weighment.bags.reduce((sum, bag) => sum + (bag.sellerKg ?? 0), 0);
  const buyer = weighment.bags.reduce((sum, bag) => sum + (bag.buyerKg ?? 0), 0);
  return (
    <View style={{ gap: 12 }}>
      <Card>
        <Text style={styles.token}>{weighment.token}</Text>
        <Text style={styles.p}>{tx('Token autofilled from the gate pass. Both phones share this session.', 'గేట్ పాస్ నుండి టోకెన్ వచ్చింది. రెండు ఫోన్లు ఒకే సెషన్.')}</Text>
        <View style={styles.statRow}>
          <Stat label={tx('Seller kg', 'అమ్మకం కిలో')} value={seller.toFixed(1)} />
          <Stat label={tx('Buyer kg', 'కొనుగోలు కిలో')} value={buyer.toFixed(1)} />
          <Stat label={tx('Queue', 'క్యూ')} value={String(weighment.queue.length)} />
        </View>
        <Badge label={offline ? tx('Waiting to sync', 'సింక్ కోసం వేచి') : tx('Synced', 'సింక్ అయింది')} tone={offline ? 'warning' : 'success'} />
      </Card>
      {spec.mode === 'sms' ? (
        <Card>
          <Text style={styles.rowTitle}>{tx('SMS preview', 'SMS మునుజూపు')}</Text>
          <Text style={styles.p}>
            Rytuvo: Teja S17 · 12 bags · seller {seller.toFixed(1)} kg · buyer {buyer.toFixed(1)} kg · price ₹15,800/q. Confirm with OTP. DEV ONLY preview.
          </Text>
        </Card>
      ) : null}
      {weighment.bags.map((bag) => (
        <View key={bag.serial} style={styles.listRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>{bag.serial}</Text>
            <Text style={styles.meta}>
              {tx('Seller', 'అమ్మకం')} {bag.sellerKg ?? '—'} · {tx('Buyer', 'కొనుగోలు')} {bag.buyerKg ?? '—'}
            </Text>
          </View>
          <Badge label={bag.state} tone={bag.state === 'MISMATCH' ? 'danger' : bag.state === 'MATCHED' || bag.state === 'RESOLVED' ? 'success' : 'warning'} />
        </View>
      ))}
      {spec.mode === 'discrepancy' ? <Badge label={tx('Bag B-03 differs by 1.8 kg', 'B-03 లో 1.8 కిలోల తేడా')} tone="danger" /> : null}
      <BottomSheetPicker label={tx('Bag', 'బ్యాగ్')} value={serial} options={weighment.bags.map((bag) => bag.serial)} onChange={setSerial} />
      <Input label={tx(`${side} kg`, side === 'seller' ? 'అమ్మకం కిలో' : 'కొనుగోలు కిలో')} value={kg} onChangeText={setKg} keyboard="numeric" />
      <Button label={tx('Save bag', 'బ్యాగ్ సేవ్')} onPress={() => setBag(side, serial, Number(kg) || 0)} />
      <Button label={offline ? tx('Go online and sync', 'ఆన్‌లైన్ అయి సింక్') : tx('Work offline', 'ఆఫ్‌లైన్')} tone="secondary" onPress={() => (offline ? flush() : setOffline(true))} />
      <OTPInput value={otp} onChange={setOtp} />
      <Button label={tx('Confirm summary OTP', 'సారాంశ OTP')} tone="secondary" onPress={() => confirm(side, otp || '123456')} />
    </View>
  );
}

function Auction({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const lots = useApp((s) => s.lots);
  const bids = useApp((s) => s.bids);
  const role = useApp((s) => s.session.roleCode);
  const setReserve = useApp((s) => s.setReserve);
  const placeBid = useApp((s) => s.placeBid);
  const lot = lots.find((item) => item.id === 'lot-teja') ?? lots[0];
  const [offer, setOffer] = useState(lot ? String(lot.offerPaise / 100) : '');
  const [reserve, setReserveValue] = useState(lot ? String(lot.reservePaise / 100) : '');
  const [price, setPrice] = useState('22150');
  if (!lot) return null;
  const visible = can(role, 'reserve.view');
  const lotBids = bids.filter((bid) => bid.lotId === lot.id);
  return (
    <View style={{ gap: 12 }}>
      <LotCard title="Chilli · Teja · Grade A" token={lot.token} qty={`${lot.bags} bags · ${lot.qtyKg} kg`} status={lot.status} price={`${formatInr(lot.offerPaise)} / q`} />
      <Card>
        <Text style={styles.rowTitle}>{tx('Offer', 'ఆఫర్')} {formatInr(lot.offerPaise)} / q</Text>
        {visible ? (
          <Text style={styles.p}>{tx('Hidden reserve', 'దాచిన రిజర్వ్')} {formatInr(lot.reservePaise)} · {tx('buyers never see this', 'కొనుగోలుదారులకు కనిపించదు')}</Text>
        ) : (
          <Text style={styles.p}>{tx('Reserve is confidential to the producer side.', 'రిజర్వ్ రైతు వైపుకు మాత్రమే.')}</Text>
        )}
        <Badge label={lot.autoAccept ? tx('Auto-accept at offer', 'ఆఫర్ వద్ద ఆటో అంగీకారం') : tx('Manual accept', 'మాన్యువల్')} tone="gold" />
        <Badge label={lot.inspection === 'done' ? tx('Inspected', 'తనిఖీ అయింది') : tx('Inspection recommended', 'తనిఖీ సిఫార్సు')} tone="info" />
      </Card>
      {(spec.mode === 'offer' || spec.mode === 'edit') && visible ? (
        <View style={{ gap: 8 }}>
          <Input label={tx('Offer ₹/q', 'ఆఫర్ ₹/క్వి')} value={offer} onChangeText={setOffer} keyboard="numeric" />
          <Input label={tx('Reserve ₹/q', 'రిజర్వ్ ₹/క్వి')} value={reserve} onChangeText={setReserveValue} keyboard="numeric" />
          <Button
            label={tx('Save with OTP', 'OTPతో సేవ్')}
            onPress={() => setReserve(lot.id, Math.round(Number(offer) * 100), Math.round(Number(reserve) * 100), true)}
          />
        </View>
      ) : null}
      {spec.mode === 'browse' || spec.mode === 'detail' ? (
        <Button label={tx('Book physical inspection', 'భౌతిక తనిఖీ')} tone="secondary" onPress={() => useApp.getState().showToast(tx('Inspection booked · recommended at this yard', 'తనిఖీ బుక్ అయింది'))} />
      ) : null}
      <Section title={tx('Bids', 'బిడ్లు')}>
        {lotBids.map((bid) => (
          <BidCard
            key={bid.id}
            label={bid.label}
            price={`${formatInr(bid.pricePaise)} / q`}
            meta={`${bid.source === 'ai' ? 'AI' : 'Manual'} · ${bid.status === 'rejected_below_reserve' ? (visible ? tx('Below reserve', 'రిజర్వ్ కంటే తక్కువ') : tx('Bid not accepted', 'బిడ్ అంగీకరించబడలేదు')) : bid.status}`}
            when={bid.createdAt.slice(11, 16)}
            top={bid.status === 'leading'}
            tone={bid.status === 'rejected_below_reserve' ? 'danger' : bid.status === 'leading' ? 'success' : 'default'}
          />
        ))}
      </Section>
      {spec.stakeholder === 'buyer' ? (
        <View style={{ gap: 8 }}>
          <Input label={tx('Your bid ₹/q', 'మీ బిడ్ ₹/క్వి')} value={price} onChangeText={setPrice} keyboard="numeric" />
          <Button label={tx('Place bid', 'బిడ్ వేయండి')} onPress={() => placeBid(lot.id, Math.round(Number(price) * 100))} />
          <Text style={styles.note}>{tx('A bid under the reserve only says “Bid not accepted”.', 'రిజర్వ్ కంటే తక్కువ బిడ్ కి “బిడ్ అంగీకరించబడలేదు” మాత్రమే.')}</Text>
        </View>
      ) : null}
      {spec.mode === 'sold' ? <Badge label={tx('Sold · QC OTP next', 'అమ్మకం · తర్వాత QC OTP')} tone="success" /> : null}
      {spec.mode === 'unsold' ? <Badge label={tx('Unsold · re-list, negotiate, or store', 'అమ్మకం కాలేదు')} tone="warning" /> : null}
    </View>
  );
}

function AutoBid({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const autos = useApp((s) => s.autoBids);
  const setAuto = useApp((s) => s.setAutoBid);
  const resolve = useApp((s) => s.resolveOutbid);
  const [max, setMax] = useState('22500');
  const [step, setStep] = useState('50');
  const [otp, setOtp] = useState('');
  return (
    <View style={{ gap: 12 }}>
      <Card>
        <Badge label={tx('Suggestion · Grok never moves money', 'సూచన · డబ్బు కదపదు')} tone="gold" />
        <Text style={styles.p}>{tx(spec.summary, spec.summaryTe)}</Text>
      </Card>
      {spec.mode !== 'approval' ? (
        <View style={{ gap: 8 }}>
          <Input label={tx('Max ₹/q', 'గరిష్ఠం ₹/క్వి')} value={max} onChangeText={setMax} keyboard="numeric" />
          <Input label={tx('Step ₹', 'అడుగు ₹')} value={step} onChangeText={setStep} keyboard="numeric" />
          <Button label={tx('Arm auto-bid', 'ఆటో-బిడ్ పెట్టండి')} onPress={() => setAuto('lot-teja', Math.round(Number(max) * 100), Math.round(Number(step) * 100))} />
        </View>
      ) : null}
      {autos.map((item) => (
        <Card key={item.id}>
          <View style={styles.statRow}>
            <Stat label={tx('Max', 'గరిష్ఠం')} value={formatInr(item.maxPaise)} />
            <Stat label={tx('Step', 'అడుగు')} value={formatInr(item.stepPaise)} />
          </View>
          <Badge label={item.status} tone={item.status === 'outbid' || item.status === 'pending_approval' ? 'danger' : 'success'} />
          {item.status === 'outbid' || spec.mode === 'outbid' ? (
            <View style={{ gap: 8 }}>
              <Text style={styles.p}>{tx('Outbid over your max. Raise needs the owner if it crosses the purchaser limit.', 'మీ గరిష్ఠం దాటింది.')}</Text>
              <Button label={tx('Raise max', 'గరిష్ఠం పెంచు')} onPress={() => resolve(item.id, 'raise', item.maxPaise + 10_000)} />
              <Button label={tx('Stop', 'ఆపు')} tone="secondary" onPress={() => resolve(item.id, 'stop')} />
              <Button label={tx('Let go', 'వదిలేయి')} tone="ghost" onPress={() => resolve(item.id, 'letgo')} />
            </View>
          ) : null}
        </Card>
      ))}
      {spec.mode === 'approval' ? (
        <View style={{ gap: 8 }}>
          <Text style={styles.p}>{tx('Owner OTP to approve a max above Arjun’s ₹22,500/q cap.', 'అర్జున్ పరిమితి పైన యజమాని OTP.')}</Text>
          <OTPInput value={otp} onChange={setOtp} />
          <Button label={tx('Approve', 'ఆమోదం')} onPress={() => useApp.getState().verifyOtp(otp || '123456')} />
        </View>
      ) : null}
    </View>
  );
}

function Interest({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const bill = useApp((s) => s.bills[0]);
  const record = useApp((s) => s.recordPartial);
  const waive = useApp((s) => s.approveWaiver);
  const [amount, setAmount] = useState('50000');
  const [otp, setOtp] = useState('');
  if (!bill) return null;
  const statement = interestStatement({
    principalPaise: bill.principalPaise,
    dueDate: bill.dueDate,
    asOf: '2026-10-31',
    payments: bill.payments.map((payment) => ({ date: payment.date, amountPaise: payment.amountPaise })),
    waiverPaise: bill.waiverPaise,
    annualRateBps: 2100,
  });
  return (
    <View style={{ gap: 12 }}>
      <Card>
        <Text style={styles.token}>{bill.billNo}</Text>
        <Text style={styles.p}>
          {tx('Due', 'గడువు')} {bill.dueDate} · {tx('15 association days, then 21% simple', '15 రోజుల తర్వాత 21% సాధారణ వడ్డీ')}
        </Text>
        <View style={styles.statRow}>
          <Stat label={tx('Principal left', 'మిగిలిన అసలు')} value={formatInr(statement.principalOutstandingPaise)} />
          <Stat label={tx('Interest', 'వడ్డీ')} value={formatInr(statement.interestPaise)} />
          <Stat label={tx('Outstanding', 'బకాయి')} value={formatInr(statement.outstandingPaise)} />
        </View>
      </Card>
      {statement.periods.map((period) => (
        <View key={period.from + period.to} style={styles.listRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>
              {period.from} → {period.to}
            </Text>
            <Text style={styles.meta}>
              {period.days} {tx('days on', 'రోజులు')} {formatInr(period.principalPaise)}
            </Text>
          </View>
          <Text style={styles.price}>{formatInr(period.interestPaise)}</Text>
        </View>
      ))}
      {spec.mode === 'partial' || spec.mode === 'ledger' ? (
        <View style={{ gap: 8 }}>
          <Input label={tx('Partial payment ₹', 'పాక్షిక చెల్లింపు ₹')} value={amount} onChangeText={setAmount} keyboard="numeric" />
          <Button label={tx('Record NEFT', 'NEFT నమోదు')} onPress={() => record(bill.id, Math.round(Number(amount) * 100), `NEFT-${Date.now()}`)} />
        </View>
      ) : null}
      {spec.mode === 'waiver' ? (
        <View style={{ gap: 8 }}>
          <Text style={styles.note}>{tx('Munim requests. Owner approves with OTP. Audit keeps both amounts.', 'మునీం అడుగుతారు. యజమాని OTPతో ఆమోదిస్తారు.')}</Text>
          <OTPInput value={otp} onChange={setOtp} />
          <Button label={tx('Waive interest', 'వడ్డీ మాఫీ')} onPress={() => waive(bill.id, statement.interestPaise, otp || '123456')} />
        </View>
      ) : null}
      {spec.mode === 'rules' ? (
        <Card>
          <Text style={styles.p}>{tx('Regulatory and yard rules stay unverified until an admin checks them. Association rule for Guntur × Chilli is verified.', 'నియంత్రణ నియమాలు అడ్మిన్ ధృవీకరించే వరకు ఖాళీ.')}</Text>
        </Card>
      ) : null}
    </View>
  );
}

function Assistant({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const suggestions = useApp((s) => s.suggestions);
  const [text, setText] = useState('');
  const [reply, setReply] = useState<string>();
  return (
    <View style={{ gap: 12 }}>
      <Badge label={`${tx('Suggestion', 'సూచన')} · Grok`} tone="gold" />
      <Text style={styles.note}>{tx('AI explains and suggests. It cannot accept a bid, record a payment, or waive interest.', 'AI సూచిస్తుంది. బిడ్, చెల్లింపు, మాఫీలు చేయదు.')}</Text>
      {spec.mode === 'chat' || spec.mode === 'why' ? (
        <View style={{ gap: 8 }}>
          <Input label={tx('Ask', 'అడగండి')} value={text} onChangeText={setText} placeholder={tx('Should I hold Teja?', 'తేజను ఆపాలా?')} />
          <Button
            label={tx('Ask Grok', 'గ్రోక్‌ను అడగండి')}
            onPress={() => setReply(tx('Suggestion only (74%): arrivals are thin. I will not change your reserve.', 'సూచన మాత్రమే (74%): రాకలు తక్కువ. రిజర్వ్ మార్చను.'))}
          />
          {reply ? <Card><Text style={styles.p}>{reply}</Text></Card> : null}
        </View>
      ) : null}
      {suggestions.map((item) => (
        <Card key={item.id}>
          <Text style={styles.rowTitle}>{tx(item.title, item.titleTe)}</Text>
          <Text style={styles.p}>{tx(item.body, item.bodyTe)}</Text>
          <Badge label={`${Math.round(item.confidence * 100)}%`} tone="info" />
          {spec.mode === 'why' ? <Text style={styles.note}>{tx(item.why, item.whyTe)}</Text> : null}
        </Card>
      ))}
    </View>
  );
}

function Team({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const members = useApp((s) => s.members);
  const users = useApp((s) => s.users);
  const session = useApp((s) => s.session);
  const switchRole = useApp((s) => s.switchRole);
  const orgMembers = members.filter((member) => member.orgId === session.orgId);
  const active = members.find((member) => member.id === session.memberId);
  return (
    <View style={{ gap: 12 }}>
      <Card>
        <Text style={styles.p}>{tx('Platform sets the org type. The owner assigns roles and limits. Modules you cannot use stay hidden.', 'ప్లాట్‌ఫాం సంస్థ రకం ఇస్తుంది. యజమాని పాత్రలు ఇస్తారు.')}</Text>
        <Badge label={session.roleCode} tone="gold" />
      </Card>
      {orgMembers.map((member) => {
        const user = users.find((item) => item.id === member.userId);
        return (
          <Pressable key={member.id} style={styles.listRow} onPress={() => switchRole(member.id)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{user ? tx(user.name, user.nameTe) : member.id}</Text>
              <Text style={styles.meta}>{member.roleCode}</Text>
            </View>
            {member.id === session.memberId ? <Badge label={tx('Active', 'ప్రస్తుతం')} tone="success" /> : null}
          </Pressable>
        );
      })}
      {spec.mode === 'limits' && active ? (
        <Card>
          {Object.entries(active.limits).map(([key, value]) => (
            <Text key={key} style={styles.p}>
              {key}: {formatInr(value)}
            </Text>
          ))}
          {Object.keys(active.limits).length === 0 ? <Text style={styles.p}>{tx('No cap on this role.', 'ఈ పాత్రకు పరిమితి లేదు.')}</Text> : null}
          <Text style={styles.note}>{permissionsFor(active.roleCode).join(' · ')}</Text>
        </Card>
      ) : null}
      <Text style={styles.note}>
        {tx('Payments visible', 'చెల్లింపులు')} : {moduleVisible(session.roleCode, 'payments') ? tx('yes', 'అవును') : tx('hidden', 'దాచబడింది')}
      </Text>
    </View>
  );
}

function Master({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  const categories = useApp((s) => s.categories);
  const commodities = useApp((s) => s.commodities);
  const varieties = useApp((s) => s.varieties);
  const yards = useApp((s) => s.yards);
  const rules = useApp((s) => s.rules);
  const [category, setCategory] = useState(categories[0]?.name);
  const [commodity, setCommodity] = useState<string>();
  const visibleCommodities = commodities.filter((item) => categories.find((cat) => cat.id === item.categoryId)?.name === category);
  const commodityId = commodities.find((item) => item.name === commodity)?.id;
  const visibleVarieties = varieties.filter((item) => item.commodityId === commodityId);
  return (
    <View style={{ gap: 12 }}>
      <BottomSheetPicker label={tx('Category', 'వర్గం')} value={category} options={categories.map((item) => item.name)} onChange={(value) => { setCategory(value); setCommodity(undefined); }} />
      <BottomSheetPicker label={tx('Commodity', 'సరుకు')} value={commodity} options={visibleCommodities.map((item) => item.name)} onChange={setCommodity} />
      <Section title={tx('Varieties', 'రకాలు')}>
        {visibleVarieties.map((item) => (
          <View key={item.id} style={styles.listRow}>
            <Text style={styles.rowTitle}>{tx(item.name, item.nameTe)}</Text>
            <Text style={styles.meta}>{item.grades.join(', ')}</Text>
          </View>
        ))}
        {commodity && visibleVarieties.length === 0 ? <Text style={styles.meta}>{tx('Pick a commodity.', 'సరుకు ఎంచుకోండి.')}</Text> : null}
      </Section>
      {(spec.mode === 'yard' || spec.mode === 'rules' || spec.kind === 'desktop') &&
        yards.map((yard) => (
          <Card key={yard.id}>
            <Text style={styles.rowTitle}>{tx(yard.name, yard.nameTe)}</Text>
            <Text style={styles.meta}>
              {yard.district} · {yard.open}–{yard.close} · {tx('fee', 'ఫీజు')} {yard.marketFeePct}%
            </Text>
          </Card>
        ))}
      {spec.mode === 'rules'
        ? rules.map((rule) => (
            <View key={rule.id} style={styles.listRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{rule.association}</Text>
                <Text style={styles.meta}>
                  {rule.creditDays} {tx('days', 'రోజులు')} · {(rule.annualRate * 100).toFixed(0)}% · {rule.source}
                </Text>
              </View>
              <Badge label={rule.verified ? tx('Verified', 'ధృవీకరణ') : tx('Placeholder', 'ఖాళీ')} tone={rule.verified ? 'success' : 'warning'} />
            </View>
          ))
        : null}
    </View>
  );
}

function Offline() {
  const tx = useTx();
  const setOffline = useApp((s) => s.setOffline);
  return (
    <EmptyState
      title={tx('You are offline', 'మీరు ఆఫ్‌లైన్‌లో ఉన్నారు')}
      body={tx('Bag weights and notes stay on this phone and sync when the yard network returns.', 'బ్యాగ్ తూకాలు ఫోన్‌లో ఉండి నెట్‌వర్క్ వస్తే సింక్ అవుతాయి.')}
      action={tx('Mark online', 'ఆన్‌లైన్')}
      onAction={() => setOffline(false)}
    />
  );
}

function Flow({ spec }: { spec: ScreenSpec }) {
  const tx = useTx();
  return (
    <View style={{ gap: 8 }}>
      <Text style={styles.p}>{tx(spec.summary, spec.summaryTe)}</Text>
      {(spec.notes ?? []).map((note, index) => (
        <View key={note} style={styles.listRow}>
          <Badge label={String(index + 1)} tone="gold" />
          <Text style={[styles.rowTitle, { flex: 1 }]}>{note}</Text>
        </View>
      ))}
    </View>
  );
}

function Generic({ spec, go }: { spec: ScreenSpec; go: (route?: string) => void }) {
  const tx = useTx();
  const showToast = useApp((s) => s.showToast);
  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.p}>{tx(spec.summary, spec.summaryTe)}</Text>
      {spec.stats ? (
        <View style={styles.statRow}>
          {spec.stats.map((stat) => (
            <Stat key={stat.label} label={tx(stat.label, stat.labelTe)} value={stat.value} />
          ))}
        </View>
      ) : null}
      {(spec.items ?? []).map((item) =>
        spec.template === 'detail' ? (
          <View key={item.title} style={styles.listRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.meta}>{tx(item.title, item.titleTe)}</Text>
              <Text style={styles.rowTitle}>{item.subtitle}</Text>
            </View>
            {item.badge ? <Badge label={item.badge} tone={item.tone ?? 'info'} /> : null}
          </View>
        ) : (
          <Pressable key={item.title} style={styles.listRow} onPress={() => item.meta && go(undefined)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{tx(item.title, item.titleTe)}</Text>
              <Text style={styles.meta}>{item.subtitle}</Text>
            </View>
            {item.badge ? <Badge label={item.badge} tone={item.tone ?? 'info'} /> : null}
            {item.meta ? <Text style={styles.meta}>{item.meta}</Text> : null}
          </Pressable>
        ),
      )}
      {(spec.notes ?? []).map((note) => (
        <Text key={note} style={styles.note}>
          {note}
        </Text>
      ))}
      {spec.template === 'form' ? (
        <Button label={tx(spec.primary?.label ?? 'Save', spec.primary?.labelTe ?? 'సేవ్')} onPress={() => showToast(tx('Saved in the demo', 'డెమోలో సేవ్ అయింది'))} />
      ) : null}
      {spec.primary?.to ? <Button label={tx(spec.primary.label, spec.primary.labelTe)} onPress={() => go(spec.primary?.to)} /> : null}
      {spec.secondary?.to ? <Button label={tx(spec.secondary.label, spec.secondary.labelTe)} tone="secondary" onPress={() => go(spec.secondary?.to)} /> : null}
    </View>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.meta}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.fieldGreen, borderRadius: 24, padding: 24, gap: 4 },
  word: { color: colors.cream, fontSize: 36, fontWeight: '700', fontFamily: 'Poppins' },
  te: { color: colors.harvestGold, fontSize: 22, fontFamily: 'Noto Sans Telugu' },
  pLight: { color: colors.cream, fontSize: 16, fontFamily: 'Noto Sans' },
  p: { color: colors.ink, fontSize: 16, lineHeight: 22, fontFamily: 'Noto Sans' },
  h: { fontSize: 18, fontWeight: '700', color: colors.ink, fontFamily: 'Poppins' },
  note: { color: colors.secondary, fontSize: 14, lineHeight: 20, fontFamily: 'Noto Sans' },
  meta: { color: colors.secondary, fontSize: 13, fontFamily: 'Noto Sans' },
  token: { color: colors.secondary, fontSize: 12, fontFamily: 'Noto Sans' },
  rowTitle: { fontSize: 16, fontWeight: '700', color: colors.ink, fontFamily: 'Noto Sans' },
  price: { fontWeight: '700', color: colors.fieldGreen },
  listRow: { backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 14, flexDirection: 'row', gap: 10, alignItems: 'center' },
  grid: { gap: 8 },
  persona: { backgroundColor: colors.surface, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 14 },
  personaText: { fontWeight: '700', color: colors.ink, fontFamily: 'Noto Sans' },
  statRow: { flexDirection: 'row', gap: 8 },
  stat: { flex: 1, backgroundColor: colors.subtle, borderRadius: 12, padding: 10, gap: 2 },
  statValue: { fontWeight: '700', color: colors.ink, fontSize: 14 },
  center: { alignItems: 'center', gap: 12, padding: 32 },
});

