import classNames from "classnames";
import React from "react";
import { Color } from "../types/Color";
import { getCardTheme } from "../utils/colorUtils";

interface BadgeProps {
  className?: string;
  color?: Color;
}

export const Badge: React.FC<BadgeProps> = ({ color = "BLUE", className, children }) => {
  return (
    <span
      className={classNames(
        getCardTheme(color),
        "rounded-full px-3 py-0.5 text-xs font-semibold",
        className
      )}
    >
      {children}
    </span>
  );
};
