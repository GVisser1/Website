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

  const classes = clsx("relative flex max-h-screen bg-zinc-50 dark:bg-zinc-900 lg:dark:bg-zinc-950", getFontClass());

  return (
    <div id="headlessui-portal-root" className={classes}>
      <div className="flex grow">
        <Sidebar />

        <div className="flex w-full flex-col overflow-hidden">
          <Navbar />
          <main
            tabIndex={0}
            className="group flex h-screen w-full grow flex-col overflow-y-auto overscroll-y-none outline-hidden"
          >
            <div className="flex grow flex-col bg-white -outline-offset-1 group-focus-visible:outline lg:mt-3 lg:rounded-tl-lg dark:bg-zinc-900">
              <div className="mx-auto flex w-full max-w-5xl grow flex-col p-8">{children}</div>
            </div>
          </main>
        </div>
      </div>

      <SearchDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
