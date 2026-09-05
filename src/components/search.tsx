import clsx from "clsx";
import type { ComponentProps, JSX } from "react";
import { isTouchDevice } from "../utils/deviceUtil";
import Icon from "./icon";

export type SearchInputProps = ComponentProps<"input"> & {
  hasShortcut?: boolean;
};

const SearchInput = ({ className, hasShortcut, ...props }: SearchInputProps): JSX.Element => {
  const classes = clsx(
    "peer border-primary bg-default text-base-medium placeholder:text-placeholder focus-visible:focus-ring dark:border-primary-dark dark:bg-default-dark dark:placeholder:text-placeholder-dark h-10 w-full truncate rounded-sm border py-2 pl-8",
    hasShortcut ? "pr-8 focus:pr-3" : "pr-3",
  );

  return (
    <div className={clsx("relative", className)}>
      <Icon
        name="MagnifyingGlass"
        className="text-secondary dark:text-secondary-dark pointer-events-none absolute top-2.5 left-2 size-5"
      />
      <input {...props} className={classes} />
      {hasShortcut && !isTouchDevice && (
        <kbd className="border-primary text-secondary text-xs-semibold dark:border-primary-dark dark:text-secondary-dark pointer-events-none absolute top-2.5 right-2 flex size-5 items-center justify-center rounded-sm border peer-focus:hidden">
          /
        </kbd>
      )}
    </div>
  );
};

export default SearchInput;
