import * as Icons from "../components/icons";
import clsx from "clsx";
import type { ComponentType, SVGProps, JSX } from "react";

export type IconName = keyof typeof Icons;
type IconProps = {
  name: IconName;
  className?: string;
  size?: keyof typeof iconSizes;
  stroke?: keyof typeof strokeSizes;
};

const Icon = ({ name, className, size = "md", stroke = "md" }: IconProps): JSX.Element => {
  const classes = clsx("shrink-0", iconSizes[size], strokeSizes[stroke], className);

  const IconComponent = Icons[name] as ComponentType<SVGProps<SVGElement>>;

  return <IconComponent className={classes} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" />;
};

export default Icon;

const iconSizes = {
  "2xs": "size-2.5",
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-7",
  "2xl": "size-8",
  custom: "",
} as const;

const strokeSizes = {
  xs: "stroke-0.5",
  sm: "stroke-1",
  md: "stroke-2",
} as const;
