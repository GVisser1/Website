import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import clsx from "clsx";
import { isEmpty } from "lodash-es";
import type { JSX, KeyboardEvent, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import type { Page } from "../../constants";
import { PAGES } from "../../constants";
import { normalizeString } from "../../utils/textUtil";
import Icon from "../icon";
import SearchInput from "../search";
import Dialog from "./dialog";

const ANIMATION_DURATION = 200;
const SEARCH_DEBOUNCE = 200;

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

const SearchDialog = ({ open, onClose }: SearchDialogProps): JSX.Element => {
  const navigate = useNavigate();
  const { location } = useRouterState();

  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounceValue<string>(query, SEARCH_DEBOUNCE);
  const [availablePages, setAvailablePages] = useState<Page[]>(PAGES);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const resultsRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setAvailablePages(PAGES.filter((page) => page.href !== location.pathname));
    }, ANIMATION_DURATION);
  }, [location.pathname]);

  useEffect(() => {
    if (!debouncedQuery) {
      setAvailablePages(PAGES.filter((page) => page.href !== location.pathname));
      setSelectedIndex(0);
      return;
    }

    const normalizedValue = normalizeString(debouncedQuery);
    const filteredResults = PAGES.filter((page) => {
      if (page.href === location.pathname) {
        return false;
      }
      return normalizeString(page.name).includes(normalizedValue);
    });

    setAvailablePages(filteredResults);
    setSelectedIndex(isEmpty(filteredResults) ? -1 : 0);
  }, [debouncedQuery, location.pathname]);

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
      navigate({ to: availablePages[selectedIndex].href });
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
      onCloseFocusId="global-search-trigger"
      onOpenFocusId="global-search-input"
    >
      <search>
        <SearchInput
          data-autofocus
          aria-label="Search for a page"
          id="global-search-input"
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
  <output className="flex h-10 w-full flex-col items-center justify-center gap-y-8 text-base-regular">
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
    <div
      role="listbox"
      aria-label="Pages"
      className="flex max-h-56 flex-col gap-y-1 overflow-y-auto"
    >
      {props.results.map((page, index) => (
        <Link
          key={page.name}
          id={page.name}
          role="option"
          aria-selected={props.selectedIndex === index}
          to={page.href}
          onClick={props.onClose}
          className={clsx(
            "btn-ghost focus-visible:focus-ring-inset flex h-10 w-full shrink-0 items-center gap-x-2 rounded-sm px-2 text-button",
            "aria-selected:bg-btn-ghost-hover dark:aria-selected:bg-btn-ghost-hover-dark",
          )}
          ref={(el) => {
            props.resultsRefs.current[index] = el;
          }}
        >
          <Icon name={page.icon} className="size-5" />
          <span className="truncate">{page.name}</span>
        </Link>
      ))}
    </div>
  </>
);

export default SearchDialog;
