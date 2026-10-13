import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Svg, { Circle, Line, Polyline, Text as SvgText } from 'react-native-svg';
import { colors } from './tokens';

/** Simple price/trend line chart (1Tradie dashboard, crop selection, market). */
export function TrendChart({ title, points, unit = '₹/q', labels }: { title: string; points: number[]; unit?: string; labels?: string[] }) {
  const w = 300;
  const h = 120;
  const pad = 24;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const xy = points.map((p, i) => [pad + (i * (w - pad * 2)) / Math.max(points.length - 1, 1), h - pad - ((p - min) / span) * (h - pad * 2)]);
  const last = points[points.length - 1];
  const change = points.length > 1 ? ((last - points[0]) / points[0]) * 100 : 0;
  return (
    <View style={styles.card} accessibilityLabel={`${title} chart`}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.sub, { color: change >= 0 ? colors.fieldGreen : colors.chilli }]}>{`${unit} ${last.toLocaleString('en-IN')} · ${change >= 0 ? '▲' : '▼'} ${Math.abs(change).toFixed(1)}%`}</Text>
      <Svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`}>
        <Line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke={colors.border} />
        <Polyline points={xy.map((p) => p.join(',')).join(' ')} fill="none" stroke={colors.fieldGreen} strokeWidth={2.5} />
        {xy.map(([x, y], i) => (
          <Circle key={i} cx={x} cy={y} r={3} fill={colors.harvestGold} />
        ))}
        {labels?.map((l, i) => (
          <SvgText key={l} x={xy[i]?.[0] ?? 0} y={h - 6} fontSize={9} fill={colors.secondary} textAnchor="middle">{l}</SvgText>
        ))}
      </Svg>
    </View>
  );
}

/** Take or pick photos for a lot or quality sample. Stores local URIs only (offline demo). */
export function PhotoField({ label, value, onChange }: { label: string; value: string[]; onChange: (uris: string[]) => void }) {
  const [err, setErr] = useState('');
  const add = async (camera: boolean) => {
    setErr('');
    try {
      const perm = camera ? await ImagePicker.requestCameraPermissionsAsync() : await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) return setErr('Permission denied. Allow it in Settings.');
      const res = camera
        ? await ImagePicker.launchCameraAsync({ quality: 0.5 })
        : await ImagePicker.launchImageLibraryAsync({ quality: 0.5, mediaTypes: ['images'] });
      if (!res.canceled) onChange([...value, ...res.assets.map((a) => a.uri)].slice(0, 6));
    } catch {
      setErr('Camera not available on this device.');
    }
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={() => add(true)}><Text style={styles.btnT}>Take photo</Text></Pressable>
        <Pressable style={styles.btn} onPress={() => add(false)}><Text style={styles.btnT}>From gallery</Text></Pressable>
      </View>
      <View style={styles.row}>
        {value.map((uri) => (
          <Pressable key={uri} onLongPress={() => onChange(value.filter((u) => u !== uri))}>
            <Image source={{ uri }} style={styles.thumb} />
          </Pressable>
        ))}
      </View>
      <Text style={styles.sub}>{err || `${value.length}/6 photos · long-press to remove`}</Text>
    </View>
  );
}

/** QR for a lot token (1Tradie tokenization / provenance). */
export function LotQR({ token, caption }: { token: string; caption?: string }) {
  return (
    <View style={[styles.card, { alignItems: 'center' }]}>
      <QRCode value={token} size={140} color={colors.ink} backgroundColor="#FFFFFF" />
      <Text style={styles.title}>{token}</Text>
      {caption ? <Text style={styles.sub}>{caption}</Text> : null}
    </View>
  );
}

/** Static location card (maps are out of scope for the offline demo). */
export function LocationCard({ name, address, km }: { name: string; address: string; km?: number }) {
  return (
    <View style={[styles.card, styles.row]}>
      <View style={styles.pin}><Text style={{ color: '#fff', fontWeight: '700' }}>⌖</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.sub}>{address}{km != null ? ` · ${km} km` : ''}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 12, gap: 6 },
  title: { fontWeight: '700', color: colors.ink, flexShrink: 1 },
  sub: { color: colors.secondary, fontSize: 12, flexShrink: 1 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, alignItems: 'center' },
  btn: { borderRadius: 10, borderWidth: 1, borderColor: colors.fieldGreen, paddingHorizontal: 12, minHeight: 40, justifyContent: 'center' },
  btnT: { color: colors.fieldGreen, fontWeight: '700' },
  thumb: { width: 64, height: 64, borderRadius: 8 },
  pin: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.chilli, alignItems: 'center', justifyContent: 'center' },
});
