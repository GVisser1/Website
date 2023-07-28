import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";

interface BadgeProps {
  className?: string;
  theme?: Color;
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  theme = "BLUE",
  className,
  children,
}) => {
  const Theme = Themes[theme];

  return (
    <span
      className={clsx(
        "rounded-full px-3 py-0.5 text-xs font-semibold",
        Theme.bgColor,
        Theme.textColor,
        className,
      )}
    >
      {children}
    </span>
  );
};
