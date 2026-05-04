import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SeatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking: Seats</Text>
      <Pressable style={styles.button} onPress={() => router.push('/booking/passengers')}>
        <Text style={styles.buttonText}>Next</Text>
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
