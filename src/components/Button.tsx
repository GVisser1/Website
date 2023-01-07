import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import { Icon, IconType } from "./Icon";

export type ButtonVariant = "default" | "primary" | "destructive" | "clear";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: "xs" | "sm" | "md" | "lg";
  label?: string;
  icon?: IconType;
  iconAlign?: "left" | "right";
  iconType?: "solid" | "outline";
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = "default",
  size = "lg",
  label,
  icon,
  iconAlign = "left",
  iconType = "solid",
  disabled = false,
  loading = false,
  block = false,
  className,
  ...props
}) => {
  const isClickable = !loading && !disabled;

  const classes = classNames(
    "flex items-center gap-x-1.5 outline-none justify-center font-semibold transition",
    block && "w-full",
    iconAlign === "right" && "flex-row-reverse space-x-reverse",
    disabled && "bg-gray-200 text-gray-400 dark:bg-gray-400 dark:text-gray-500",
    !disabled && "focus-visible:ring",

    variant === "default" && {
      "text-gray-700 bg-blue-200 dark:text-gray-800": !disabled,
      "hover:bg-blue-300 active:bg-blue-400": isClickable,
    },
    variant === "primary" && {
      "text-white bg-blue-600": !disabled,
      "hover:bg-blue-700 active:bg-blue-800": isClickable,
    },
    variant === "destructive" && {
      "text-gray-50 bg-red-500": !disabled,
      "hover:bg-red-600 active:bg-red-800": isClickable,
    },
    variant === "clear" &&
      "text-gray-400 pointer:hover:text-gray-700 dark:pointer:hover:text-gray-300 focus-visible:ring-blue-400 active:!text-gray-800 dark:active:!text-gray-200",

    // sizes
    {
      "rounded text-xs": size === "xs",
      "rounded-md p-1": size === "sm",
      "rounded-lg p-2": size === "md",
      "rounded-lg p-3": size === "lg",
    },
    className
  );

  return (
    <button
      aria-label={loading ? "Loading" : label}
      type="button"
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {icon && (
        <Icon
          name={icon}
          type={iconType}
          overrideSize={size === "xs"}
          className={`shrink-0 ${size === "xs" && "h-5 w-5"}`}
        />
      )}
      {label}
    </button>
  );
};
