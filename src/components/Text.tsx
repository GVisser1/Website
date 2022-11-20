import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Icon, IconType } from "./Icon";

export interface TextProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl";
  weight?: "semibold" | "bold";
  color?: "medium" | "dark" | "all-white";
  href?: string;
  icon?: IconType;
  iconType?: "outline" | "solid";
  iconPosition?: "left" | "right";
  tabIndex?: number;
}

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  size = "base",
  weight,
  color = "dark",
  href,
  icon,
  iconType = "outline",
  iconPosition = "left",
  tabIndex,
  className,
  children,
}) => {
  const Tag = href ? "a" : "p";
  const classes = classNames(
    "transition whitespace-pre-line",
    href && "pointer:hover:underline underline-offset-2 outline-none",
    icon && "flex items-center space-x-2",
    iconPosition === "right" && "flex-row-reverse space-x-reverse",

    weight === "bold" && "font-bold",
    weight === "semibold" && "font-semibold",

    size === "xs" && "text-xs",
    size === "sm" && "text-sm",
    size === "base" && "text-base",
    size === "lg" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",

    color === "all-white" && "text-white",
    color === "medium" && "text-gray-500 dark:text-gray-400",
    color === "dark" && "text-gray-700 dark:text-white",

    className
  );

  return (
    <>
      {icon ? (
        <div className={classes}>
          <Icon name={icon} type={iconType} />
          <Tag tabIndex={tabIndex} href={href}>
            {children}
          </Tag>
        </div>
      ) : (
        <Tag tabIndex={tabIndex} className={classNames(classes)} href={href}>
          {children}
        </Tag>
      )}
    </>
  );
};

export default Text;
