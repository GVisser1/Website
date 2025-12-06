import clsx from "clsx";
import type { JSX, PropsWithChildren } from "react";
import { useGlobalSearch } from "@/providers/globalSearchProvider";
import { useFont } from "../hooks/useFont";
import SearchDialog from "./dialog/searchDialog";
import { Navbar } from "./navBar";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }: PropsWithChildren): JSX.Element | null => {
  const { getFontClass } = useFont();
  const { open, setOpen } = useGlobalSearch();

  const classes = clsx("relative flex max-h-dvh bg-sunken dark:bg-sunken-dark", getFontClass());

  return (
    <div id="portal-root" className={classes}>
      <div className="flex grow">
        <Sidebar />

        <div className="flex w-full flex-col overflow-hidden">
          <Navbar />
          <main
            // biome-ignore lint/a11y/noNoninteractiveTabindex: Scroll container should be scrollable
            tabIndex={0}
            className="group flex h-dvh w-full grow flex-col overflow-y-auto overscroll-y-none outline-hidden"
          >
            <div className="group-focus-visible:focus-ring-inset tablet-ls:mt-3 flex grow flex-col tablet-ls:rounded-lg bg-default dark:bg-default-dark">
              {children}
            </div>
          </main>
        </div>
      </div>

      <SearchDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
