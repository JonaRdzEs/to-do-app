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
      <div className="bg-white dark:bg-vdd-blue w-full rounded-md mt-6 shadow">
        <ul className=" flex flex-col">
          {filteredTodos.map((todo, index) => (
            <TodoCard key={todo.id} index={index} {...todo} />
          ))}
        </ul>
        <section className="flex justify-between items-center p-4">
          <p className="text-light-dg-blue dark:text-dg-blue">{todos.filter((todo) => !todo.completed).length} items left</p>
          <ClearCompletedButton />
        </section>
      </div>
    )
  );
}

export default TodoList;
