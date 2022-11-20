import * as solid from "@heroicons/react/24/solid";
import * as outline from "@heroicons/react/24/outline";
import classNames from "classnames";

export type IconType = keyof typeof solid | keyof typeof outline;

export interface IconProps {
  name: IconType;
  type?: "solid" | "outline";
  className?: string;
  overrideSize?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  type = "solid",
  className,
  overrideSize = false,
}) => {
  const classes = classNames(!overrideSize && "w-6 h-6", className);
  const Icon = type === "solid" ? solid[name] : outline[name];
  return <Icon className={classes} />;
};
