import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, BorderRadius } from '../../src/constants';

export default function AgreementScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.title}>Terms & Privacy</Text>
        <Text style={styles.subtitle}>Please review and accept to continue</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.h2}>1. Acceptance of Terms</Text>
        <Text style={styles.p}>
          By using አድራሽ, you agree to be bound by these Terms of Service. You must be at least
          18 years old or have a guardian's consent to book intercity travel.
        </Text>
        <Text style={styles.h2}>2. Booking & Tickets</Text>
        <Text style={styles.p}>
          Tickets are non-transferable. Show your QR ticket to the driver before boarding.
          Refunds follow the cancellation policy displayed at booking time.
        </Text>
        <Text style={styles.h2}>3. Privacy</Text>
        <Text style={styles.p}>
          We collect your phone number, name, next-of-kin information, and trip history to
          deliver our service safely. We do not share your data with third parties for
          marketing purposes.
        </Text>
        <Text style={styles.h2}>4. Live Tracking</Text>
        <Text style={styles.p}>
          During an active trip, your bus's GPS location is shared with you and authorised
          dispatch staff. Your own device location is never tracked.
        </Text>
        <Text style={styles.h2}>5. Safety & SOS</Text>
        <Text style={styles.p}>
          The in-app SOS button alerts dispatch and your registered next-of-kin. False alerts
          may incur charges and account restrictions.
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.cta} onPress={() => router.push('/(auth)/phone')}>
          <Text style={styles.ctaText}>I agree and continue</Text>
        </Pressable>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.decline}>I do not agree</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary },
  header: { padding: Spacing.xl, paddingBottom: Spacing.md },
  title: { fontSize: 26, fontWeight: '800', color: Colors.text.primary },
  subtitle: { fontSize: 14, color: Colors.text.tertiary, marginTop: 4 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: Spacing.xl, paddingBottom: Spacing.lg },
  h2: { fontSize: 16, fontWeight: '700', color: Colors.text.primary, marginTop: Spacing.lg, marginBottom: Spacing.xs },
  p: { fontSize: 14, lineHeight: 22, color: Colors.text.secondary },
  footer: {
    padding: Spacing.xl, gap: Spacing.md,
    borderTopWidth: 1, borderTopColor: Colors.border.light,
    backgroundColor: Colors.background.primary,
  },
  cta: { backgroundColor: Colors.brand.primary, borderRadius: BorderRadius.lg, paddingVertical: 16, alignItems: 'center' },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  decline: { textAlign: 'center', color: Colors.text.tertiary, fontWeight: '500' },
});
