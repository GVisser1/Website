import { useGlobalSearch } from "@/providers/globalSearchProvider";
import { IconButton, IconLink } from "./button";
import Logo from "./logo";

export const Navbar = (): JSX.Element => {
  const { setOpen } = useGlobalSearch();

  return (
    <header className="sticky top-0 bg-white p-3 dark:bg-zinc-900 lg:hidden">
      <nav className="flex items-center justify-between">
        <Logo withTitle={false} size="lg" />
        <div className="flex gap-x-3">
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
