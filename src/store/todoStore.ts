import { create } from "zustand";
import type { Todo, TodoStore } from "../types";
import { persist } from "zustand/middleware";

export const useTodoStore = create<TodoStore>()(persist(
  (set, get) => ({
    todos: [],
    toggleCheckTodo: (id: string) =>
      set((state) => {
        const todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
        );
        return { todos };
      }),
    setTodos: (todo: Todo) =>
      set(() => ({ todos: [...get().todos, todo ] }))
  }),
  {
    name: "todo-app-storage",
  }
));
