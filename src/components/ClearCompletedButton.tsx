import { useTodoStore } from "../store/todoStore";

function ClearCompletedButton() {
  const { clearCompleted } = useTodoStore((state) => state);
  
  const handleClick = () => clearCompleted();

  return (
    <button className="text-light-dg-blue dark:text-dg-blue" onClick={handleClick}>
      Clear completed
    </button>
  );
}

export default ClearCompletedButton;
