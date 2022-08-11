import React from "react";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export interface TextProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "white" | "light" | "medium" | "dark" | "all-white";
  href?: string;
  icon?: IconType;
  iconType?: "outline" | "solid";
  iconPosition?: "left" | "right";
}

export const Text: React.FC<TextProps> = ({
  size = "sm",
  weight = "normal",
  color = "dark",
  href,
  icon,
  iconType = "outline",
  iconPosition = "left",
  className,
  ...props
}) => {
  const Tag = href ? "a" : "p";
  const classes = classNames(
    {
      "transition duration-300": true,
      "flex items-center space-x-2": icon,
      [`text-${size}`]: size,
      [`font-${weight}`]: weight,
      "text-white": color === "all-white",
      "text-white dark:text-gray-700": color === "white",
      "text-gray-300": color === "light",
      "text-gray-500 dark:text-gray-400": color === "medium",
      "text-gray-700 dark:text-white": color === "dark",
    },
    className
  );

  const linkClasses = classNames({
    "hover:underline underline-offset-2 focus:outline-none": href,
  });

  return (
    <div className={classes}>
      {icon ? (
        <>
          {iconPosition === "left" && <Icon name={icon} type={iconType} />}
          <Tag tabIndex={-1} className={linkClasses} href={href}>
            {props.children}
          </Tag>
          {iconPosition === "right" && <Icon name={icon} type={iconType} />}
        </>
      ) : (
        <Tag tabIndex={-1} className={linkClasses} href={href}>
          {props.children}
        </Tag>
      )}
    </div>
  );
};

export default Text;
