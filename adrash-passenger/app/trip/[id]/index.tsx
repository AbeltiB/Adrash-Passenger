import { useLocalSearchParams, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TripDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip #{id}</Text>
      <Pressable style={styles.button} onPress={() => router.push(`/trip/${id}/tracking`)}>
        <Text style={styles.buttonText}>Track Trip</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 24, gap: 12 }, title: { fontSize: 26, fontWeight: '700' }, button: { backgroundColor: '#111', borderRadius: 10, paddingVertical: 12, alignItems: 'center' }, buttonText: { color: '#fff', fontWeight: '600' } });
