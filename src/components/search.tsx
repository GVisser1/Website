import clsx from "clsx";
import type { JSX } from "react";
import type { ComponentProps } from "react";
import Icon from "./icon";
import { isTouchDevice } from "../utils/deviceUtil";

export type SearchInputProps = ComponentProps<"input"> & {
  hasShortcut?: boolean;
};

const SearchInput = ({ className, hasShortcut, ...props }: SearchInputProps): JSX.Element => {
  const classes = clsx(
    "peer h-10 w-full truncate rounded-sm border border-primary bg-default py-2 pl-8 text-base-medium placeholder:text-placeholder focus-visible:focus-ring dark:border-primary-dark dark:bg-default-dark dark:placeholder:text-placeholder-dark",
    hasShortcut ? "pr-8 focus:pr-3" : "pr-3",
  );

  return (
    <div className={clsx("relative", className)}>
      <Icon
        name="MagnifyingGlass"
        className="pointer-events-none absolute top-2.5 left-2 size-5 text-secondary dark:text-secondary-dark"
      />
      <input {...props} className={classes} />
      {hasShortcut && !isTouchDevice && (
        <kbd className="pointer-events-none absolute top-2.5 right-2 flex size-5 items-center justify-center rounded-sm border border-primary text-xs-semibold text-secondary peer-focus:hidden dark:border-primary-dark dark:text-secondary-dark">
          /
        </kbd>
      )}
    </div>
  );
};

export default SearchInput;
