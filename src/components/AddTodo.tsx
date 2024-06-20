import type { FormEvent } from "react";
import { useTodoStore } from "../store/todoStore";

const randomId = (length = 6) => Math.random().toString(36).substring(2, length+2);

function AddTodo() {
  const { setTodos } = useTodoStore((state) => state);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get("todo")) return;
    setTodos({
      id: randomId(),
      name: formData.get("todo")!.toString(),
      completed: false,
    });
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-24 bg-white w-10/12 mx-auto rounded-md h-12 max-w-md overflow-hidden flex justify-start items-stretch"
    >
      <input
        className="grow px-3"
        id="todo"
        aria-label="Todo name"
        name="todo"
        placeholder="Create a new todo..."
      />
      <button aria-label="Add todo" className="w-12">
        +
      </button>
    </form>
  );
}

export default AddTodo;
