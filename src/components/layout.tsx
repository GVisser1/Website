import type { JSX, PropsWithChildren } from "react";
import { useThemeColor } from "../hooks/useThemeColor";
import { Navbar } from "./navBar";

export const Layout = ({ children }: PropsWithChildren): JSX.Element | null => {
  useThemeColor();

  return (
    <div className="relative flex grow flex-col">
      <Navbar />
      <main className="flex w-full grow flex-col">{children}</main>
    </div>
  );
};
