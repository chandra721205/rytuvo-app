import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState, type ReactNode } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors, radius, space, type as typeScale } from './tokens';

type IconName = keyof typeof MaterialIcons.glyphMap;

export function Icon({ name, color = colors.ink, size = 22 }: { name: IconName; color?: string; size?: number }) {
  return <MaterialIcons name={name} color={color} size={size} />;
}

export function Button({
  label,
  onPress,
  tone = 'primary',
  fill = true,
  icon,
}: {
  label: string;
  onPress?: () => void;
  tone?: 'primary' | 'secondary' | 'danger' | 'ghost';
  fill?: boolean;
  icon?: IconName;
}) {
  const palette = {
    primary: { bg: colors.fieldGreen, fg: colors.onBrand, border: colors.fieldGreen },
    secondary: { bg: colors.surface, fg: colors.fieldGreen, border: colors.fieldGreen },
    danger: { bg: colors.chilli, fg: colors.onBrand, border: colors.chilli },
    ghost: { bg: 'transparent', fg: colors.ink, border: 'transparent' },
  }[tone];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, { backgroundColor: palette.bg, borderColor: palette.border, alignSelf: fill ? 'stretch' : 'flex-start' }]}
    >
      {icon ? <Icon name={icon} color={palette.fg} size={18} /> : null}
      <Text style={[styles.buttonText, { color: palette.fg }]}>{label}</Text>
    </Pressable>
  );
}

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
  keyboard = 'default',
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboard?: 'default' | 'numeric' | 'phone-pad';
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        keyboardType={keyboard}
        style={styles.input}
      />
    </View>
  );
}

export function OTPInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const digits = value.padEnd(6, ' ').slice(0, 6).split('');
  return (
    <View>
      <View style={styles.otpRow}>
        {digits.map((digit, index) => (
          <View key={index} style={[styles.otpBox, digit.trim() ? styles.otpOn : null]}>
            <Text style={styles.otpDigit}>{digit.trim()}</Text>
          </View>
        ))}
      </View>
      <TextInput
        value={value}
        onChangeText={(next) => onChange(next.replace(/\D/g, '').slice(0, 6))}
        keyboardType="number-pad"
        maxLength={6}
        style={styles.otpHidden}
        accessibilityLabel="One time password"
      />
    </View>
  );
}

export function BottomSheetPicker({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select',
}: {
  label: string;
  value?: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Pressable accessibilityRole="button" style={styles.dropdown} onPress={() => setOpen(true)}>
        <Text style={[styles.dropdownText, !value && { color: colors.secondary }]}>{value || placeholder}</Text>
        <Icon name="expand-more" color={colors.secondary} />
      </Pressable>
      <Modal visible={open} transparent animationType="slide" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.sheetBackdrop} onPress={() => setOpen(false)}>
          <Pressable style={styles.sheet} onPress={() => undefined}>
            <View style={styles.sheetHandle} />
            <Text style={styles.sheetTitle}>{label}</Text>
            <ScrollView>
              {options.map((option) => (
                <Pressable
                  key={option}
                  style={styles.sheetRow}
                  onPress={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.sheetOption}>{option}</Text>
                  {option === value ? <Icon name="check" color={colors.fieldGreen} /> : null}
                </Pressable>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function LotCard({
  title,
  token,
  qty,
  status,
  price,
  onPress,
}: {
  title: string;
  token: string;
  qty: string;
  status: string;
  price?: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Badge label={status} tone="info" />
      </View>
      <Text style={styles.token}>{token}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.meta}>{qty}</Text>
        {price ? <Text style={styles.price}>{price}</Text> : null}
      </View>
    </Pressable>
  );
}

export function BidCard({
  label,
  price,
  meta,
  when,
  top,
  tone = 'default',
}: {
  label: string;
  price: string;
  meta: string;
  when: string;
  top?: boolean;
  tone?: 'default' | 'danger' | 'success';
}) {
  return (
    <View style={[styles.card, top && styles.bidTop]}>
      <View style={styles.rowBetween}>
        <View style={styles.bidder}>
          <Text style={styles.bidderMark}>{label}</Text>
        </View>
        <Text style={[styles.price, tone === 'danger' && { color: colors.chilli }, tone === 'success' && { color: colors.success }]}>{price}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.meta}>{meta}</Text>
        <Text style={styles.meta}>{when}</Text>
      </View>
    </View>
  );
}

export function Badge({ label, tone = 'info' }: { label: string; tone?: 'info' | 'success' | 'warning' | 'danger' | 'gold' }) {
  const map = {
    info: { bg: colors.infoSoft, fg: colors.info },
    success: { bg: colors.successSoft, fg: colors.success },
    warning: { bg: colors.warningSoft, fg: colors.warning },
    danger: { bg: colors.dangerSoft, fg: colors.danger },
    gold: { bg: '#FCEFD2', fg: '#8A5A00' },
  }[tone];
  return (
    <View style={[styles.badge, { backgroundColor: map.bg }]}>
      <Text style={[styles.badgeText, { color: map.fg }]}>{label}</Text>
    </View>
  );
}

export function Chip({ label, selected, onPress }: { label: string; selected?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, selected && styles.chipOn]}>
      <Text style={[styles.chipText, selected && { color: colors.onBrand }]}>{label}</Text>
    </Pressable>
  );
}

