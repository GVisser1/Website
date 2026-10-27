import clsx from "clsx";
import type { JSX, PropsWithChildren } from "react";
import { useFont } from "../hooks/useFont";
import { Navbar } from "./navBar";

export const Layout = ({ children }: PropsWithChildren): JSX.Element | null => {
  const { getFontClass } = useFont();

  const classes = clsx("relative flex grow flex-col", getFontClass());

  return (
    <div className={classes}>
      <Navbar />
      <main className="flex w-full grow flex-col">{children}</main>
    </div>
  );
};
