import Image from "next/image";
import logo from "../../public/images/logo.webp";
import clsx from "clsx";

import type { JSX } from "react";

type LogoProps = {
  withTitle: boolean;
  size: "lg" | "sm";
  className?: string;
};

const Logo = ({ withTitle, size, className }: LogoProps): JSX.Element => {
  const classes = clsx("flex shrink-0 items-center gap-x-2 p-1.5", className);

  const imageClasses = clsx("max-w-fit rounded-full object-contain", size === "lg" ? "h-8" : "h-6");

  return (
    <div className={classes}>
      <Image className={imageClasses} src={logo} alt="" />
      {withTitle && (
        <p className="truncate text-lg/6 font-semibold text-primary dark:text-primary-dark">Glenn Visser</p>
      )}
    </div>
  );
};

export default Logo;
