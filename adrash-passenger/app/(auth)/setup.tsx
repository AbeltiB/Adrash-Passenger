import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '../../src/features/auth/store/authStore';

export default function SetupScreen() {
  const setAuthenticated = useAuthStore((s) => s.setAuthenticated);

  const completeSetup = () => {
    setAuthenticated(true);
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Setup</Text>
      <Text style={styles.subtitle}>Mock setup complete in one click.</Text>
      <Pressable style={styles.button} onPress={completeSetup}>
        <Text style={styles.buttonText}>Finish & Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center', gap: 12 },
  title: { fontSize: 28, fontWeight: '700', color: '#111' },
  subtitle: { color: '#666' },
  button: { backgroundColor: '#111', borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
