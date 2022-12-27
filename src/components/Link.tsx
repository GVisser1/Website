import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren } from "react";

export interface LinkProps {
  className?: string;
  href: string;
  size?: "xs" | "sm" | "base";
  color?: "gray" | "blue" | "gray-blue";
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  size = "base",
  color = "gray",
  href,
  ariaLabel,
  onClick = () => {},
  className,
  children,
}) => {
  const classes = classNames(
    "transition whitespace-pre-line focus-visible:ring focus-visible:ring-blue-400 outline-none",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-base": size === "base",

      "text-gray-400 pointer:hover:text-gray-700 dark:pointer:hover:text-gray-300 active:!text-gray-800 dark:active:!text-gray-200":
        color === "gray",
      "text-blue-600 dark:text-blue-400 pointer:hover:text-blue-800 dark:pointer:hover:text-blue-500 active:!text-blue-900 dark:active:!text-blue-700":
        color === "blue",
      "text-gray-400 pointer:hover:text-gray-700 active:!text-gray-800 dark:text-blue-400 dark:pointer:hover:text-blue-500 dark:active:!text-blue-700":
        color === "gray-blue",
    },
    className
  );

  return (
    <a onClick={onClick} className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
};