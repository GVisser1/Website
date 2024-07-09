import Dialog from "@/components/dialog/dialog";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import Icon from "../icon";
import clsx from "clsx";

const pages = [
  { title: "Home", href: "/" },
  { title: "About me", href: "/about" },
  { title: "Timeline", href: "/timeline" },
  { title: "Settings", href: "/settings" },
];

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};
const SearchDialog = ({ open, onClose }: SearchDialogProps): JSX.Element => {
  const [query, setQuery] = useState("");

  const searchResults = pages.filter((page) => page.title.toLowerCase().includes(query.toLowerCase()));

  const handleOnClose = (): void => {
    onClose();
    setTimeout(() => setQuery(""), 200);
  };

  return (
    <Dialog open={open} onClose={handleOnClose} aria-label="Search dialog" className="relative">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-zinc-700 dark:text-white">Search for a page</h1>

        <Button
          autoFocus
          onClick={handleOnClose}
          aria-label="Close"
          className="flex cursor-default items-center justify-center rounded-lg p-2 data-[hover]:bg-zinc-950/5 dark:data-[hover]:bg-white/5"
        >
          <Icon name="XIcon" className="size-6" />
        </Button>
      </div>
      <search>
        <label htmlFor="search-input" className="sr-only">
          Search for a page
        </label>
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            className="pointer-events-none absolute left-2.5 top-2.5 size-4 fill-zinc-500 dark:fill-zinc-400"
          />
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="h-10 w-full rounded-md border py-1 pl-10 pr-1 placeholder:text-zinc-500 dark:border-white/10 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
          />
        </div>
        <section className="relative mt-4">
          {searchResults.length > 0 && (
            <>
              <h2 className="sr-only">Results</h2>
              <ul className="divide-y dark:divide-white/10">
                {searchResults.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      onClick={handleOnClose}
                      className="flex h-10 w-full items-center p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {searchResults.length === 0 && (
            <output className={clsx("flex w-full flex-col items-center justify-center gap-y-8 pt-5")}>
              <h2>No results found</h2>
            </output>
          )}
        </section>
      </search>
    </Dialog>
  );
};

export default SearchDialog;
