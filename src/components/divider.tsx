import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

export const Divider = ({ className, ...props }: { soft?: boolean } & ComponentPropsWithoutRef<"hr">): JSX.Element => (
  <hr
    role="presentation"
    {...props}
    className={clsx(className, "w-full border-t border-zinc-950/10 dark:border-zinc-200/10")}
  />
);
