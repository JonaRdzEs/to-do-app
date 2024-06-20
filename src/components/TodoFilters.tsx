import { ACTIVE, ALL, COMPLETED } from "../constants";

interface Props {
  filter: string;
  setFilter: (type: string) => void,
}

function TodoFilters ({ filter, setFilter }: Props) {
  const handleClick = (filter: string) => setFilter(filter);
  
  return (
    <div className="bg-white py-3 px-6 flex justify-center items-center flex-wrap gap-3 w-10/12 mx-auto mt-9 rounded-md">
      <button className={`font-bold ${filter === ALL ? "text-[#3a7bfd]" : "text-[#9394a5]"}`} onClick={() => handleClick(ALL)}>All</button>
      <button className={`font-bold ${filter === ACTIVE ? "text-[#3a7bfd]" : "text-[#9394a5]"}`} onClick={() => handleClick(ACTIVE)}>Active</button>
      <button className={`font-bold ${filter === COMPLETED ? "text-[#3a7bfd]" : "text-[#9394a5]"}`} onClick={() => handleClick(COMPLETED)}>Completed</button>
    </div>
  );
}

export default TodoFilters;
