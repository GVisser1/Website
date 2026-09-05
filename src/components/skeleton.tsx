import clsx from "clsx";
import type { JSX } from "react";

type SkeletonLoaderProps = {
  size: "sm" | "md";
  className?: string;
};

const SkeletonLoader = (props: SkeletonLoaderProps): JSX.Element => {
  const classes = clsx(
    "group bg-sunken-secondary dark:bg-sunken-secondary-dark flex w-full animate-pulse items-center gap-3 rounded-lg text-center",
    "data-[size=md]:h-43 data-[size=md]:flex-col data-[size=md]:px-2 data-[size=md]:py-3",
    "data-[size=sm]:h-20 data-[size=sm]:flex-row data-[size=sm]:px-4 data-[size=sm]:py-2",
    props.className,
  );

  return (
    <div aria-hidden data-size={props.size} className={classes}>
      <div className="bg-sunken-tertiary dark:bg-sunken-tertiary-dark rounded-sm group-data-[size=md]:size-22 group-data-[size=sm]:size-16" />
      <div>
        <div className="bg-sunken-tertiary dark:bg-sunken-tertiary-dark h-6 w-32 rounded-sm" />
        <div className="bg-sunken-tertiary dark:bg-sunken-tertiary-dark mt-1 h-5 w-20 rounded-sm group-data-[size=md]:mx-auto" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
