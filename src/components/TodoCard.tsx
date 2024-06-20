import { Todo } from "../types";
import DeleteButton from "./DeleteButton";
import { useTodoStore } from "../store/todoStore";

function TodoCard({ id, name, completed }: Todo) {
  const { toggleCheckTodo } = useTodoStore((state) => state);

  const handleCheck = () => toggleCheckTodo(id);
  
  return (
    <li className="p-4 flex justify-start items-stretch gap-2 border-b-2 border-[#e4e5f1]">
      <input
        className="w-5 h-5"
        type="checkbox" 
        checked={completed}  
        onChange={handleCheck}
      />
      <p className="grow text-[#484b6a]">{name}</p>
      <DeleteButton id={id} />
    </li>
  );
}

export default TodoCard;
