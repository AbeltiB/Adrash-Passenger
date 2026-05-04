import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '../../src/features/auth/store/authStore';

export default function ProfileTab() {
  const logout = useAuthStore((s) => s.logout);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile (Mock)</Text>
      <Pressable style={styles.button} onPress={logout}><Text style={styles.buttonText}>Logout</Text></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 24, gap: 12 },
  title: { fontSize: 24, fontWeight: '700' },
  button: { backgroundColor: '#111', borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
