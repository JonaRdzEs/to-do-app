import { useTodoStore } from "../store/todoStore";

function ClearCompletedButton() {
  const { clearCompleted } = useTodoStore((state) => state);
  
  const handleClick = () => clearCompleted();

  return (
    <button className="text-[#9394a5]" onClick={handleClick}>
      Clear completed
    </button>
  );
}

export default ClearCompletedButton;
