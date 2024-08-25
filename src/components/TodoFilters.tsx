import { ACTIVE, ALL, COMPLETED } from "../constants";
import FilterOption from "./FilterOption";

interface Props {
  filter: string;
  setFilter: (type: string) => void;
}

function TodoFilters({ filter, setFilter }: Props) {
  const handleClick = (filter: string) => setFilter(filter);

  return (
    <div className="bg-white dark:bg-vdd-blue py-3 px-6 flex justify-center items-center flex-wrap gap-3 w-full mt-9 rounded-md shadow">
      <FilterOption isActive={filter === ALL} onClick={() => handleClick(ALL)}>
        All
      </FilterOption>
      <FilterOption
        isActive={filter === ACTIVE}
        onClick={() => handleClick(ACTIVE)}
      >
        Active
      </FilterOption>
      <FilterOption
        isActive={filter === COMPLETED}
        onClick={() => handleClick(COMPLETED)}
      >
        Completed
      </FilterOption>
    </div>
  );
}

export default TodoFilters;
