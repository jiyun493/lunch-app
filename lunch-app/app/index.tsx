import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTodos } from '../context/TodoContext';

export default function HomeScreen() {
  // 1. deleteTodo 꺼내기 추가
  const { todos, deleteTodo } = useTodos();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* 할 일 텍스트 (누르면 상세 페이지로 이동) */}
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => router.push(`/detail?id=${item.id}&title=${item.title}`)}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>

            {/* 2. 삭제 버튼 추가 */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteText}>삭제</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/add')}
      >
        <Text style={styles.addButtonText}>+ 할 일 추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    // 3. 삭제 버튼과 양옆으로 나란히 배치하기 위한 스타일 추가
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTouchable: {
    flex: 1, // 텍스트 영역이 남은 공간을 꽉 채우도록 설정
  },
  itemText: { fontSize: 16 },
  deleteButton: {
    paddingLeft: 10,
  },
  deleteText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});