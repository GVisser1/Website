import { FC } from "react";
import classNames from "classnames";

interface PageProps {
  className?: string;
}

const Page: FC<PageProps> = ({ children, className }) => {
  const classes = classNames(
    "absolute inset-0 h-full flex flex-col lg:flex-1",
    className
  );
  return <div className={classes}>{children}</div>;
};
export default Page;
