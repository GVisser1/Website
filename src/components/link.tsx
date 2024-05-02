import clsx from "clsx";

export type LinkProps = {
  className?: string;
  href: string;
  size?: "xs" | "sm" | "base";
  color?: "gray" | "blue" | "gray-blue";
  ariaLabel?: string;
  children: React.ReactNode;
};

const Link = ({ size = "base", color = "gray", href, ariaLabel, className, children }: LinkProps): JSX.Element => {
  const classes = clsx(
    "transition focus-visible:outline",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",

      "text-gray-500 hover:text-gray-700 active:!text-gray-800": color === "gray",
      "text-blue-600 hover:text-blue-800 active:!text-blue-900": color === "blue",
    },
    className,
  );

  return (
    <a className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default Link;
