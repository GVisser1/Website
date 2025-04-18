import type { JSX } from "react";
const SkeletonLoader = (): JSX.Element => (
  <div
    aria-hidden
    className="relative flex h-[170px] animate-pulse flex-col justify-between rounded-lg border border-zinc-200 bg-zinc-100 px-2 pt-2 pb-4 text-center dark:border-zinc-700 dark:bg-zinc-800"
  >
    <div className="flex justify-between">
      <div className="h-4 w-8 bg-gray-200 dark:bg-zinc-700" />
      <div className="size-6 bg-gray-200 dark:bg-zinc-700" />
    </div>
    <div className="mx-auto mb-2 size-24 bg-gray-200 dark:bg-zinc-700" />
    <div className="mx-auto h-4 w-3/4 bg-gray-200 dark:bg-zinc-700" />
  </div>
);

export default SkeletonLoader;
