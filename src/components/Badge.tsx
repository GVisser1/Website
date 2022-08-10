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
        "rounded-full py-0.5 px-3 text-xs font-semibold",
        className
      )}
    >
      {children}
    </span>
  );
};
