import bgImage from "../assets/bg-desktop-light.jpg";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const [mode, toggleMode] = useTheme();

  const handleClick = () => toggleMode();

  return (
    <header className="h-[250px]">
      <img src={bgImage} className="w-full h-[250px] object-cover absolute left-0 right-0 bottom-0 top-0 " role="presentation" />
      <div className="flex justify-between items-baseline w-10/12 max-w-2xl mx-auto relative z-10 mt-20">
        <h1 className="text-white font-bold tracking-widest text-3xl">TODO</h1>
        <button aria-label="Change theme" onClick={handleClick}>
          { mode === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
