import clsx from "clsx";
import type { JSX } from "react";
import type { IconName } from "./icon";
import Icon from "./icon";

const colours: Record<PillType, string> = {
  success: "bg-status-success text-status-success",
  info: "bg-status-info text-status-info",
  neutral: "bg-status-neutral text-status-neutral",
};

type PillType = "success" | "info" | "neutral";
type PillProps = {
  label: string;
  type: PillType;
  icon?: IconName;
  className?: string;
};

const Pill = ({ label, type, icon, className }: PillProps): JSX.Element => {
  const classes = clsx(
    "inline-flex max-w-full shrink-0 items-center gap-x-1 rounded-sm px-2 py-0.5",
    colours[type],
    className,
  );

  return (
    <span className={classes}>
      <span className="truncate text-xs-semibold">{label}</span>
      {icon && <Icon className="size-3.5" name={icon} />}
    </span>
  );
};

export default Pill;
