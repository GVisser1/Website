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
  selected?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  block = false,
  onClick,
  label,
  type = "default",
  icon,
  iconType = "solid",
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
    "inline-flex justify-center space-x-1.5 font-semibold rounded-lg px-4 py-3":
      true,
    "w-full": block,
    // Text
    "text-black": type === "default",
    "text-black dark:text-white": type === "clear",
    "text-white": type === "destructive",
    // Backgrounds
    "bg-blue-100 hover:bg-blue-200": type === "default",
    "hover:bg-gray-200 dark:hover:bg-gray-500": type === "clear",
    "bg-red-500 hover:bg-red-600": type === "destructive",
    // Focus rings
    "active:ring": !selected,
    "ring-blue-400": type === "default" && !selected,
    "ring-gray-400": type === "clear" && !selected,
    "ring-red-300": type === "destructive" && !selected,
    "ring-4 ring-green-400": selected,
  });
  return (
    <div className={classes} {...props}>
      <button
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
