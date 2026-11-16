import type { JSX, PropsWithChildren } from "react";
import { useThemeColor } from "../hooks/useThemeColor";
import { Navbar } from "./navBar";

const MAIN_ID = "main-content";

export const Layout = ({ children }: PropsWithChildren): JSX.Element | null => {
  useThemeColor();

  return (
    <div className="relative flex grow flex-col">
      {/* Hidden until focused, so keyboard users can jump past the navigation */}
      <a
        href={`#${MAIN_ID}`}
        onClick={(event) => {
          // Move focus without adding a hash to the URL
          event.preventDefault();
          document.getElementById(MAIN_ID)?.focus();
        }}
        className="sr-only rounded-sm btn-primary text-small font-medium focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus-visible:focus-ring"
      >
        Skip to content
      </a>
      <Navbar />
      <main id={MAIN_ID} tabIndex={-1} className="flex w-full grow flex-col outline-none">
        {children}
      </main>
    </div>
  );
};
