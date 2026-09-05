import { useRouterState } from "@tanstack/react-router";
import type { JSX } from "react";
import { useGlobalSearch } from "../providers/globalSearchProvider";
import IconButton from "./button/iconButton";
import Logo from "./logo";

export const Navbar = (): JSX.Element => {
  const { setOpen } = useGlobalSearch();
  const { location } = useRouterState();

  return (
    <header className="tablet-ls:hidden bg-default dark:bg-default-dark sticky top-0 p-3">
      <nav className="flex items-center justify-between">
        <Logo withTitle={false} size="lg" />
        <div className="flex gap-x-3">
          {location.pathname !== "/" && (
            <IconButton
              type="link"
              variant="ghost"
              icon="Home"
              ariaLabel="Home"
              href="/"
              tooltip={{
                title: "Home",
                side: "bottom",
              }}
            />
          )}
          <IconButton
            type="link"
            variant="ghost"
            icon="At"
            ariaLabel="Contact"
            href="mailto:gvisser.business@gmail.com"
            tooltip={{
              title: "Contact",
              side: "bottom",
            }}
          />
          <IconButton
            type="button"
            variant="ghost"
            icon="MagnifyingGlass"
            onClick={() => setOpen(true)}
            ariaLabel="Search"
            tooltip={{
              title: "Search and quickly jump to a page",
              description: "⌘K",
              side: "bottom",
            }}
          />
        </div>
      </nav>
    </header>
  );
};
