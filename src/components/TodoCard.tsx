import { Todo } from "../types";
import DeleteButton from "./DeleteButton";
import { useTodoStore } from "../store/todoStore";

interface Props extends Todo {
  index: number;
}

let draggingItem: number;
let draggingOverItem: number;

function TodoCard({ id, name, completed, index }: Props) {
  const { toggleCheckTodo, setTodos, todos } = useTodoStore((state) => state);

  const handleCheck = () => toggleCheckTodo(id);

  const handleDragEnd = () => {
    const copyArray = [...todos];
    const draggingItemContent = copyArray[draggingItem];
    copyArray.splice(draggingItem, 1);
    copyArray.splice(draggingOverItem, 0,draggingItemContent);
    setTodos(copyArray);
  };

  const handleDragStart = () => draggingItem = index;

  const handleDragEnter = () => draggingOverItem = index;

  return (
    <li 
      className="py-4 px-5 flex justify-start items-stretch gap-2 border-b-2 border-vlg-blue dark:border-vdg-blue"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
    >
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
