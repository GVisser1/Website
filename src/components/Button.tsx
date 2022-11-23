import classNames from "classnames";
import { FC } from "react";
import { Icon, IconType } from "./Icon";

export type ButtonVariant = "default" | "primary" | "clear" | "destructive";

export interface ButtonProps {
  block?: boolean;
  compact?: boolean;
  icon?: IconType;
  iconType?: "solid" | "outline";
  iconPosition?: "left" | "right";
  label?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  block = false,
  className,
  compact = false,
  disabled = false,
  icon,
  iconType = "solid",
  iconPosition = "left",
  label,
  variant = "default",
  ...props
}) => {
  const classes = classNames(
    "flex transition justify-center gap-x-1 font-medium rounded-lg outline-none focus-visible:ring",
    compact ? "p-2" : "px-4 py-3",
    block && "w-full",
    iconPosition === "right" && "flex-row-reverse space-x-reverse",
    disabled
      ? "text-gray-400 bg-gray-100"
      : {
          "text-black bg-blue-100 hover:bg-blue-200 active:bg-blue-300 focus-visible:ring-blue-400":
            variant === "default",
          "text-white bg-blue-600 pointer:hover:bg-blue-700 active:!bg-blue-800 focus-visible:ring-blue-400":
            variant === "primary",
          "text-white bg-red-500 pointer:hover:bg-red-600 active:!bg-red-700 ring-red-300 focus-visible:ring-red-400":
            variant === "destructive",
          "text-gray-400 pointer:hover:text-gray-500 dark:pointer:hover:text-gray-300 focus-visible:ring-blue-400 active:bg-gray-200 dark:active:bg-gray-800":
            variant === "clear",
        },
    className
  );

  return (
    <button className={classes} {...props}>
      {icon && <Icon name={icon} type={iconType} />}
      {label && <span>{label}</span>}
      {props.children}
    </button>
  );
};
