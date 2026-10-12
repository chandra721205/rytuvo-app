import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { ROLE_SWITCH, roleHome, stakeholderInRelease } from '../config/release';
import { BottomNav, EmptyState, Icon, Toast, TopBar } from '../design-system';
import { colors, roleColors } from '../design-system/tokens';
import { useTx } from '../i18n';
import { can, type Permission } from '../rules/rbac';
import { useApp } from '../state/store';
import { useTrade } from '../state/tradeStore';
import { ScreenBody } from './bodies';
import { catalogById, tabs } from './catalog';
import { menuRoute, prevNext } from './graph';
import { Inbox, SyncPanel } from './syncPanels';

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
  const stakeholder = useApp((state) => state.session.stakeholder);
  const enterAs = useApp((state) => state.enterAs);
  const resetDemo = useTrade((state) => state.resetDemo);
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
  const inRelease = stakeholderInRelease(spec.stakeholder);
  const goBack = () => {
    if (typeof router.canGoBack === 'function' && router.canGoBack()) router.back();
    else router.replace((inRelease ? roleHome(spec.stakeholder) : '/') as never);
  };

  const body = (
    <View style={{ flex: 1 }}>
      {offline ? <Text style={styles.offline}>{tx('Offline · waiting to sync', 'ఆఫ్‌లైన్ · సింక్ కోసం వేచి')}</Text> : null}
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.kicker}>{spec.id}</Text>
        {locked ? (
          <EmptyState title={tx('Not on this role', 'ఈ పాత్రకు లేదు')} body={tx('The owner can grant this module. Nothing was changed.', 'యజమాని ఈ మాడ్యూల్ ఇవ్వగలరు.')} />
        ) : !inRelease ? (
          <EmptyState title={tx('Not in this release', 'ఈ విడుదలలో లేదు')} body={tx('Release 1 is the producer, the commission agent and the buyer.', 'విడుదల 1: రైతు, ఏజెంట్, కొనుగోలుదారు.')} action={tx('Home', 'హోమ్')} onAction={() => router.replace('/' as never)} />
        ) : (
          <>
            {['producer', 'agent', 'buyer'].includes(spec.stakeholder) && roleHome(spec.stakeholder).endsWith(spec.slug) ? <Inbox role={spec.stakeholder as 'producer'} /> : null}
            <SyncPanel id={spec.id} go={(route) => route && router.push(route as never)} />
            <ScreenBody spec={spec} go={(route) => route && router.push(route as never)} />
            <ModuleFooter id={spec.id} stakeholder={spec.stakeholder} go={(route) => router.push(route as never)} />
          </>
        )}
      </ScrollView>
      <Toast message={toast || null} onClose={() => showToast('')} />
    </View>
  );

  const lang = (
    <View style={styles.tools}>
      {inRelease && spec.stakeholder !== 'onboarding' ? (
        <Pressable
          onPress={() => {
            resetDemo();
            showToast(tx('Demo reset', 'డెమో రీసెట్'));
          }}
          style={styles.lang}
        >
          <Text style={styles.langText}>{tx('Reset', 'రీసెట్')}</Text>
        </Pressable>
      ) : null}
      <Pressable onPress={() => setLanguage(language === 'en' ? 'te' : 'en')} style={styles.lang}>
        <Text style={styles.langText}>{language === 'en' ? 'తె' : 'EN'}</Text>
      </Pressable>
    </View>
  );
  const switcher =
    inRelease && spec.stakeholder !== 'onboarding' ? (
      <View style={styles.switchRow}>
        {ROLE_SWITCH.map((item) => {
          const on = stakeholder === item.stakeholder;
          return (
            <Pressable
              key={item.stakeholder}
              style={[styles.switchChip, on && styles.switchOn]}
              onPress={() => {
                enterAs(item.memberId, item.stakeholder);
                router.replace(roleHome(item.stakeholder) as never);
              }}
            >
              <Text style={[styles.switchText, on && styles.switchTextOn]}>{tx(item.label, item.labelTe)}</Text>
            </Pressable>
          );
        })}
      </View>
    ) : null;

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
          <TopBar title={title} subtitle={spec.figmaFrame} onBack={spec.hideNav ? undefined : goBack} right={lang} />
          {switcher}
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
          onBack={spec.hideNav ? undefined : goBack}
          right={lang}
        />
        {switcher}
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

function ModuleFooter({ id, stakeholder, go }: { id: string; stakeholder: string; go: (route: string) => void }) {
  const tx = useTx();
  const { prev, next } = prevNext(id);
  return (
    <View style={styles.footer}>
      {prev ? (
        <Pressable style={styles.footBtn} onPress={() => go(prev.route)}>
          <Text style={styles.footText} numberOfLines={1}>{`‹ ${tx(prev.title, prev.titleTe)}`}</Text>
        </Pressable>
      ) : null}
      <Pressable style={styles.footBtn} onPress={() => go(menuRoute(stakeholder))}>
        <Text style={styles.footText}>{tx('All screens', 'అన్నీ')}</Text>
      </Pressable>
      {next ? (
        <Pressable style={styles.footBtn} onPress={() => go(next.route)}>
          <Text style={styles.footText} numberOfLines={1}>{`${tx(next.title, next.titleTe)} ›`}</Text>
        </Pressable>
      ) : null}
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
  tools: { flexDirection: 'row', gap: 6 },
  lang: { borderRadius: 999, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: colors.surface },
  langText: { fontWeight: '700', color: colors.fieldGreen },
  switchRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, paddingTop: 8 },
  switchChip: { borderRadius: 999, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: colors.surface },
  switchOn: { backgroundColor: colors.fieldGreen, borderColor: colors.fieldGreen },
  switchText: { fontWeight: '700', color: colors.fieldGreen },
  switchTextOn: { color: colors.cream },
  desktop: { flex: 1, flexDirection: 'row', backgroundColor: colors.cream },
  side: { width: 248, padding: 16, gap: 4 },
  brand: { color: colors.cream, fontSize: 22, fontWeight: '700', fontFamily: 'Poppins' },
  brandSub: { color: colors.harvestGold, marginBottom: 12, fontFamily: 'Noto Sans Telugu' },
  sideItem: { minHeight: 44, borderRadius: 12, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', gap: 8 },
  sideOn: { backgroundColor: colors.cream },
  sideLabel: { color: colors.cream, fontWeight: '600', flex: 1 },
  desktopMain: { flex: 1 },
  footer: { flexDirection: 'row', gap: 6, marginTop: 8 },
  footBtn: { flex: 1, minHeight: 44, borderRadius: 12, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, justifyContent: 'center', paddingHorizontal: 8 },
  footText: { color: colors.fieldGreen, fontWeight: '700', textAlign: 'center' },
});
