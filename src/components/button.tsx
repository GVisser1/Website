import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";
import type { IconName } from "./icon";
import Icon from "./icon";

type ButtonProps = {
  label?: string;
  block?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  icon?: IconName;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, block = false, variant = "primary", icon, ...props }, ref) => {
    const classes = clsx(
      "flex select-none items-center justify-center gap-x-1.5 rounded-lg px-5 py-3 font-semibold",
      "transition-colors focus-visible:outline",
      variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
      variant === "outline" &&
        "border bg-white text-gray-700 hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-gray-200 dark:hover:bg-zinc-900 dark:active:bg-zinc-800",
      block && "w-full",
      props.className,
    );

    return (
      <button ref={ref} type={props.type} {...props} className={classes}>
        {label}
        {icon && <Icon name={icon} className="size-5" overrideSize />}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
