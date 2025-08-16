import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";
import type { JSX } from "react";

const colours: Record<PillType, string> = {
  success: "bg-status-success text-status-success dark:bg-status-success-dark dark:text-status-success-dark",
  info: "bg-status-info text-status-info dark:bg-status-info-dark dark:text-status-info-dark",
  neutral: "bg-status-neutral text-status-neutral dark:bg-status-neutral-dark dark:text-status-neutral-dark",
};

type PillType = "success" | "info" | "neutral";
export type PillProps = {
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
