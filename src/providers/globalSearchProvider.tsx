import { noop } from "lodash-es";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type GlobalSearchContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const GlobalSearchContext = createContext<GlobalSearchContextProps>({
  open: false,
  setOpen: noop,
});

type GlobalSearchProviderProps = {
  children: ReactNode;
};

export const GlobalSearchProvider = (props: GlobalSearchProviderProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return (): void => document.removeEventListener("keydown", down);
  }, [open]);

  return (
    <GlobalSearchContext.Provider value={{ open, setOpen: setOpen }}>{props.children}</GlobalSearchContext.Provider>
  );
};

export const useGlobalSearch = (): GlobalSearchContextProps => useContext(GlobalSearchContext);
