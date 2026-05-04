import { StyleSheet, Text, View } from 'react-native';

export default function RewardsTab() {
  return <View style={styles.container}><Text style={styles.title}>Rewards (Mock)</Text></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }, title: { fontSize: 22, fontWeight: '600' } });
