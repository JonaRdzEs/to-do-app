import Cross from "./icons/Cross";
import { useTodoStore } from "../store/todoStore";

interface Props {
  id: string;
}

function DeleteButton({ id }: Props) {
  const { deleteTodo } = useTodoStore((state) => state);

  const handleClick = () => deleteTodo(id);

  return (
    <button className="w-3 h-3" onClick={handleClick}>
      <Cross />
    </button>
  );
}

export default DeleteButton;
