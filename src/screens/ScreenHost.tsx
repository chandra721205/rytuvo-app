import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { BottomNav, EmptyState, Icon, Toast, TopBar } from '../design-system';
import { colors, roleColors } from '../design-system/tokens';
import { useTx } from '../i18n';
import { can, type Permission } from '../rules/rbac';
import { useApp } from '../state/store';
import { ScreenBody } from './bodies';
import { catalogById, tabs } from './catalog';

export function ScreenHost({ id }: { id: string }) {
  const spec = catalogById[id];
  const router = useRouter();
  const tx = useTx();
  const toast = useApp((state) => state.toast);
  const showToast = useApp((state) => state.showToast);
  const language = useApp((state) => state.session.language);
  const setLanguage = useApp((state) => state.setLanguage);
  const offline = useApp((state) => state.session.offline);
  const role = useApp((state) => state.session.roleCode);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => showToast(''), 3200);
    return () => clearTimeout(timer);
  }, [toast, showToast]);

  if (!spec) {
    return <EmptyState title="Missing screen" body={id} />;
  }

  const accent = roleColors[spec.stakeholder]?.accent ?? colors.fieldGreen;
  const title = tx(spec.title, spec.titleTe);
  const subtitle = tx('Rytuvo', 'రైతువో');
  const locked = spec.permission ? !can(role, spec.permission as Permission) : false;
  const tabItems = (tabs[spec.nav] ?? []).map((item) => ({
    id: item.id,
    label: tx(item.label, item.labelTe),
    icon: item.icon as 'home',
  }));
  const wide = spec.kind === 'desktop' || width >= 1100;

  const body = (
    <View style={{ flex: 1 }}>
      {offline ? <Text style={styles.offline}>{tx('Offline · waiting to sync', 'ఆఫ్‌లైన్ · సింక్ కోసం వేచి')}</Text> : null}
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.kicker}>{spec.id}</Text>
        {locked ? (
          <EmptyState title={tx('Not on this role', 'ఈ పాత్రకు లేదు')} body={tx('The owner can grant this module. Nothing was changed.', 'యజమాని ఈ మాడ్యూల్ ఇవ్వగలరు.')} />
        ) : (
          <ScreenBody spec={spec} go={(route) => route && router.push(route as never)} />
        )}
      </ScrollView>
      <Toast message={toast || null} onClose={() => showToast('')} />
    </View>
  );

  const lang = (
    <Pressable onPress={() => setLanguage(language === 'en' ? 'te' : 'en')} style={styles.lang}>
      <Text style={styles.langText}>{language === 'en' ? 'తె' : 'EN'}</Text>
    </Pressable>
  );

  if (wide && spec.kind === 'desktop') {
    return (
      <View style={styles.desktop}>
        <View style={[styles.side, { backgroundColor: accent }]}>
          <Text style={styles.brand}>Rytuvo</Text>
          <Text style={styles.brandSub}>{subtitle}</Text>
          {tabItems.map((item) => {
            const target = catalogById[item.id];
            const on = item.id === spec.id;
            return (
              <Pressable key={item.id} style={[styles.sideItem, on && styles.sideOn]} onPress={() => target && router.push(target.route as never)}>
                <Icon name={item.icon} color={on ? accent : colors.cream} size={18} />
                <Text style={[styles.sideLabel, on && { color: accent }]}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.desktopMain}>
          <TopBar title={title} subtitle={spec.figmaFrame} right={lang} />
          {body}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.phone}>
        <TopBar
          title={title}
          subtitle={subtitle}
          onBack={spec.hideNav ? undefined : () => router.back()}
          right={lang}
        />
        {body}
        {!spec.hideNav && tabItems.length > 0 ? (
          <BottomNav
            items={tabItems}
            active={tabItems.some((item) => item.id === spec.id) ? spec.id : undefined}
            accent={accent}
            onPress={(tabId) => {
              const target = catalogById[tabId];
              if (target) router.push(target.route as never);
            }}
          />
        ) : null}
      </View>
    </View>
  );
}

export function screenCount(): number {
  return Object.keys(catalogById).length;
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#E7E1D6', alignItems: 'center' },
  phone: { flex: 1, width: '100%', maxWidth: 430, backgroundColor: colors.cream },
  scroll: { padding: 16, gap: 12, paddingBottom: 32 },
  kicker: { color: colors.secondary, fontSize: 12, fontWeight: '700' },
  offline: { backgroundColor: colors.warningSoft, color: colors.warning, padding: 8, textAlign: 'center', fontWeight: '700' },
  lang: { borderRadius: 999, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: colors.surface },
  langText: { fontWeight: '700', color: colors.fieldGreen },
  desktop: { flex: 1, flexDirection: 'row', backgroundColor: colors.cream },
  side: { width: 248, padding: 16, gap: 4 },
  brand: { color: colors.cream, fontSize: 22, fontWeight: '700', fontFamily: 'Poppins' },
  brandSub: { color: colors.harvestGold, marginBottom: 12, fontFamily: 'Noto Sans Telugu' },
  sideItem: { minHeight: 44, borderRadius: 12, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', gap: 8 },
  sideOn: { backgroundColor: colors.cream },
  sideLabel: { color: colors.cream, fontWeight: '600', flex: 1 },
  desktopMain: { flex: 1 },
});
