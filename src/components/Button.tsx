import classNames from "classnames";
import { MouseEvent } from "react";
import { Icon, IconType } from "./Icon";

export type ButtonType = "default" | "clear" | "destructive" | "selected";

export interface ButtonProps {
  block?: boolean;
  className?: string;
  compact?: boolean;
  disabled?: boolean;
  icon?: IconType;
  iconType?: "solid" | "outline";
  label?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  block = false,
  className,
  compact = false,
  disabled = false,
  icon,
  iconType = "solid",
  label,
  onClick,
  type = "default",
  ...props
}) => {
  const innerClasses = classNames({
    "flex justify-center gap-x-1 font-medium rounded-lg focus:outline-none pointer:focus:ring":
      true,
    "transition duration-300": true,
    "px-4 py-3": !compact,
    "p-2": compact,
    "w-full": block,
    "text-gray-400 bg-gray-100": disabled,
    "text-black bg-blue-100 hover:bg-blue-200 active:bg-blue-300 focus:ring-blue-300":
      type === "default" && !disabled,
    "text-white bg-red-500 hover:bg-red-600 ring-red-300 focus:ring-red-300 ":
      type === "destructive" && !disabled,
    "text-gray-400 hover:text-gray-500 dark:hover:text-white focus:ring-blue-300 active:bg-gray-200 dark:active:bg-gray-900":
      type === "clear" && !disabled,
    "bg-black/5 dark:bg-gray-900 dark:text-white focus:ring-blue-300":
      type === "selected" && !disabled,
  });

  return (
    <div className={classNames("w-full" && block, className)} {...props}>
      <button
        type={"button"}
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
