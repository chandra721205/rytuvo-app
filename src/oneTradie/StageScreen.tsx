import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomSheetPicker, Button, Card, Chip, Input, OTPInput, Stepper, Toast, TopBar } from '../design-system';
import { colors } from '../design-system/tokens';
import { useTrade } from '../state/tradeStore';
import { SyncPanel } from '../screens/syncPanels';
import { PHASES, STAGES, stageById, stageRoute } from './flow';
import { submitStage } from './bind';

export function StageScreen({ id }: { id: string }) {
  const router = useRouter();
  const stage = stageById[id] ?? STAGES[0];
  const saved = useTrade((s) => s.trade.oneTradie?.[stage.id]);
  const [values, setValues] = useState<Record<string, string>>(saved ?? {});
  const [toast, setToast] = useState<string | null>(null);
  const set = (k: string, v: string) => setValues((p) => ({ ...p, [k]: v }));
  const phaseIndex = PHASES.findIndex((p) => p.id === stage.phase);
  const go = (route: string) => router.push(route as never);
  const back = () => (router.canGoBack() ? router.back() : router.replace('/producer/p-100-journey' as never));
  return (
    <View style={styles.page}>
      <TopBar title={stage.title} subtitle={`1Tradie · ${PHASES[phaseIndex]?.label ?? ''}`} onBack={back} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Stepper steps={PHASES.map((p) => p.label.slice(2))} current={phaseIndex} />
        <Text style={styles.p}>{stage.description}{stage.optional ? ' · optional' : ''}</Text>
        {stage.sections.length ? <Text style={styles.small}>{stage.sections.join(' · ')}</Text> : null}
        {stage.id === 'market-auction' ? <SyncPanel id="P-06" go={(r) => r && go(r)} /> : null}
        <Card>
          {stage.fields.length === 0 ? <Text style={styles.p}>No entry needed on this step.</Text> : null}
          {stage.fields.map((f) => {
            const label = `${f.label}${f.required ? ' *' : ''}`;
            const v = values[f.label] ?? '';
            if (f.type === 'select') return <BottomSheetPicker key={f.label} label={label} value={v} options={[...(f.options ?? [])]} onChange={(x) => set(f.label, x)} />;
            if (f.type === 'otp')
              return (
                <View key={f.label} style={styles.gap}>
                  <Text style={styles.label}>{label} (demo 123456)</Text>
                  <OTPInput value={v} onChange={(x) => set(f.label, x)} />
                </View>
              );
            if (f.type === 'check') return <Chip key={f.label} label={f.label} selected={v === 'yes'} onPress={() => set(f.label, v === 'yes' ? '' : 'yes')} />;
            return (
              <Input
                key={f.label}
                label={label}
                value={v}
                onChangeText={(x) => set(f.label, x)}
                placeholder={f.type === 'date' ? 'YYYY-MM-DD' : undefined}
                keyboard={f.type === 'number' ? 'numeric' : f.type === 'phone' ? 'phone-pad' : 'default'}
              />
            );
          })}
        </Card>
        {stage.links.map((l) => (
          <Button key={l.to} label={l.label} tone="secondary" onPress={() => go(l.to)} />
        ))}
        <Button
          label={stage.id === 'complete' ? 'Back to journey' : 'Save & continue'}
          onPress={() => {
            if (stage.id === 'complete') return router.replace('/producer/p-100-journey' as never);
            const r = submitStage(stage, values);
            if (r.error) return setToast(r.error);
            if (r.next) go(stageRoute(r.next));
          }}
        />
        {stage.optional ? <Button label="Skip this optional step" tone="ghost" onPress={() => go(stageRoute(STAGES[STAGES.findIndex((s) => s.id === stage.id) + 1]?.id ?? 'complete'))} /> : null}
        <Text style={styles.h}>All 1Tradie steps</Text>
        <View style={styles.wrap}>
          {STAGES.map((s) => (
            <Pressable key={s.id} onPress={() => go(stageRoute(s.id))} style={[styles.pill, s.id === stage.id && styles.on]}>
              <Text style={[styles.pillT, s.id === stage.id && { color: colors.cream }]}>{s.title}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.small}>Ported from 1Tradie {stage.source}</Text>
      </ScrollView>
      <Toast message={toast} onClose={() => setToast(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.cream },
  scroll: { padding: 16, gap: 12, paddingBottom: 40 },
  p: { color: colors.secondary },
  h: { fontWeight: '700', color: colors.ink, marginTop: 8 },
  small: { color: colors.secondary, fontSize: 12 },
  label: { fontWeight: '600', color: colors.ink },
  gap: { gap: 6 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  pill: { borderRadius: 999, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: colors.surface },
  on: { backgroundColor: colors.fieldGreen, borderColor: colors.fieldGreen },
  pillT: { color: colors.fieldGreen, fontWeight: '600', fontSize: 12 },
});
