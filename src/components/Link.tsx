import clsx from "clsx";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

export interface LinkProps {
  className?: string;
  href: string;
  size?: "xs" | "sm" | "base";
  color?: "gray" | "blue" | "gray-blue";
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  size = "base",
  color = "gray",
  href,
  ariaLabel,
  onClick = () => {},
  className,
  children,
}) => {
  const classes = clsx(
    "transition focus-visible:ring ring-blue-400 outline-none",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",

      "text-gray-500 dark:text-gray-400 pointer:hover:text-gray-700 dark:pointer:hover:text-gray-300 active:!text-gray-800 dark:active:!text-gray-200":
        color === "gray",
      "text-blue-500 dark:text-blue-400 pointer:hover:text-blue-800 dark:pointer:hover:text-blue-500 active:!text-blue-900 dark:active:!text-blue-700":
        color === "blue",
    },
    className,
  );

  return (
    <a onClick={onClick} className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
};
