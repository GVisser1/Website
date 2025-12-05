import clsx from "clsx";
import type { JSX } from "react";
import Image from "./image";

type LogoProps = {
  withTitle: boolean;
  size: "lg" | "sm";
  className?: string;
};

const Logo = ({ withTitle, size, className }: LogoProps): JSX.Element => {
  const classes = clsx("flex shrink-0 items-center gap-x-2 p-1.5", className);

  const imageClasses = clsx("rounded-full object-contain", size === "lg" ? "size-8" : "size-6");

  return (
    <div className={classes}>
      <Image className={imageClasses} src="/images/logo.webp" alt="" />
      {withTitle && (
        <p className="truncate text-header-lg text-primary dark:text-primary-dark">Glenn Visser</p>
      )}
    </div>
  );
};

export default Logo;
