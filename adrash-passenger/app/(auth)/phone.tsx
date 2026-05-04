import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, BorderRadius } from '../../src/constants';

export default function PhoneScreen() {
  const [phone, setPhone] = useState('');
  const valid = /^(09|07)\d{7}$/.test(phone);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <View style={styles.content}>
        <View style={styles.illust}>
          <Text style={styles.illustEmoji}>📱</Text>
        </View>
        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.subtitle}>We&apos;ll send you a verification code by SMS</Text>

        <View style={styles.inputRow}>
          <View style={styles.flagBox}>
            <Text style={styles.flag}>🇪🇹</Text>
            <Text style={styles.flagCode}>+251</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="9XX XXX XXX"
            placeholderTextColor={Colors.text.disabled}
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>

        {phone.length > 0 && !valid && (
          <Text style={styles.error}>Enter a valid Ethiopian number (starts with 09 or 07)</Text>
        )}

        <Pressable
          style={[styles.cta, !valid && styles.ctaDisabled]}
          onPress={() => valid && router.push('/(auth)/otp')}
          disabled={!valid}
        >
          <Text style={styles.ctaText}>Send Code</Text>
        </Pressable>

        <Text style={styles.terms}>
          By continuing you agree to our <Text style={styles.link}>Terms</Text> &{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary, padding: Spacing.xl },
  back: { paddingVertical: Spacing.sm },
  backText: { color: Colors.text.secondary, fontSize: 16, fontWeight: '500' },
  content: { flex: 1, justifyContent: 'center', gap: Spacing.md },
  illust: {
    width: 80, height: 80, borderRadius: 40, backgroundColor: '#F1FAF4',
    alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: Spacing.md,
  },
  illustEmoji: { fontSize: 36 },
  title: { fontSize: 26, fontWeight: '800', color: Colors.text.primary, textAlign: 'center' },
  subtitle: { fontSize: 14, color: Colors.text.tertiary, textAlign: 'center', marginBottom: Spacing.lg },
  inputRow: { flexDirection: 'row', gap: Spacing.sm, alignItems: 'center' },
  flagBox: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: Spacing.md, paddingVertical: 14,
    borderWidth: 1, borderColor: Colors.border.medium, borderRadius: BorderRadius.lg,
    backgroundColor: Colors.background.secondary,
  },
  flag: { fontSize: 18 },
  flagCode: { fontWeight: '600', color: Colors.text.primary },
  input: {
    flex: 1, borderWidth: 1, borderColor: Colors.border.medium, borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md, paddingVertical: 14, fontSize: 16,
    backgroundColor: Colors.background.primary, color: Colors.text.primary,
  },
  error: { color: Colors.semantic.error, fontSize: 13 },
  cta: {
    backgroundColor: Colors.brand.primary, borderRadius: BorderRadius.lg,
    paddingVertical: 16, alignItems: 'center', marginTop: Spacing.md,
  },
  ctaDisabled: { backgroundColor: Colors.neutral.gray300 },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  terms: { textAlign: 'center', color: Colors.text.tertiary, fontSize: 12, marginTop: Spacing.md },
  link: { color: Colors.brand.primary, fontWeight: '600' },
});