export function TopBar({
  title,
  subtitle,
  onBack,
  right,
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  right?: ReactNode;
}) {
  return (
    <View style={styles.topBar}>
      {onBack ? (
        <Pressable accessibilityRole="button" onPress={onBack} style={styles.iconBtn}>
          <Icon name="arrow-back" color={colors.ink} />
        </Pressable>
      ) : (
        <View style={styles.mark}>
          <Icon name="eco" color={colors.harvestGold} size={18} />
        </View>
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.topTitle} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? <Text style={styles.topSub}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  );
}

export function BottomNav({
  items,
  active,
  onPress,
  accent,
}: {
  items: { id: string; label: string; icon: IconName }[];
  active?: string;
  onPress: (id: string) => void;
  accent: string;
}) {
  return (
    <View style={styles.nav}>
      {items.map((item) => {
        const on = item.id === active;
        return (
          <Pressable key={item.id} style={styles.navItem} onPress={() => onPress(item.id)}>
            <Icon name={item.icon} color={on ? accent : colors.secondary} size={22} />
            <Text style={[styles.navLabel, { color: on ? accent : colors.secondary }]} numberOfLines={1}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <View style={styles.stepper}>
      {steps.map((step, index) => (
        <View key={step} style={styles.step}>
          <View style={[styles.stepDot, index <= current && { backgroundColor: colors.fieldGreen }]}>
            <Text style={styles.stepNum}>{index + 1}</Text>
          </View>
          <Text style={styles.stepLabel} numberOfLines={1}>
            {step}
          </Text>
        </View>
      ))}
    </View>
  );
}

export function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  if (!message) return null;
  return (
    <Pressable style={styles.toast} onPress={onClose}>
      <Icon name="campaign" color={colors.fieldGreenDark} size={18} />
      <Text style={styles.toastText}>{message}</Text>
    </Pressable>
  );
}

export function ConfirmModal({
  visible,
  title,
  body,
  confirmLabel,
  onConfirm,
  onClose,
}: {
  visible: boolean;
  title: string;
  body: string;
  confirmLabel: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          <View style={styles.warnIcon}>
            <Icon name="warning" color={colors.warning} size={28} />
          </View>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalBody}>{body}</Text>
          <View style={styles.rowGap}>
            <View style={{ flex: 1 }}>
              <Button label="Cancel" tone="secondary" onPress={onClose} />
            </View>
            <View style={{ flex: 1 }}>
              <Button label={confirmLabel} onPress={onConfirm} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export function EmptyState({ title, body, action, onAction }: { title: string; body: string; action?: string; onAction?: () => void }) {
  return (
    <View style={styles.empty}>
      <View style={styles.emptyIcon}>
        <Icon name="inventory-2" color={colors.fieldGreen} size={36} />
      </View>
      <Text style={styles.modalTitle}>{title}</Text>
      <Text style={styles.modalBody}>{body}</Text>
      {action ? <Button label={action} onPress={onAction} fill={false} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: radius.md,
    borderWidth: 1.5,
    paddingHorizontal: space.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: { fontSize: typeScale.body, fontWeight: '700', fontFamily: 'Noto Sans' },
  field: { gap: 6 },
  fieldLabel: { fontSize: typeScale.label, color: colors.secondary, fontWeight: '600', fontFamily: 'Noto Sans' },
  input: {
    minHeight: 48,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: space.md,
    fontSize: typeScale.body,
    color: colors.ink,
    fontFamily: 'Noto Sans',
  },
  otpRow: { flexDirection: 'row', gap: 8, justifyContent: 'space-between' },
  otpBox: {
    width: 46,
    height: 54,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpOn: { borderColor: colors.fieldGreen },
  otpDigit: { fontSize: 22, fontWeight: '700', color: colors.ink },
  otpHidden: { marginTop: 8, minHeight: 44, letterSpacing: 8, fontSize: 18, color: colors.ink },
  dropdown: {
    minHeight: 48,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: space.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: { fontSize: typeScale.body, color: colors.ink, fontFamily: 'Noto Sans', flex: 1 },
  sheetBackdrop: { flex: 1, backgroundColor: 'rgba(20,36,27,0.45)', justifyContent: 'flex-end' },
  sheet: { backgroundColor: colors.cream, borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl, maxHeight: '70%', padding: space.lg, gap: space.sm },
  sheetHandle: { width: 48, height: 4, borderRadius: 2, backgroundColor: colors.border, alignSelf: 'center' },
  sheetTitle: { fontSize: typeScale.h3, fontWeight: '700', color: colors.ink, fontFamily: 'Poppins' },
  sheetRow: { minHeight: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.border },
  sheetOption: { fontSize: typeScale.body, color: colors.ink, fontFamily: 'Noto Sans' },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: space.lg,
    gap: 8,
  },
  cardTitle: { fontSize: typeScale.h3, fontWeight: '700', color: colors.ink, fontFamily: 'Noto Sans', flex: 1 },
  token: { fontSize: typeScale.caption, color: colors.secondary, fontFamily: 'Noto Sans' },
  price: { fontSize: typeScale.h3, fontWeight: '700', color: colors.fieldGreen, fontFamily: 'Noto Sans' },
  meta: { fontSize: typeScale.label, color: colors.secondary, fontFamily: 'Noto Sans' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  rowGap: { flexDirection: 'row', gap: 12 },
  bidTop: { borderColor: colors.fieldGreen, borderWidth: 1.5 },
  bidder: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.fieldGreen, alignItems: 'center', justifyContent: 'center' },
  bidderMark: { color: colors.onBrand, fontWeight: '700' },
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: typeScale.caption, fontWeight: '700' },
  chip: { borderRadius: 999, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: colors.surface },
  chipOn: { backgroundColor: colors.fieldGreen, borderColor: colors.fieldGreen },
  chipText: { color: colors.ink, fontWeight: '600', fontFamily: 'Noto Sans' },
  topBar: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: space.lg, paddingVertical: space.md, backgroundColor: colors.cream },
  topTitle: { fontSize: typeScale.h3, fontWeight: '700', color: colors.ink, fontFamily: 'Poppins' },
  topSub: { fontSize: typeScale.caption, color: colors.secondary, fontFamily: 'Noto Sans Telugu' },
  iconBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  mark: { width: 36, height: 36, borderRadius: 10, backgroundColor: colors.fieldGreen, alignItems: 'center', justifyContent: 'center' },
  nav: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.surface, paddingBottom: 8, paddingTop: 6 },
  navItem: { flex: 1, alignItems: 'center', gap: 2, minHeight: 48, justifyContent: 'center' },
  navLabel: { fontSize: 11, fontWeight: '600' },
  stepper: { flexDirection: 'row', gap: 8 },
  step: { flex: 1, alignItems: 'center', gap: 4 },
  stepDot: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  stepNum: { color: colors.onBrand, fontWeight: '700', fontSize: 12 },
  stepLabel: { fontSize: 11, color: colors.secondary, textAlign: 'center' },
  toast: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 84,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    zIndex: 20,
  },
  toastText: { flex: 1, color: colors.ink, fontFamily: 'Noto Sans' },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(20,36,27,0.45)', alignItems: 'center', justifyContent: 'center', padding: 24 },
  modalCard: { width: '100%', maxWidth: 360, backgroundColor: colors.surface, borderRadius: radius.xl, padding: 24, gap: 12 },
  modalTitle: { fontSize: typeScale.h2, fontWeight: '700', color: colors.ink, textAlign: 'center', fontFamily: 'Poppins' },
  modalBody: { fontSize: typeScale.body, color: colors.secondary, textAlign: 'center', fontFamily: 'Noto Sans' },
  warnIcon: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.warningSoft, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
  empty: { alignItems: 'center', gap: 8, padding: 24, backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border },
  emptyIcon: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#E7F3EC', alignItems: 'center', justifyContent: 'center' },
});
