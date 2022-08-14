import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export interface TitleProps {
  className?: string;
  size?: "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  color?: "white" | "light" | "medium" | "dark" | "all-white" | "all-dark";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  icon?: IconType;
  iconType?: "outline" | "solid";
  iconPosition?: "left" | "right";
}

export const Title: React.FC<TitleProps> = ({
  as = "h2",
  size = "base",
  color = "dark",
  icon,
  iconType = "outline",
  iconPosition = "left",
  className,
  ...props
}) => {
  const Tag = as;
  const classes = classNames(
    {
      "transition font-bold": true,
      "flex items-center space-x-2": icon,
      // Colors
      "text-white": color === "all-white",
      "text-white dark:text-gray-700": color === "white",
      "text-gray-300": color === "light",
      "text-gray-500 dark:text-gray-400": color === "medium",
      "text-gray-700 dark:text-white": color === "dark",
      "text-gray-700": color === "all-dark",

      // Font sizes
      "text-base": size === "base",
      "text-lg": size === "lg",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-2xl sm:text-3xl": size === "3xl",
      "text-4xl": size === "4xl",
      "text-5xl": size === "5xl",
      "text-6xl": size === "6xl",
      "text-5xl sm:text-6xl lg:text-7xl": size === "7xl",
    },
    className
  );

  return (
    <div className={classes}>
      {icon ? (
        <>
          {iconPosition === "left" && <Icon name={icon} type={iconType} />}
          <Tag>{props.children}</Tag>
          {iconPosition === "right" && <Icon name={icon} type={iconType} />}
        </>
      ) : (
        <Tag>{props.children}</Tag>
      )}
    </div>
  );
};
