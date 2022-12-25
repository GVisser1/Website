import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

export interface TitleProps {
  className?: string;
  size?: "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  color?: "medium" | "dark" | "all-white" | "all-dark";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  as = "h2",
  size = "base",
  color = "dark",
  className,
  children,
}) => {
  const Tag = as;
  const classes = classNames(
    "transition font-bold",
    color === "all-white" && "text-white",
    color === "all-dark" && "text-gray-700",
    color === "medium" && "text-gray-500 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-white",

    size === "base" && "text-base",
    size === "lg" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",
    size === "3xl" && "text-3xl",
    size === "4xl" && "text-4xl",
    size === "5xl" && "text-5xl",
    className
  );

  return <Tag className={classes}>{children}</Tag>;
};
