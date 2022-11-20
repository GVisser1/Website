import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export type ButtonVariant = "default" | "clear" | "destructive" | "selected";

export interface ButtonProps {
  block?: boolean;
  compact?: boolean;
  icon?: IconType;
  iconType?: "solid" | "outline";
  iconPosition?: "left" | "right";
  label?: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
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
  const innerClasses = classNames(
    "flex transition justify-center gap-x-1 font-medium rounded-lg outline-none focus-visible:ring",
    compact ? "p-2" : "px-4 py-3",
    block && "w-full",
    iconPosition === "right" && "flex-row-reverse space-x-reverse",
    disabled
      ? "text-gray-400 bg-gray-100"
      : {
          "text-black bg-blue-100 hover:bg-blue-200 active:bg-blue-300 focus-visible:ring-blue-300":
            variant === "default",
          "text-white bg-red-500 hover:bg-red-600 ring-red-300 focus-visible:ring-red-300 ":
            variant === "destructive",
          "text-gray-400 hover:text-gray-500 dark:hover:text-white focus-visible:ring-blue-300 active:bg-gray-200 dark:active:bg-gray-900":
            variant === "clear",
          "bg-black/5 dark:bg-gray-900 dark:text-white focus-visible:ring-blue-300":
            variant === "selected",
        },
    className
  );

  return (
    <button className={innerClasses} {...props}>
      {icon && <Icon name={icon} type={iconType} />}
      {label && <span>{label}</span>}
      {props.children}
    </button>
  );
};
