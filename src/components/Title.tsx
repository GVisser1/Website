import React from "react";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export interface TitleProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  color?: "black" | "dark" | "white" | "light" | "selected";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  icon?: IconType;
  iconType?: "outline" | "solid";
  iconPosition?: "left" | "right";
  italic?: boolean;
  href?: string;
}

export const Title: React.FC<TitleProps> = ({
  as = "h2",
  size = "2xl",
  color = "dark",
  icon,
  iconType = "outline",
  iconPosition = "left",
  italic,
  href,
  className,
  ...props
}) => {
  const Tag = as;
  const classes = classNames(
    {
      // Colors
      "text-black": color === "black",
      "text-white": color === "white",
      "text-gray-100": color === "light",
      "text-gray-700 dark:text-white": color === "dark",
      "text-gray-300": color === "light",
      "text-blue-600": color === "selected",
      "hover:text-blue-200": href,

      // Font sizes
      "text-xl font-bold": size === "xl",
      "text-2xl font-bold": size === "2xl",
      "text-3xl font-bold": size === "3xl",
      "text-4xl font-bold": size === "4xl",
      "text-5xl font-bold": size === "5xl",
      "text-lg font-semibold leading-6": size === "lg",
      "text-base font-semibold": size === "base",
      "text-sm font-semibold": size === "sm",
      "text-xs font-semibold leading-6 tracking-wider uppercase": size === "xs",

      // Font styles
      italic: italic,
    },
    className
  );

  return (
    <div className={classes}>
      {icon ? (
        <div className="flex items-center space-x-2">
          {iconPosition === "left" && <Icon name={icon} type={iconType} />}
          <Tag>{props.children}</Tag>
          {iconPosition === "right" && <Icon name={icon} type={iconType} />}
        </div>
      ) : (
        <Tag>{props.children}</Tag>
      )}
    </div>
  );
};
