import Icon from "../icon";
import clsx from "clsx";
import Tooltip from "../tooltip";
import type { JSX } from "react";
import { OptionIcon, type IconType } from "../../utils/iconUtil";

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
    "bg-btn-secondary text-primary hover:bg-btn-secondary-hover active:bg-btn-secondary-pressed dark:bg-btn-secondary-dark dark:text-primary-dark dark:hover:bg-btn-secondary-hover-dark dark:active:bg-btn-secondary-pressed-dark",
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
          <Icon name="X" className="size-4" />
        </button>
      }
      title={ariaLabel}
    />
  );
};

export default PillButton;
