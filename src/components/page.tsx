import clsx from "clsx";
import type { JSX, ReactNode } from "react";

type PageProps = {
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

const Page = (props: PageProps): JSX.Element => {
  const classes = clsx(
    "mx-auto w-full px-6 pt-6 pb-20 lg:px-12 lg:pt-12",
    !props.fullWidth ? "max-w-6xl" : "",
    props.className,
  );

  return <div className={classes}>{props.children}</div>;
};

export default Page;
