import type { IconType } from "@/utils/iconUtil";
import { OptionIcon } from "@/utils/iconUtil";
import Icon from "../icon";
import clsx from "clsx";
import Tooltip from "../tooltip";

type PillButtonProps = {
  label: string;
  ariaLabel: string;
  iconType: IconType;
  onClick: () => void;
  className?: string;
};

const PillButton = ({ label, ariaLabel, iconType, onClick, className }: PillButtonProps): JSX.Element => {
  const classes = clsx(
    "flex h-6 max-w-44 min-w-0 items-center gap-x-1 rounded-sm px-0.5 focus-visible:outline",
    "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300",
    "dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
    className,
  );

  return (
    <Tooltip
      side="top"
      trigger={
        <button
          type="button"
          aria-label={ariaLabel}
          className={classes}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <OptionIcon type={iconType} applyBgColour={false} />
          <p className="truncate text-sm font-medium">{label}</p>
          <Icon name="X" size="sm" />
        </button>
      }
      title={ariaLabel}
    />
  );
};

export default PillButton;
