import { useState, useEffect } from "react";

const getInitialMode = ():string =>
  localStorage.getItem("app-mode") ||
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light";

function useTheme():[mode:string, onStorageChange: () => void] {
  const [mode, setMode] = useState<string>(getInitialMode());
  
  const onStorageChange = ():void => setMode((prevMode) => {
    const newMode = prevMode === "light" ? "dark": "light";
    localStorage.setItem("app-mode", newMode);
    if(newMode === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return newMode;
  });

  useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  return [ mode, onStorageChange ];
}

export { useTheme };
