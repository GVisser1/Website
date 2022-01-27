import React from "react";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export interface TextProps {
  className?: string;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?:
    | "black"
    | "dark"
    | "white"
    | "light"
    | "danger"
    | "all-white"
    | "all-dark";
  italic?: boolean;
  href?: string;
  spaceBetween?: "sm" | "base" | "lg";
  icon?: IconType;
  iconType?: "outline" | "solid";
  iconPosition?: "left" | "right";
}

export const Text: React.FC<TextProps> = ({
  size = "sm",
  weight,
  color = "dark",
  italic = false,
  href,
  spaceBetween = "base",
  icon,
  iconType = "outline",
  iconPosition = "left",
  className,
  ...props
}) => {
  const Tag = href ? "a" : "div";
  const classes = classNames(
    {
      "flex items-center": true,
      [`text-${size}`]: size,
      [`font-${weight}`]: weight,
      "text-black dark:text-white": color === "black",
      "text-gray-700 dark:text-white": color === "dark",
      "text-white dark:text-gray-700": color === "white",
      "text-red-400": color === "danger",
      "text-gray-300": color === "light",
      "text-gray-700": color === "all-dark",
      "text-white": color === "all-white",
      "space-x-1": spaceBetween === "sm",
      "space-x-2": spaceBetween === "base",
      "space-x-4": spaceBetween === "lg",
      italic: italic,
    },
    className
  );

  const linkClasses = classNames({
    "text-blue-600 hover:text-blue-100 dark:text-yellow-600 dark:hover:text-yellow-100 hover:underline cursor-pointer":
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
