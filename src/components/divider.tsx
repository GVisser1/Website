import clsx from "clsx";
import type { JSX } from "react";

type DividerProps = {
  soft?: boolean;
  className?: string;
};

const Divider = ({ className, soft }: DividerProps): JSX.Element => (
  <hr aria-hidden className={clsx("w-full border-t", soft ? "border-secondary" : "border-primary", className)} />
);

export default Divider;
