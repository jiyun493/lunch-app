import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTodos } from '@/context/TodoContext';

export default function AddScreen() {
  const [text, setText] = useState('');
  const router = useRouter();
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (text.trim() === '') return;
    addTodo(text);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>할 일을 입력하세요</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="예: 발표 자료 만들기"
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>추가하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});