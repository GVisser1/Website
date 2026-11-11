import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import clsx from "clsx";
import { isEmpty } from "lodash-es";
import type { ComponentProps, JSX, KeyboardEvent } from "react";
import { useRef, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import type { Page } from "../constants";
import { PAGES, SEARCH_DEBOUNCE } from "../constants";
import { normalizeString } from "../utils/textUtil";
import Dialog from "./dialog";
import Icon from "./icon";
import SearchInput from "./search";

export const searchDialogHandle = BaseDialog.createHandle<unknown>();

type SearchDialogTriggerProps = {
  render: ComponentProps<typeof BaseDialog.Trigger>["render"];
};

export const SearchDialogTrigger = (props: SearchDialogTriggerProps): JSX.Element => (
  <BaseDialog.Trigger handle={searchDialogHandle} render={props.render} />
);

const SearchDialog = (): JSX.Element => {
  const navigate = useNavigate();
  const { location } = useRouterState();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [debouncedQuery] = useDebounceValue<string>(query, SEARCH_DEBOUNCE);

  const resultsRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const normalizedQuery = normalizeString(debouncedQuery);
  const results = PAGES.filter(
    (page) => page.href !== location.pathname && normalizeString(page.name).includes(normalizedQuery),
  );

  const reset = (): void => {
    setQuery("");
    setSelectedIndex(0);
  };

  const select = (index: number): void => {
    setSelectedIndex(index);
    resultsRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (isEmpty(results)) {
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      select((selectedIndex + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      select(selectedIndex <= 0 ? results.length - 1 : selectedIndex - 1);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      searchDialogHandle.close();
      await navigate({ to: results[selectedIndex].href });
    }
  };

  return (
    <Dialog
      title="Search for a page"
      handle={searchDialogHandle}
      onOpenChangeComplete={(open) => {
        if (!open) {
          reset();
        }
      }}
    >
      <search>
        <SearchInput
          aria-label="Search for a page"
          type="search"
          value={query}
          placeholder="Search"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          }}
        />
        <section className="mt-4">
          {isEmpty(results) ? (
            <EmptyState />
          ) : (
            <ResultsList results={results} selectedIndex={selectedIndex} resultsRefs={resultsRefs} />
          )}
        </section>
      </search>
    </Dialog>
  );
};

const EmptyState = (): JSX.Element => (
  <output className="flex h-10 w-full items-center justify-center text-base-regular text-primary">
    <h2>No results found</h2>
  </output>
);

type ResultsListProps = {
  results: Page[];
  selectedIndex: number;
  resultsRefs: { current: (HTMLAnchorElement | null)[] };
};

const ResultsList = (props: ResultsListProps): JSX.Element => (
  <>
    <h2 className="sr-only">Results</h2>
    <div role="listbox" aria-label="Pages" className="flex max-h-56 flex-col gap-y-1 overflow-y-auto">
      {props.results.map((page, index) => (
        <Link
          key={page.name}
          role="option"
          aria-selected={props.selectedIndex === index}
          to={page.href}
          onClick={() => searchDialogHandle.close()}
          className={clsx(
            "flex h-10 w-full shrink-0 items-center gap-x-2 rounded-sm btn-tertiary px-2 text-button focus-visible:focus-ring-inset",
            "aria-selected:bg-btn-tertiary-hover",
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
