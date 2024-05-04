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
    "font-bold",
    color === "medium" && "text-gray-500",
    color === "dark" && "text-gray-700",

    as === "h1" && "text-5xl",
    as === "h2" && "text-4xl",
    as === "h3" && "text-xl",
    as === "h4" && "text-base",

    className,
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Title;
