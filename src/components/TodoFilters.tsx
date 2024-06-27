import { ACTIVE, ALL, COMPLETED } from "../constants";

interface Props {
  filter: string;
  setFilter: (type: string) => void,
}

function TodoFilters ({ filter, setFilter }: Props) {
  const handleClick = (filter: string) => setFilter(filter);
  
  return (
    <div className="bg-white dark:bg-vdd-blue py-3 px-6 flex justify-center items-center flex-wrap gap-3 w-10/12 mx-auto mt-9 rounded-md shadow">
      <button className={`font-bold ${filter === ALL ? "text-blue" : "text-light-dg-blue dark:text-dg-blue"}`} onClick={() => handleClick(ALL)}>All</button>
      <button className={`font-bold ${filter === ACTIVE ? "text-blue" : "text-light-dg-blue dark:text-dg-blue"}`} onClick={() => handleClick(ACTIVE)}>Active</button>
      <button className={`font-bold ${filter === COMPLETED ? "text-blue" : "text-light-dg-blue dark:text-dg-blue"}`} onClick={() => handleClick(COMPLETED)}>Completed</button>
    </div>
  );
}

export default TodoFilters;
