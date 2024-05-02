import clsx from "clsx";

export type TextProps = {
  size?: "sm" | "base" | "lg";
  weight?: "semibold";
  color?: "medium" | "dark";
  className?: string;
  children: React.ReactNode;
};

const Text = ({ size = "base", weight, color = "dark", className, children }: TextProps): JSX.Element => {
  const classes = clsx(
    "whitespace-pre-line",
    weight === "semibold" && "font-semibold",
    size === "sm" && "text-sm",
    size === "base" && "text-base",
    size === "lg" && "text-2xl",
    color === "medium" && "text-gray-600",
    color === "dark" && "text-gray-700",
    className,
  );

  return <p className={classes}>{children}</p>;
};

export default Text;
