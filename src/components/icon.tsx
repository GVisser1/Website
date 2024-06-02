import * as Icons from "@/components/icons";
import clsx from "clsx";
import type { ComponentType, SVGProps } from "react";

export type IconName = keyof typeof Icons;
type IconProps = {
  name: IconName;
  className?: string;
  overrideSize?: boolean;
};

const Icon = ({ name, className, overrideSize = false }: IconProps): JSX.Element => {
  const classes = clsx(!overrideSize && "size-5", className);

  const IconComponent = Icons[name] as ComponentType<SVGProps<SVGElement>>;

  return <IconComponent className={classes} aria-hidden="true" />;
};

export default Icon;
