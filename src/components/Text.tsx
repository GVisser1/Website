import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface TextProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl";
  weight?: "semibold" | "bold";
  color?: "medium" | "dark" | "all-white";
  href?: string;
  tabIndex?: number;
}

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  size = "base",
  weight,
  color = "dark",
  href,
  tabIndex,
  className,
  children,
}) => {
  const Tag = href ? "a" : "p";
  const classes = classNames(
    "transition whitespace-pre-line",
    href && "pointer:hover:underline underline-offset-2 outline-none",

    weight === "bold" && "font-bold",
    weight === "semibold" && "font-semibold",

    size === "xs" && "text-xs",
    size === "sm" && "text-sm",
    size === "base" && "text-base",
    size === "lg" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",

    color === "all-white" && "text-white",
    color === "medium" && "text-gray-500 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-white",

    className
  );

  return (
    <Tag tabIndex={tabIndex} className={classes} href={href}>
      {children}
    </Tag>
  );
};
