import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailScreen() {
  const { id, title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>할 일 ID: {id}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 14, color: '#888', marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 'bold' },
});