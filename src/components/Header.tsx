//import bgImage from "../assets/bg-mobile-light.jpg";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const [mode, toggleMode] = useTheme();

  const handleClick = () => toggleMode();

  return (
    <header className="bg-[url(src/assets/bg-desktop-light.jpg)] bg-no-repeat h-[200px] pt-10">
      <div className="flex justify-between items-baseline w-10/12 max-w-4xl mx-auto">
        <h1 className="text-white font-bold tracking-widest text-3xl">TODO</h1>
        <button aria-label="Change theme" onClick={handleClick}>
          { mode === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
