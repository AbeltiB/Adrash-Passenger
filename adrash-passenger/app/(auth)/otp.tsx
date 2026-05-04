import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, BorderRadius } from '../../src/constants';

export default function OtpScreen() {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(60);
  const refs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const setDigit = (i: number, v: string) => {
    const ch = v.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[i] = ch;
    setDigits(next);
    if (ch && i < 5) refs.current[i + 1]?.focus();
  };

  const allFilled = digits.every((d) => d !== '');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.title}>Enter verification code</Text>
        <Text style={styles.subtitle}>
          We sent a 6-digit code to <Text style={styles.phone}>+251 9XX XXX XXX</Text>
        </Text>

        <View style={styles.boxes}>
          {digits.map((d, i) => (
            <TextInput
              key={i}
              ref={(r) => { refs.current[i] = r; }}
              value={d}
              onChangeText={(v) => setDigit(i, v)}
              keyboardType="number-pad"
              maxLength={1}
              style={[styles.box, d && styles.boxFilled]}
            />
          ))}
        </View>

        <Pressable
          style={[styles.cta, !allFilled && styles.ctaDisabled]}
          onPress={() => allFilled && router.push('/(auth)/setup')}
          disabled={!allFilled}
        >
          <Text style={styles.ctaText}>Verify</Text>
        </Pressable>

        <View style={styles.resendRow}>
          {seconds > 0 ? (
            <Text style={styles.timer}>Resend code in 0:{String(seconds).padStart(2, '0')}</Text>
          ) : (
            <Pressable onPress={() => setSeconds(60)}>
              <Text style={styles.resend}>Resend code</Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary, padding: Spacing.xl },
  back: { paddingVertical: Spacing.sm },
  backText: { color: Colors.text.secondary, fontSize: 16, fontWeight: '500' },
  content: { flex: 1, justifyContent: 'center', gap: Spacing.md },
  title: { fontSize: 26, fontWeight: '800', color: Colors.text.primary, textAlign: 'center' },
  subtitle: { fontSize: 14, color: Colors.text.tertiary, textAlign: 'center', marginBottom: Spacing.xl },
  phone: { color: Colors.text.primary, fontWeight: '600' },
  boxes: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: Spacing.md },
  box: {
    width: 48, height: 56, borderRadius: BorderRadius.lg,
    borderWidth: 1.5, borderColor: Colors.border.medium,
    textAlign: 'center', fontSize: 22, fontWeight: '700',
    color: Colors.text.primary, backgroundColor: Colors.background.secondary,
  },
  boxFilled: { borderColor: Colors.brand.primary, backgroundColor: '#F1FAF4' },
  cta: { backgroundColor: Colors.brand.primary, borderRadius: BorderRadius.lg, paddingVertical: 16, alignItems: 'center', marginTop: Spacing.lg },
  ctaDisabled: { backgroundColor: Colors.neutral.gray300 },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  resendRow: { alignItems: 'center', marginTop: Spacing.md },
  timer: { color: Colors.text.tertiary, fontSize: 14 },
  resend: { color: Colors.brand.primary, fontWeight: '700', fontSize: 14 },
});
