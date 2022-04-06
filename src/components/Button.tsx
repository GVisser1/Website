import classNames from "classnames";
import { MouseEvent } from "react";
import { Icon, IconType } from "./Icon";

export type ButtonType = "default" | "clear" | "destructive";

export interface ButtonProps {
  className?: string;
  label?: string;
  type?: ButtonType;
  compact?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
  iconType?: "solid" | "outline";
  block?: boolean;
  submit?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  block = false,
  onClick,
  label,
  type = "default",
  compact = false,
  icon,
  iconType = "solid",
  submit,
  disabled = false,
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
    "inline-flex justify-center space-x-1.5 font-semibold rounded-lg": true,
    "px-4 py-3": !compact,
    "p-2": compact,
    "w-full": block,
    "text-gray-400 bg-gray-100": disabled,
    "active:ring focus:outline-none focus:ring focus:ring-blue-300": !disabled,
    "text-black bg-blue-100 hover:bg-blue-200 ring-blue-400":
      type === "default" && !disabled,
    "text-white bg-red-500 hover:bg-red-600 ring-red-300":
      type === "destructive" && !disabled,
    "text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200":
      type === "clear",
  });
  return (
    <div className={classes} {...props}>
      <button
        type={submit ? "submit" : "button"}
        onClick={(event) => onClick && onClick(event)}
        className={innerClasses}
      >
        {icon && <Icon name={icon} type={iconType} />}
        {label && <span>{label}</span>}
        {props.children}
      </button>
    </div>
  );
};
