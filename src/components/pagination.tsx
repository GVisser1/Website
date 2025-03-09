import { IconButton } from "./button";
import type { IconName } from "./icon";

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
        <PaginationButton ariaLabel="First page" onClick={onFirst} disabled={isFirstPage} icon="ChevronLeftDouble" />
        <PaginationButton ariaLabel="Previous page" onClick={onPrevious} disabled={isFirstPage} icon="ChevronLeft" />
        <PaginationButton ariaLabel="Next page" onClick={onNext} disabled={isLastPage} icon="ChevronRight" />
        <PaginationButton ariaLabel="Last page" onClick={onLast} disabled={isLastPage} icon="ChevronRightDouble" />
      </div>
    </div>
  );
};

type PaginationButtonProps = {
  ariaLabel: string;
  disabled: boolean;
  onClick: () => void;
  icon: Extract<IconName, "ChevronLeftDouble" | "ChevronLeft" | "ChevronRight" | "ChevronRightDouble">;
};

const PaginationButton = ({ ariaLabel, disabled, onClick, icon }: PaginationButtonProps): JSX.Element => (
  <IconButton
    variant="default"
    aria-label={ariaLabel}
    disabled={disabled}
    onClick={onClick}
    title={!disabled ? ariaLabel : ""}
    icon={icon}
  />
);

const PageCounter = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }): JSX.Element => (
  <span className="text-zinc-500 dark:text-zinc-400">
    Page <b>{currentPage}</b> of <b>{totalPages}</b>
  </span>
);

export default Pagination;
