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
      "w-full border-t",
      soft ? "border-secondary dark:border-secondary-dark" : "border-primary dark:border-primary-dark",
      className,
    )}
  />
);

export default Divider;
