import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";

export type LinkProps = {
  size?: "xs" | "sm" | "base";
  color?: "gray" | "blue";
  className?: string;
  children: ReactNode;
} & NextLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ size = "base", color = "gray", children, ...props }: LinkProps): JSX.Element => {
  const classes = clsx(
    "transition focus-visible:outline",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-gray-500 hover:text-gray-700 active:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:active:text-gray-200":
        color === "gray",
      "underline text-blue-600 hover:text-blue-700 active:text-blue-800 dark:text-blue-600 dark:hover:text-blue-500 dark:active:text-blue-400":
        color === "blue",
    },
    props.className,
  );

  return (
    <NextLink {...props} className={classes}>
      {children}
    </NextLink>
  );
};

export default Link;
