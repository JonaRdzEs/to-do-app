import { useState, useEffect } from "react";

const getInitialMode = ():string => {
  const mode = localStorage.getItem("app-mode");
  if(mode) return mode;
  return (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light";
};

function useTheme():[mode:string, onStorageChange: () => void] {
  const [mode, setMode] = useState<string>(getInitialMode());

  const onStorageChange = ():void => setMode((prevMode) => {
    const newMode = prevMode === "light" ? "dark" : "light";
    localStorage.setItem("app-mode", newMode);
    return newMode;
  });

  useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  useEffect(() => {
    if(mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);


  return [ mode, onStorageChange ];
}

export { useTheme };
