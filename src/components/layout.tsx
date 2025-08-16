"use client";

import type { PropsWithChildren, JSX } from "react";
import { useFont } from "../hooks/useFont";
import clsx from "clsx";
import SearchDialog from "./dialog/searchDialog";
import { Sidebar } from "./sidebar";
import { useGlobalSearch } from "../providers/globalSearchProvider";
import { Navbar } from "./navBar";

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
            tabIndex={0}
            className="group flex h-dvh w-full grow flex-col overflow-y-auto overscroll-y-none outline-hidden"
          >
            <div className="flex grow flex-col bg-default group-focus-visible:focus-ring-inset lg:mt-3 lg:rounded-lg dark:bg-default-dark">
              {children}
            </div>
          </main>
        </div>
      </div>

      <SearchDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
