import { useEffect, useState } from "react";
import { IconType } from "../components/Icon";

const useSystem = () => {
  const [useSystemTheme, setUseSystemTheme] = useState(!("theme" in localStorage));
  const [, setThemeIcon] = useState<IconType>();

  const getTheme = () => {
    if (!("theme" in localStorage)) {
      return "SYSTEM";
    }
    return localStorage.getItem("theme")!.toUpperCase();
  };

  const getThemeIcon = () => {
    if (!("theme" in localStorage)) {
      return "ComputerDesktopIcon";
    }
    if (localStorage.getItem("theme") === "light") {
      return "SunIcon";
    }
    return "MoonIcon";
  };

  const detectThemeSwitch = (e: MediaQueryListEvent) => {
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
      darkThemeMq.removeEventListener("change", detectThemeSwitch);
      return;
    }
    darkThemeMq.addEventListener("change", detectThemeSwitch);
    // eslint-disable-next-line consistent-return
    return () => darkThemeMq.removeEventListener("change", detectThemeSwitch);
  }, [useSystemTheme]);

  const switchTheme = (theme: string) => {
    switch (theme) {
      case "LIGHT":
        setUseSystemTheme(false);
        setThemeIcon("SunIcon");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        return;
      case "DARK":
        setUseSystemTheme(false);
        setThemeIcon("MoonIcon");
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        return;
      case "SYSTEM":
        setUseSystemTheme(true);
        setThemeIcon("ComputerDesktopIcon");
        localStorage.removeItem("theme");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          return;
        }
        document.documentElement.classList.remove("dark");
    }
  };

  return { getThemeIcon, getTheme, switchTheme };
};

export default useSystem;
