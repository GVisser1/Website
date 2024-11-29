import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onFirst: () => void;
  onLast: () => void;
};

const Pagination = ({ currentPage, totalPages, onPrevious, onNext, onFirst, onLast }: PaginationProps): JSX.Element => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="mt-4 flex items-center justify-between">
      <PageCounter currentPage={currentPage} totalPages={totalPages} />
      <div className="flex gap-x-1">
        <PaginationButton
          ariaLabel="First page"
          onClick={onFirst}
          disabled={isFirstPage}
          icon="ChevronLeftDoubleIcon"
        />
        <PaginationButton
          ariaLabel="Previous page"
          onClick={onPrevious}
          disabled={isFirstPage}
          icon="ChevronLeftIcon"
        />
        <PaginationButton ariaLabel="Next page" onClick={onNext} disabled={isLastPage} icon="ChevronRightIcon" />
        <PaginationButton ariaLabel="Last page" onClick={onLast} disabled={isLastPage} icon="ChevronRightDoubleIcon" />
      </div>
    </div>
  );
};

type PaginationButtonProps = {
  ariaLabel: string;
  disabled: boolean;
  onClick: () => void;
  icon: Extract<IconName, "ChevronLeftDoubleIcon" | "ChevronLeftIcon" | "ChevronRightIcon" | "ChevronRightDoubleIcon">;
};

const PaginationButton = ({ ariaLabel, disabled, onClick, icon }: PaginationButtonProps): JSX.Element => {
  const classes = clsx(
    "group rounded border p-2",
    // Background
    "bg-white enabled:hover:bg-zinc-100 enabled:active:bg-zinc-200",
    "dark:bg-zinc-800 dark:enabled:hover:bg-zinc-900 dark:enabled:active:bg-zinc-950 dark:disabled:bg-zinc-900/10",
    // Border
    "border-zinc-200 disabled:border-zinc-200/10",
    "dark:border-zinc-700 dark:disabled:border-zinc-800"
  );

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      title={!disabled ? ariaLabel : ""}
      className={classes}
    >
      <Icon name={icon} className="size-5 group-disabled:text-zinc-400" />
    </button>
  );
};

const PageCounter = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }): JSX.Element => (
  <span className="text-zinc-500 dark:text-zinc-400">
    Page <b>{currentPage}</b> of <b>{totalPages}</b>
  </span>
);

export default Pagination;
