import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

export const Divider = ({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & ComponentPropsWithoutRef<"hr">): JSX.Element => (
  <hr
    role="presentation"
    {...props}
    className={clsx(
      className,
      "w-full border-t",
      soft && "border-zinc-950/5 dark:border-white/5",
      !soft && "border-zinc-950/10 dark:border-white/10",
    )}
  />
);
