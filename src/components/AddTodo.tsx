import type { FormEvent } from "react";
import { useTodoStore } from "../store/todoStore";

const randomId = (length = 6) => Math.random().toString(36).substring(2, length+2);

function AddTodo() {
  const { addTodo } = useTodoStore((state) => state);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get("todo")) return;
    addTodo({
      id: randomId(),
      name: formData.get("todo")!.toString(),
      completed: false,
    });
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-48 bg-white dark:bg-vdd-blue w-full rounded-md h-12 overflow-hidden flex justify-start items-stretch"
    >
      <input
        className="grow px-3 bg-white dark:bg-vdd-blue dark:text-dark-lg-blue"
        id="todo"
        aria-label="Todo name"
        name="todo"
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default AddTodo;
