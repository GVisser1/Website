import clsx from "clsx";
import type { ReactNode } from "react";

export type LinkProps = {
  className?: string;
  href: string;
  size?: "xs" | "sm" | "base";
  ariaLabel?: string;
  children: ReactNode;
};

const Link = ({ size = "base", href, ariaLabel, className, children }: LinkProps): JSX.Element => {
  const classes = clsx(
    "transition focus-visible:outline",
    "text-gray-500 hover:text-gray-700 active:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:active:text-gray-200",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
    },
    className,
  );

  return (
    <a className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default Link;
