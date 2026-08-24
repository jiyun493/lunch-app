import { createContext, useContext, useState, ReactNode } from 'react';

type Todo = {
  id: string;
  title: string;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void; // 1. 삭제 함수 타입 추가
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: '리액트 네이티브 공부하기' },
    { id: '2', title: '팀플 회의 준비하기' },
  ]);

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now().toString(), title };
    setTodos((prev) => [...prev, newTodo]);
  };

  // 2. 삭제 기능(deleteTodo) 로직 추가
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    // 3. 앱에서 쓸 수 있게 value에 deleteTodo 넣어주기
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// 다른 화면에서 쉽게 꺼내 쓰기 위한 커스텀 훅
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos는 TodoProvider 안에서만 써야 해');
  }
  return context;
}