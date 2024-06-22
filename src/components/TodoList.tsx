import TodoCard from "./TodoCard";
import { ALL, ACTIVE } from "../constants";
import { useTodoStore } from "../store/todoStore";
import ClearCompletedButton from "./ClearCompletedButton";

interface Props {
  filter: string;
}

function TodoList({ filter }: Props) {
  const { todos } = useTodoStore((state) => state);

  const filteredTodos =
    filter === ALL
      ? todos
      : filter === ACTIVE
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    todos.length > 0 && (
      <ul className="bg-white flex flex-col w-10/12 mx-auto rounded-md mt-6 shadow">
        {filteredTodos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
        <section className="flex justify-between items-center p-4">
          <p className="text-[#9394a5]">{todos.filter((todo) => !todo.completed).length} items left</p>
          <ClearCompletedButton />
        </section>
      </ul>
    )
  );
}

export default TodoList;
