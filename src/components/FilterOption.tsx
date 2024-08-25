import type { ReactNode } from "react";

interface Props {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode
}

function FilterOption({ isActive, onClick, children }: Props) {
  return (
    <button 
      className={`font-bold ${isActive ? "text-blue" : "text-light-dg-blue dark:text-dg-blue"}`}
      onClick={onClick}
    >
        {children}
      </button>

  );
}

export default FilterOption;
