import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";

import type { JSX } from "react";

const colours = {
  green: "bg-status-success text-status-success dark:bg-status-success-dark dark:text-status-success-dark",
  blue: "bg-status-info text-status-info dark:bg-status-info-dark dark:text-status-info-dark",
  neutral: "bg-status-neutral text-status-neutral dark:bg-status-neutral-dark dark:text-status-neutral-dark",
};

export type PillProps = { label: string; colour: keyof typeof colours; icon?: IconName; className?: string };

const Pill = ({ label, colour, icon, className }: PillProps): JSX.Element => {
  const classes = clsx(
    "inline-flex max-w-72 min-w-0 shrink-0 items-center gap-x-1 rounded-sm px-1 py-0.5 text-xs font-semibold",
    colours[colour],
    className,
  );

  return (
    <span className={classes}>
      {icon && <Icon className="size-2.5" name={icon} />}
      <span className="truncate">{label}</span>
    </span>
  );
};

export default Pill;
