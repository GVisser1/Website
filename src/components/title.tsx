import clsx from "clsx";
import type { ReactNode } from "react";

export type TitleProps = {
  className?: string;
  color?: "medium" | "dark";
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
};

const Title = ({ as = "h2", color = "dark", className, children }: TitleProps): JSX.Element => {
  const Tag = as;
  const classes = clsx(
    "font-bold transition-colors",
    color === "medium" && "text-gray-500 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-gray-200",

    as === "h1" && "text-4xl sm:text-5xl",
    as === "h2" && "text-3xl sm:text-4xl",
    as === "h3" && "text-lg sm:text-xl",
    as === "h4" && "text-sm sm:text-base",

    className,
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Title;
