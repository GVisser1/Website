import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";

import type { JSX } from "react";

const colours = {
  green: "bg-info text-info dark:bg-info-dark dark:text-info-dark",
};

export type PillProps = { label: string; colour: keyof typeof colours; icon?: IconName; className?: string };

const Pill = ({ label, colour, icon, className }: PillProps): JSX.Element => {
  const classes = clsx(
    "inline-flex max-w-72 min-w-0 items-center gap-x-1 rounded-sm px-1 py-0.5 text-xs font-semibold",
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
