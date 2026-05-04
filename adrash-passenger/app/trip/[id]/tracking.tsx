import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TrackingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [status, setStatus] = useState('Bus is preparing to depart');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracking Trip #{id}</Text>
      <Text style={styles.status}>{status}</Text>
      <Pressable style={styles.button} onPress={() => setStatus('Bus is on the way • ETA 12 min')}>
        <Text style={styles.buttonText}>Update ETA</Text>
      </Pressable>
      <Pressable style={styles.secondary} onPress={() => setStatus('Bus arrived at pickup point')}>
        <Text>Mark Arrived</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 24, gap: 12 }, title: { fontSize: 26, fontWeight: '700' }, status: { color: '#333' }, button: { backgroundColor: '#111', borderRadius: 10, paddingVertical: 12, alignItems: 'center' }, buttonText: { color: '#fff', fontWeight: '600' }, secondary: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, paddingVertical: 12, alignItems: 'center' } });
