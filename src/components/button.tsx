import clsx from "clsx";
import type { HTMLAttributes } from "react";
import Icon, { IconName } from "./icon";

type ButtonProps = {
  label?: string;
  block?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  icon?: IconName;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({ label, block = false, variant = "primary", icon, ...props }: ButtonProps): JSX.Element => {
  const classes = clsx(
    "flex select-none items-center justify-center gap-x-1.5 rounded-lg px-5 py-3 font-semibold",
    "transition-colors focus-visible:outline",
    variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    variant === "ghost" && "border bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100",
    block && "w-full",
    props.className,
  );

  return (
    <button type={props.type} {...props} className={classes}>
      {label}
      {icon && <Icon name={icon} className="size-5" overrideSize />}
    </button>
  );
};

export default Button;
