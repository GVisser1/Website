import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";

interface BadgeProps {
  className?: string;
  size?: "default" | "lg";
  theme?: Color;
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  theme = "BLUE",
  size = "default",
  className,
  children,
}) => {
  const Theme = Themes[theme];
  const classes = classNames(
    "rounded-full text-xs font-semibold",
    Theme.bgColor,
    Theme.textColor,
    size === "default" ? "px-3 py-0.5" : "px-6 py-1",
    className
  );

  return <span className={classes}>{children}</span>;
};
