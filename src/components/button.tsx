import type { ComponentProps } from "react";
import React from "react";
import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";

type ButtonVariant = "default" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  as?: "button" | "div";
  size?: ButtonSize;
  variant?: ButtonVariant;
  label?: string;
  icon?: IconName;
} & Pick<ComponentProps<"button">, "aria-label" | "title" | "onClick" | "className" | "disabled">;

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
  ghost: "hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-7",
  md: "h-8",
  lg: "h-9",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const Button = ({
  as = "button",
  "aria-label": ariaLabel,
  title,
  onClick,
  className,
  size = "md",
  variant = "default",
  label,
  icon,
  disabled,
}: ButtonProps): JSX.Element => {
  const classes = clsx(
    "flex shrink-0 items-center justify-center gap-x-1.5 rounded p-1.5 text-sm font-medium focus-visible:outline",
    sizeClasses[size],
    disabled ? "cursor-not-allowed text-zinc-500 dark:bg-zinc-900/10" : variantClasses[variant],
    className
  );

  const content = (
    <>
      {icon && <Icon overrideSize className={iconSizeClasses[size]} name={icon} />}
      {label && <p className="truncate">{label}</p>}
    </>
  );

  if (as === "div") {
    return (
      <div aria-label={ariaLabel} title={title} className={classes}>
        {content}
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
