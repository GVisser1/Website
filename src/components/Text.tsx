import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export interface TextProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl";
  weight?: "semibold" | "bold";
  color?: "medium" | "dark" | "all-white" | "blue";
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
  size = "base",
  weight,
  color = "dark",
  className,
  children,
}) => {
  const classes = clsx(
    "transition-colors whitespace-pre-line",

    weight === "bold" && "font-bold",
    weight === "semibold" && "font-semibold",

    size === "xs" && "text-xs",
    size === "sm" && "text-sm",
    size === "base" && "text-base",
    size === "lg" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",

    color === "all-white" && "text-white",
    color === "medium" && "text-gray-600 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-white",

    className
  );

  return <p className={classes}>{children}</p>;
};
