import clsx from "clsx";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";

type BadgeProps = {
  className?: string;
  theme?: Color;
  children: React.ReactNode;
};

export const Badge = ({ theme = "BLUE", className, children }: BadgeProps) => {
  const Theme = Themes[theme];

  return (
    <span className={clsx("rounded-full px-3 py-0.5 text-xs font-semibold", Theme.bgColor, Theme.textColor, className)}>
      {children}
    </span>
  );
};
