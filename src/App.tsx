import { useState } from "react";
import { ALL } from "./constants";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import { useTodoStore } from "./store/todoStore";

function App() {
  const [filter, setFilter] = useState(ALL);
  const { todos } = useTodoStore((state) => state);

  return (
    <main className="bg-vl-gray min-h-dvh dark:bg-vd-blue">
      <Header />
      <div className="relative z-10 w-10/12 max-w-2xl mx-auto">
        <AddTodo />
        <TodoList filter={filter} />
        {todos.length > 0 && <TodoFilters filter={filter} setFilter={setFilter} />}
        <p className="mt-20 text-center text-light-dg-blue dark:text-dg-blue">Drag and drop to reorder list</p>
      </div>
    </main>
  );
}

export default App;
