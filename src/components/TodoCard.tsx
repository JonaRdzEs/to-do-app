import { Todo } from "../types";
import DeleteButton from "./DeleteButton";
import { useTodoStore } from "../store/todoStore";

function TodoCard({ id, name, completed }: Todo) {
  const { toggleCheckTodo } = useTodoStore((state) => state);

  const handleCheck = () => toggleCheckTodo(id);
  
  return (
    <li className="py-4 px-5 flex justify-start items-stretch gap-2 border-b-2 border-vlg-blue dark:border-vdg-blue">
      <input
        className="min-w-5 w-5 h-5 border-vlg-blue dark:border-vdg-blue appearance-none bg-transparent m-0 border-2 rounded-full flex justify-center items-center before:content-['\2713'] before:hidden before:h-[20px] checked:before:block before:text-white checked:bg-gradient-to-r from-sky-blue to-lavender-purple checked:border-none "
        type="checkbox" 
        checked={completed}  
        onChange={handleCheck}
      />
      <p className={`grow ${completed ? "text-lg-blue dark:text-dg-blue line-through" : "text-light-vdg-blue dark:text-dark-lg-blue"}`}>{name}</p>
      <DeleteButton id={id} todoName={name} />
    </li>
  );
}

export default TodoCard;
