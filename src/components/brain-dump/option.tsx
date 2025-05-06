import clsx from "clsx";
import { forwardRef, type JSX } from "react";
import { OptionIcon, type IconType } from "../../utils/iconUtil";

type OptionProps = {
  label: string;
  pill?: string;
  type: IconType;
  checked?: boolean;
  selected: boolean;
  onClick: () => void;
};

const Option = forwardRef<HTMLDivElement, OptionProps>(
  ({ label, pill, type, checked, selected, onClick }, ref): JSX.Element => {
    const classes = clsx(
      "flex h-10 min-w-0 items-center justify-between gap-x-2 px-3 py-2.5 text-primary select-none dark:text-primary-dark",
      "hover:bg-btn-ghost-hover dark:hover:bg-btn-ghost-hover-dark",
      "active:bg-btn-ghost-pressed dark:active:bg-btn-ghost-pressed-dark",
      "aria-selected:bg-btn-ghost-hover dark:aria-selected:bg-btn-ghost-hover-dark",
      "aria-checked:bg-btn-ghost-checked dark:aria-checked:bg-btn-ghost-checked-dark",
      "aria-checked:hover:bg-btn-ghost-hover dark:aria-checked:hover:bg-btn-ghost-hover-dark",
    );

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={selected}
        className={classes}
        onClick={onClick}
        {...(checked && { "aria-checked": checked })}
      >
        <div className="flex min-w-0 gap-x-1.5">
          <OptionIcon type={type} />
          <p title={label} className={clsx("truncate text-sm", pill && "max-w-80")}>
            {label}
          </p>
        </div>
        {pill && <OptionPill label={pill} />}
      </div>
    );
  },
);
Option.displayName = "Option";

export default Option;

type OptionPillProps = {
  label: string;
};

const OptionPill = ({ label }: OptionPillProps): JSX.Element => {
  const classes = clsx(
    "h-4 max-w-32 truncate rounded-sm px-1 text-xs font-medium",
    "bg-sunken-secondary text-primary",
    "dark:bg-sunken-secondary-dark dark:text-primary-dark",
  );

  return (
    <div title={label} className={classes}>
      {label}
    </div>
  );
};
