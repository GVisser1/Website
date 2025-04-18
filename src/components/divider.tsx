import clsx from "clsx";

import type { JSX } from "react";

type DividerProps = {
  soft?: boolean;
  className?: string;
};

const Divider = ({ className, soft }: DividerProps): JSX.Element => (
  <hr
    role="presentation"
    className={clsx(
      className,
      "w-full border-t",
      soft ? "border-zinc-100 dark:border-zinc-800" : "border-zinc-200 dark:border-zinc-700",
    )}
  />
);

export default Divider;
