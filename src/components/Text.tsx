import classNames from "classnames";
import { Icon, IconType } from "./Icon";

export interface TextProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "white" | "light" | "medium" | "dark" | "all-white" | "all-dark";
  href?: string;
  icon?: IconType;
  iconType?: "outline" | "solid";
  iconPosition?: "left" | "right";
  tabIndex?: number;
}

export const Text: React.FC<TextProps> = ({
  size = "sm",
  weight = "normal",
  color = "dark",
  href,
  icon,
  iconType = "outline",
  iconPosition = "left",
  tabIndex,
  className,
  ...props
}) => {
  const Tag = href ? "a" : "p";
  const classes = classNames(
    {
      "transition-300 whitespace-pre-line": true,
      "flex items-center space-x-2": icon,
      "flex-row-reverse space-x-reverse": iconPosition === "right",
      [`text-${size}`]: size,
      [`font-${weight}`]: weight,
      "text-white": color === "all-white",
      "text-white dark:text-gray-700": color === "white",
      "text-gray-300": color === "light",
      "text-gray-500 dark:text-gray-400": color === "medium",
      "text-gray-700 dark:text-white": color === "dark",
      "text-gray-700": color === "all-dark",
      "hover:underline underline-offset-2 focus:outline-none": href,
    },
    className
  );

  return (
    <>
      {icon ? (
        <div className={classes}>
          <Icon name={icon} type={iconType} />
          <Tag tabIndex={tabIndex} href={href}>
            {props.children}
          </Tag>
        </div>
      ) : (
        <Tag tabIndex={tabIndex} className={classNames(classes)} href={href}>
          {props.children}
        </Tag>
      )}
    </>
  );
};

export default Text;
