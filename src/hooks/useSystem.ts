import { useEffect } from "react";

const useSystem = (useSystemTheme: boolean) => {
  const getTheme = () => {
    if (!("theme" in localStorage)) {
      return "SYSTEM";
    } else if (localStorage.getItem("theme") === "light") {
      return "LIGHT";
    }
    return "DARK";
  };

  const mqListener = (e: MediaQueryListEvent) => {
    if (e.matches) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return;
    }
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if ("theme" in localStorage) {
      darkThemeMq.removeEventListener("change", mqListener);
      return;
    }
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [useSystemTheme]);

  return { getTheme };
};

export default useSystem;
