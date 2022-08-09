import React from "react";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export interface TextProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "black" | "dark" | "white" | "light" | "danger" | "all-white" | "all-dark";
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
      "transition duration-300 ease-in-out": true,
      "flex items-center space-x-2": icon,
      [`text-${size}`]: size,
      [`font-${weight}`]: weight,
      "text-black dark:text-white": color === "black",
      "text-gray-700 dark:text-white": color === "dark",
      "text-white dark:text-gray-700": color === "white",
      "text-red-400": color === "danger",
      "text-gray-400": color === "light",
      "text-gray-700": color === "all-dark",
      "text-white": color === "all-white",
    },
    className
  );

  const linkClasses = classNames({
    "text-blue-500 underline visited:text-purple-500 visited:decoration-purple-500 underline-offset-2 decoration-1 decoration-blue-500 hover:decoration-2 focus:outline-none pointer:focus:ring focus:ring-blue-300 dark:focus:ring-yellow-600":
      href,
  });

  return (
    <div className={classes}>
      {icon ? (
        <>
          {iconPosition === "left" && <Icon name={icon} type={iconType} />}
          <Tag className={linkClasses} href={href}>
            {props.children}
          </Tag>
          {iconPosition === "right" && <Icon name={icon} type={iconType} />}
        </>
      ) : (
        <Tag className={linkClasses} href={href}>
          {props.children}
        </Tag>
      )}
    </div>
  );
};

export default Text;
