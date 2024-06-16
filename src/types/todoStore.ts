export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  toggleCheckTodo: (id: string) => void;
  setTodos: (value: Todo) => void;
}
