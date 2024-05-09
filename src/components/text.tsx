import clsx from "clsx";
import type { ReactNode } from "react";

export type TextProps = {
  size?: "sm" | "base" | "lg";
  weight?: "semibold";
  color?: "medium" | "dark";
  className?: string;
  children: ReactNode;
};

const Text = ({ size = "base", weight, color = "dark", className, children }: TextProps): JSX.Element => {
  const classes = clsx(
    "whitespace-pre-line",
    weight === "semibold" && "font-semibold",
    size === "sm" && "text-sm",
    size === "base" && "text-base",
    size === "lg" && "text-2xl",
    color === "medium" && "text-gray-600 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-gray-200",
    className,
  );

  return <p className={classes}>{children}</p>;
};

export default Text;
