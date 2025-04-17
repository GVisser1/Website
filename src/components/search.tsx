import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentProps } from "react";
import Icon from "./icon";

export type SearchInputProps = ComponentProps<"input">;

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ className, ...props }, ref): JSX.Element => {
  const classes = clsx(
    "h-10 w-full rounded-sm border-zinc-200 py-2 pr-3 pl-8 placeholder:text-zinc-500 focus-visible:outline dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-400",
  );

  return (
    <div className={clsx("relative", className)}>
      <Icon name="MagnifyingGlass" className="absolute top-2.5 left-2 text-zinc-500 dark:text-zinc-400" />
      <input {...props} ref={ref} className={classes} />
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
