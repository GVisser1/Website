import { useGlobalSearch } from "../providers/globalSearchProvider";
import { IconButton, IconLink } from "./button";
import { usePathname } from "next/navigation";
import Logo from "./logo";

import type { JSX } from "react";

export const Navbar = (): JSX.Element => {
  const { setOpen } = useGlobalSearch();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-default p-3 lg:hidden dark:bg-default-dark">
      <nav className="flex items-center justify-between">
        <Logo withTitle={false} size="lg" />
        <div className="flex gap-x-3">
          {pathname !== "/" && (
            <IconLink
              icon="Home"
              variant="ghost"
              aria-label="Home"
              href="/"
              tooltip={{
                title: "Home",
                side: "bottom",
              }}
            />
          )}
          <IconLink
            icon="At"
            variant="ghost"
            aria-label="Contact"
            href="mailto:gvisser.business@gmail.com"
            tooltip={{
              title: "Contact",
              side: "bottom",
            }}
          />
          <IconButton
            icon="OpenMenu"
            variant="ghost"
            onClick={() => setOpen(true)}
            aria-label="Search"
            tooltip={{
              title: "Search and quickly jump to a Page",
              description: "⌘K",
              side: "bottom",
            }}
          />
        </div>
      </nav>
    </header>
  );
};
