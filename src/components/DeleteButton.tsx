import Cross from "./icons/Cross";
import { useTodoStore } from "../store/todoStore";

interface Props {
  id: string;
  todoName: string;
}

function DeleteButton({ id, todoName }: Props) {
  const { deleteTodo } = useTodoStore((state) => state);

  const handleClick = () => deleteTodo(id);

  return (
    <button aria-label={`Delete ${todoName}`} className="w-3 h-3 text-light-dg-blue dark:text-dg-blue" onClick={handleClick}>
      <Cross />
    </button>
  );
}

export default DeleteButton;
