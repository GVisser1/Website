import { FC } from "react";
import classNames from "classnames";
import NavBar from "./NavBar";

interface PageProps {
  className?: string;
}

const Page: FC<PageProps> = ({ children, className }) => {
  const classes = classNames(
    "absolute inset-0 h-full flex flex-col lg:flex-1 dark:bg-gray-900",
    className
  );
  return (
    <div className={classes}>
      <NavBar />
      <div className="dark:bg-gray-900">{children}</div>
    </div>
  );
};
export default Page;
