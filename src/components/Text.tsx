import clsx from "clsx";

export type TextProps = {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl";
  weight?: "semibold" | "bold";
  color?: "medium" | "dark";
  children: React.ReactNode;
};

export const Text = ({ size = "base", weight, color = "dark", className, children }: TextProps) => {
  const classes = clsx(
    "whitespace-pre-line",

    weight === "bold" && "font-bold",
    weight === "semibold" && "font-semibold",

    size === "xs" && "text-xs",
    size === "sm" && "text-sm",
    size === "base" && "text-base",
    size === "lg" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",

    color === "medium" && "text-gray-600",
    color === "dark" && "text-gray-700",

    className,
  );

  return <p className={classes}>{children}</p>;
};
