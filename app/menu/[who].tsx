import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { roleHome } from '../../src/config/release';
import { Input, TopBar } from '../../src/design-system';
import { colors } from '../../src/design-system/tokens';
import { useTx } from '../../src/i18n';
import { screensOf } from '../../src/screens/graph';

/** All screens of one stakeholder, searchable. Reached from every screen's footer. */
export default function Menu() {
  const { who } = useLocalSearchParams<{ who: string }>();
  const router = useRouter();
  const tx = useTx();
  const [q, setQ] = useState('');
  const list = screensOf(String(who)).filter((s) => !q || `${s.id} ${s.title}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <View style={styles.page}>
      <TopBar title={tx('All screens', 'అన్ని స్క్రీన్లు')} subtitle={String(who)} onBack={() => (router.canGoBack() ? router.back() : router.replace(roleHome(String(who)) as never))} />
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
        {String(who) === 'producer' ? (
          <Pressable style={[styles.row, styles.hl]} onPress={() => router.push('/producer/1t/dashboard' as never)}>
            <Text style={styles.t}>{tx('1Tradie producer flow (8 phases)', '1ట్రేడీ రైతు ప్రవాహం')}</Text>
          </Pressable>
        ) : null}
        <Input label={tx('Search', 'వెతకండి')} value={q} onChangeText={setQ} placeholder="P-25, bill, weighment…" />
        {list.map((s) => (
          <Pressable key={s.id} style={styles.row} onPress={() => router.push(s.route as never)}>
            <Text style={styles.id}>{s.id}</Text>
            <Text style={styles.t}>{tx(s.title, s.titleTe)}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.cream },
  scroll: { padding: 16, gap: 8 },
  row: { flexDirection: 'row', gap: 10, padding: 12, borderRadius: 12, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, minHeight: 48, alignItems: 'center' },
  hl: { borderColor: colors.fieldGreen, borderWidth: 2 },
  id: { width: 56, fontWeight: '700', color: colors.secondary },
  t: { flex: 1, color: colors.ink, fontWeight: '600' },
});
