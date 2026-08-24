import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/use-color-scheme';
import { TodoProvider } from '../context/TodoContext'; // 중괄호와 상대경로!

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <TodoProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ title: '할 일 목록' }} />
          <Stack.Screen name="add" options={{ title: '할 일 추가' }} />
          <Stack.Screen name="detail" options={{ title: '상세보기' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </TodoProvider>
  );
}