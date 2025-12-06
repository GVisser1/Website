import clsx from "clsx";
import type { JSX } from "react";

type SkeletonLoaderProps = {
  size: "sm" | "md";
  className?: string;
};

const SkeletonLoader = (props: SkeletonLoaderProps): JSX.Element => {
  const classes = clsx(
    "group flex w-full animate-pulse items-center gap-3 rounded-lg bg-sunken-secondary text-center dark:bg-sunken-secondary-dark",
    "data-[size=md]:h-43 data-[size=md]:flex-col data-[size=md]:px-2 data-[size=md]:py-3",
    "data-[size=sm]:h-20 data-[size=sm]:flex-row data-[size=sm]:px-4 data-[size=sm]:py-2",
    props.className,
  );

  return (
    <div aria-hidden data-size={props.size} className={classes}>
      <div className="rounded-sm bg-sunken-tertiary group-data-[size=md]:size-22 group-data-[size=sm]:size-16 dark:bg-sunken-tertiary-dark" />
      <div>
        <div className="h-6 w-32 rounded-sm bg-sunken-tertiary dark:bg-sunken-tertiary-dark" />
        <div className="mt-1 h-5 w-20 rounded-sm bg-sunken-tertiary group-data-[size=md]:mx-auto dark:bg-sunken-tertiary-dark" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
