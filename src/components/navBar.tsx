import { useGlobalSearch } from "../providers/globalSearchProvider";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import type { JSX } from "react";
import IconButton from "./button/iconButton";

export const Navbar = (): JSX.Element => {
  const { setOpen } = useGlobalSearch();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-default p-3 lg:hidden dark:bg-default-dark">
      <nav className="flex items-center justify-between">
        <Logo withTitle={false} size="lg" />
        <div className="flex gap-x-3">
          {pathname !== "/" && (
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
            icon="OpenMenu"
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
