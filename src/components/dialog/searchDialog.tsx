import Link from "next/link";
import type { KeyboardEvent, JSX, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import SearchInput from "../search";
import Icon from "../icon";
import type { Page } from "../../constants";
import { MAIN_PAGES, PAGES } from "../../constants";
import { isEmpty } from "lodash-es";
import { normalizeString } from "../../utils/textUtil";
import Dialog from "./dialog";
import Pill from "../pill";
import { useDebounceValue } from "usehooks-ts";

const ANIMATION_DURATION = 200;
const SEARCH_DEBOUNCE = 300;

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

const SearchDialog = ({ open, onClose }: SearchDialogProps): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounceValue<string>(query, SEARCH_DEBOUNCE);
  const [availablePages, setAvailablePages] = useState<Page[]>(PAGES);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const resultsRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setAvailablePages(MAIN_PAGES.filter((page) => page.href !== pathname));
    }, ANIMATION_DURATION);
  }, [pathname]);

  useEffect(() => {
    if (!debouncedQuery) {
      setAvailablePages(MAIN_PAGES.filter((page) => page.href !== pathname));
      setSelectedIndex(0);
      return;
    }

    const normalizedValue = normalizeString(debouncedQuery);
    const filteredResults = PAGES.filter((page) => {
      if (page.href === pathname) {
        return false;
      }
      return (
        normalizeString(page.name).includes(normalizedValue) ||
        normalizeString(page.type ?? "").includes(normalizedValue)
      );
    });

    setAvailablePages(filteredResults);
    setSelectedIndex(isEmpty(filteredResults) ? -1 : 0);
  }, [debouncedQuery, pathname]);

  const handleOnClose = (): void => {
    onClose();
    setTimeout(() => {
      setQuery("");
      setSelectedIndex(-1);
    }, ANIMATION_DURATION);
  };

  const scrollToIndex = (index: number): void =>
    resultsRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (isEmpty(availablePages)) {
      return;
    }

    const { key } = e;
    if (key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % availablePages.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
      return;
    }

    if (key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => {
        const nextIndex = prevIndex <= 0 ? availablePages.length - 1 : prevIndex - 1;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
      return;
    }

    if (key === "Enter" && selectedIndex >= 0) {
      router.push(availablePages[selectedIndex].href);
      handleOnClose();
    }
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
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setSelectedIndex(-1)}
        />
        <section className="relative mt-4">
          {isEmpty(availablePages) ? (
            <EmptyState />
          ) : (
            <ResultsList
              results={availablePages}
              selectedIndex={selectedIndex}
              onClose={handleOnClose}
              resultsRefs={resultsRefs}
            />
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
  resultsRefs: RefObject<(HTMLAnchorElement | null)[]>;
};
const ResultsList = (props: ResultsListProps): JSX.Element => (
  <>
    <h2 className="sr-only">Results</h2>
    <div role="listbox" aria-label="Pages" className="flex max-h-56 flex-col gap-y-1 overflow-y-auto">
      {props.results.map((page, index) => (
        <Link
          key={page.name}
          id={page.name}
          role="option"
          aria-selected={props.selectedIndex === index}
          href={page.href}
          onClick={props.onClose}
          className={clsx(
            "flex h-10 w-full shrink-0 items-center gap-x-2 rounded-sm px-2 text-primary hover:bg-btn-ghost-hover focus-visible:focus-ring-inset dark:text-primary-dark dark:hover:bg-btn-ghost-hover-dark",
            "active:bg-btn-ghost-pressed dark:active:bg-btn-ghost-pressed-dark",
            "aria-selected:bg-btn-ghost-hover dark:aria-selected:bg-btn-ghost-hover-dark",
          )}
          ref={(el) => {
            props.resultsRefs.current[index] = el;
          }}
        >
          <Icon name={page.icon} className="size-5" />
          <span className="truncate">{page.name}</span>
          {page.type === "blog" && <Pill colour="blue" label="Blog" className="ml-auto" />}
        </Link>
      ))}
    </div>
  </>
);

export default SearchDialog;
