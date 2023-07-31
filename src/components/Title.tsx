import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export interface TitleProps {
  className?: string;
  color?: "medium" | "dark" | "all-white" | "all-dark";
  as?: "h1" | "h2" | "h3" | "h4";
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  as = "h2",
  color = "dark",
  className,
  children,
}) => {
  const Tag = as;
  const classes = clsx(
    "transition-colors font-bold",
    color === "all-white" && "text-white",
    color === "all-dark" && "text-gray-700",
    color === "medium" && "text-gray-500 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-white",

    as === "h1" && "text-5xl",
    as === "h2" && "text-4xl",
    as === "h3" && "text-xl",
    as === "h4" && "text-base",

    className
  );

  return <Tag className={classes}>{children}</Tag>;
};
