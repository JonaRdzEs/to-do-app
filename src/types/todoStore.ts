export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  toggleCheckTodo: (id: string) => void;
  setTodos: (values: Todo[]) => void;
  addTodo: (value: Todo) => void,
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
}
