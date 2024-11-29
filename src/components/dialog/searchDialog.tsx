import Dialog from "@/components/dialog/dialog";
import Link from "next/link";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import Icon from "../icon";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { normalizeString } from "@/utils/textUtil";

const pages = [
  { title: "Home", href: "/" },
  { title: "About me", href: "/about" },
  { title: "Timeline", href: "/timeline" },
  { title: "Pokémon", href: "/projects/pokemon" },
  { title: "Settings", href: "/settings" },
];

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

const SearchDialog = ({ open, onClose }: SearchDialogProps): JSX.Element => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof pages>(pages);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredResults = pages.filter((page) => normalizeString(page.title).includes(normalizeString(value)));
      setSearchResults(filteredResults);
    } else {
      setSearchResults(pages);
    }
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      setSelectedIndex((prevIndex) => {
        if (prevIndex === searchResults.length - 1) {
          return 0;
        }
        return Math.min(prevIndex + 1, searchResults.length - 1);
      });
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      setSelectedIndex((prevIndex) => {
        if (prevIndex === 0) {
          return searchResults.length - 1;
        }
        return Math.max(prevIndex - 1, 0);
      });
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setSelectedIndex(-1);
      router.push(searchResults[selectedIndex].href);
      handleOnClose();
    }
  };

  const handleOnClose = (): void => {
    onClose();
    setTimeout(() => {
      setQuery("");
      setSelectedIndex(-1);
      setSearchResults(pages);
    }, 200);
  };

  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      title={{ value: "Search for a page" }}
      aria-label="Search dialog"
      className="relative"
    >
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
            data-autofocus
            id="search-input"
            type="search"
            value={query}
            placeholder="Search"
            className="h-10 w-full rounded-md border py-1 pl-10 pr-1 placeholder:text-zinc-500 dark:border-zinc-200/10 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onBlur={() => setSelectedIndex(-1)}
          />
        </div>
        <section className="relative mt-4">
          {searchResults.length > 0 && (
            <>
              <h2 className="sr-only">Results</h2>
              <div className="divide-y dark:divide-white/10" role="listbox" aria-label="Pages">
                {searchResults.map((page, index) => (
                  <Link
                    key={page.title}
                    id={page.title}
                    role="option"
                    aria-selected={selectedIndex === index}
                    href={page.href}
                    onClick={handleOnClose}
                    className={clsx(
                      "flex h-10 w-full items-center p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800",
                      selectedIndex === index && "bg-zinc-50 dark:bg-zinc-800"
                    )}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
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
