import clsx from "clsx";
import type { ComponentType, JSX, SVGProps } from "react";
import * as Icons from "../components/icons";

export type IconName = keyof typeof Icons;
type IconProps = {
  name: IconName;
  className?: string;
  stroke?: keyof typeof strokeSizes;
};

const Icon = ({ name, className, stroke = "md" }: IconProps): JSX.Element => {
  const classes = clsx("shrink-0", strokeSizes[stroke], className);

  const IconComponent = Icons[name] as ComponentType<SVGProps<SVGElement>>;

  return (
    <IconComponent className={classes} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" />
  );
};

export default Icon;

const strokeSizes = {
  xs: "stroke-0.5",
  sm: "stroke-1",
  md: "stroke-2",
} as const;
