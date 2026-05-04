import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function MyTripsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Trips (Mock)</Text>
      <Pressable style={styles.button} onPress={() => router.push('/trip/mock-trip/tracking')}>
        <Text style={styles.buttonText}>Track Demo Trip</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center', gap: 12 },
  title: { fontSize: 24, fontWeight: '700', color: '#111' },
  button: { backgroundColor: '#111', borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
