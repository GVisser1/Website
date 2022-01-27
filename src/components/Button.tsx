import classNames from "classnames";
import { MouseEvent } from "react";
import { Icon, IconType } from "./Icon";

export type ButtonType = "default" | "clear" | "destructive";

export interface ButtonProps {
  className?: string;
  label?: string;
  type?: ButtonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
  iconType?: "solid" | "outline";
  block?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  block = false,
  onClick,
  label,
  type = "default",
  icon,
  iconType = "solid",
  disabled = false,
  selected = false,
  className,
  ...props
}) => {
  const classes = classNames(
    {
      "outline-none group": true,
      "w-full": block,
    },
    className
  );

  const innerClasses = classNames({
    "relative inline-flex justify-center items-center space-x-1.5 font-semibold rounded-lg px-4 py-3":
      true,
    "active:text-white dark:active:text-white": !disabled,
    "w-full": block,
    "text-gray-400": disabled,
    "text-blue-900 bg-sky-100 hover:bg-blue-200 dark:text-black dark:bg-blue-300 dark:hover:bg-blue-200":
      type === "default",
    "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500":
      type === "clear",
    "ring-4 ring-green-300 dark:ring-yellow-500": selected,
  });
  return (
    <div className={classes} {...props}>
      <button
        onClick={(event) => !disabled && onClick && onClick(event)}
        className={innerClasses}
      >
        {icon && <Icon name={icon} type={iconType} />}
        {label && <span>{label}</span>}
        {props.children}
      </button>
    </div>
  );
};
