import { Todo } from "../types";
import DeleteButton from "./DeleteButton";
import { useTodoStore } from "../store/todoStore";

function TodoCard({ id, name, completed }: Todo) {
  const { toggleCheckTodo } = useTodoStore((state) => state);

  const handleCheck = () => toggleCheckTodo(id);
  
  return (
    <li className="py-4 px-5 flex justify-start items-stretch gap-2 border-b-2 border-[#e4e5f1]">
      <input
        className="min-w-5 w-5 h-5 appearance-none bg-white m-0 border-2 rounded-full flex justify-center items-center before:content-['\2713'] before:hidden before:h-[20px] checked:before:block before:text-white checked:bg-gradient-to-r from-[#57ddff] to-[#c058f3] checked:border-none "
        type="checkbox" 
        checked={completed}  
        onChange={handleCheck}
      />
      <p className={`grow ${completed ? "text-[#d2d3db] line-through" : "text-[#484b6a]"}`}>{name}</p>
      <DeleteButton id={id} todoName={name} />
    </li>
  );
}

export default TodoCard;
