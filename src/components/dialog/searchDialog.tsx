import Link from "next/link";
import type { ChangeEvent, KeyboardEvent, JSX } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import SearchInput from "../search";
import Icon from "../icon";
import type { Page } from "../../constants";
import { PAGES } from "../../constants";
import { isEmpty, isNil } from "lodash-es";
import { normalizeString } from "../../utils/textUtil";
import Dialog from "./dialog";

const EXIT_ANIMATION_DURATION = 200;

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

const SearchDialog = ({ open, onClose }: SearchDialogProps): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [availablePages, setAvailablePages] = useState<Page[]>(PAGES);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    setTimeout(() => {
      setAvailablePages(PAGES.filter((page) => page.href !== pathname));
    }, EXIT_ANIMATION_DURATION);
  }, [pathname]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setQuery(value);

    if (isNil(value)) {
      setAvailablePages(PAGES.filter((page) => page.href !== pathname));
      setSelectedIndex(0);
      return;
    }

    const filteredResults = PAGES.filter(
      (page) => page.href !== pathname && normalizeString(page.name).includes(normalizeString(value)),
    );

    setAvailablePages(filteredResults);
    setSelectedIndex(isEmpty(filteredResults) ? -1 : 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (key === "ArrowDown" || key === "ArrowRight") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % availablePages.length);
    } else if (key === "ArrowUp" || key === "ArrowLeft") {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + availablePages.length) % availablePages.length);
    } else if (key === "Enter" && selectedIndex >= 0) {
      router.push(availablePages[selectedIndex].href);
      handleOnClose();
    }
  };

  const handleOnClose = (): void => {
    onClose();
    setTimeout(() => {
      setQuery("");
      setSelectedIndex(-1);
    }, EXIT_ANIMATION_DURATION);
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
        <SearchInput
          data-autofocus
          aria-label="Search for a page"
          id="search-input"
          type="search"
          value={query}
          placeholder="Search"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onBlur={() => setSelectedIndex(-1)}
        />
        <section className="relative mt-4">
          {isEmpty(availablePages) ? (
            <EmptyState />
          ) : (
            <ResultsList results={availablePages} selectedIndex={selectedIndex} onClose={handleOnClose} />
          )}
        </section>
      </search>
    </Dialog>
  );
};

const EmptyState = (): JSX.Element => (
  <output className="flex h-10 w-full flex-col items-center justify-center gap-y-8">
    <h2>No results found</h2>
  </output>
);

type ResultsListProps = {
  results: Page[];
  selectedIndex: number;
  onClose: () => void;
};
const ResultsList = (props: ResultsListProps): JSX.Element => (
  <>
    <h2 className="sr-only">Results</h2>
    <div role="listbox" aria-label="Pages" className="flex flex-col gap-y-1">
      {props.results.map((page, index) => (
        <Link
          key={page.name}
          id={page.name}
          role="option"
          aria-selected={props.selectedIndex === index}
          href={page.href}
          onClick={props.onClose}
          className={clsx(
            "flex h-10 w-full items-center gap-x-2 rounded-sm px-2 text-primary hover:bg-btn-ghost-hover focus-visible:outline dark:text-primary-dark dark:hover:bg-btn-ghost-hover-dark",
            "active:bg-btn-ghost-pressed dark:active:bg-btn-ghost-pressed-dark",
            "aria-selected:bg-btn-ghost-hover dark:aria-selected:bg-btn-ghost-hover-dark",
          )}
        >
          <Icon name={page.icon} className="size-5" />
          {page.name}
        </Link>
      ))}
    </div>
  </>
);

export default SearchDialog;
