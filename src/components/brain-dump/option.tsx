import clsx from "clsx";
import { forwardRef } from "react";
import type { IconType } from "@/utils/iconUtil";
import { OptionIcon } from "@/utils/iconUtil";

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
      "flex h-10 min-w-0 items-center justify-between gap-x-2 px-3 py-2.5 select-none",
      "text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100 aria-checked:bg-blue-50 aria-selected:bg-zinc-50 aria-selected:aria-checked:bg-zinc-100",
      "dark:text-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 dark:aria-checked:bg-blue-900/50 dark:aria-selected:bg-zinc-800 dark:aria-selected:aria-checked:bg-zinc-800",
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
    "bg-zinc-100 text-zinc-700",
    "dark:bg-zinc-800 dark:text-zinc-200",
  );

  return (
    <div title={label} className={classes}>
      {label}
    </div>
  );
};
