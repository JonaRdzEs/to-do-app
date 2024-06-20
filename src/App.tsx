import { useState } from "react";
import { ALL } from "./constants";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [filter, setFilter] = useState(ALL);

  return (
    <main className="bg-[#fafafa] min-h-dvh">
      <Header />
      <AddTodo />
      <TodoList filter={filter} />
      <TodoFilters filter={filter} setFilter={setFilter} />
    </main>
  );
}

export default App;
