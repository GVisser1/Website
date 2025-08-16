import clsx from "clsx";
import type { IconName } from "./icon";
import { useEffect, type JSX } from "react";
import useMetaKey from "../hooks/useMetaKey";
import IconButton from "./button/iconButton";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onFirst: () => void;
  onLast: () => void;
  className?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onFirst,
  onLast,
  className,
}: PaginationProps): JSX.Element => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const metaKey = useMetaKey();

  const classes = clsx("flex w-full items-center justify-between gap-x-1 sm:w-auto", className);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (!isLastPage)
          if (e.metaKey) {
            onLast();
          } else {
            onNext();
          }
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (!isFirstPage) {
          if (e.metaKey) {
            onFirst();
          } else {
            onPrevious();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return (): void => document.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrevious, onFirst, onLast, isFirstPage, isLastPage]);

  return (
    <div className={classes}>
      <PaginationButton
        ariaLabel="Go to the first page"
        onClick={onFirst}
        disabled={isFirstPage}
        icon="ChevronLeftDouble"
        shortcut={`${metaKey} + Left Arrow`}
      />
      <PaginationButton
        ariaLabel="Go to the previous page"
        onClick={onPrevious}
        disabled={isFirstPage}
        icon="ChevronLeft"
        shortcut="Left Arrow"
      />
      <PageCounter currentPage={currentPage} totalPages={totalPages} />
      <PaginationButton
        ariaLabel="Go to the next page"
        onClick={onNext}
        disabled={isLastPage}
        icon="ChevronRight"
        shortcut="Right Arrow"
      />
      <PaginationButton
        ariaLabel="Go to the last page"
        onClick={onLast}
        disabled={isLastPage}
        icon="ChevronRightDouble"
        shortcut={`${metaKey} + Right Arrow`}
      />
    </div>
  );
};

type PaginationButtonProps = {
  ariaLabel: string;
  disabled: boolean;
  onClick: () => void;
  icon: Extract<IconName, "ChevronLeftDouble" | "ChevronLeft" | "ChevronRight" | "ChevronRightDouble">;
  shortcut: string;
};

const PaginationButton = ({ ariaLabel, disabled, onClick, icon, shortcut }: PaginationButtonProps): JSX.Element => (
  <IconButton
    type="button"
    variant="secondary"
    ariaLabel={ariaLabel}
    disabled={disabled}
    onClick={onClick}
    tooltip={{ title: ariaLabel, description: shortcut, side: "top" }}
    icon={icon}
  />
);

const PageCounter = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }): JSX.Element => (
  <span className="mx-1 flex w-full items-center justify-center gap-x-1 text-base-regular text-secondary dark:text-secondary-dark">
    <span className="text-base-bold">{currentPage}</span>
    of
    <span className="text-base-bold">{totalPages}</span>
  </span>
);

export default Pagination;
