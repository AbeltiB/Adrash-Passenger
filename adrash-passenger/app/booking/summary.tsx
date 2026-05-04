import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking: Summary</Text>
      <Pressable style={styles.button} onPress={() => router.push('/booking/payment')}>
        <Text style={styles.buttonText}>Proceed to Pay</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center', gap: 12 },
  title: { fontSize: 26, fontWeight: '700' },
  button: { backgroundColor: '#111', borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
