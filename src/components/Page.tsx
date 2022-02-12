import { FC } from "react";
import classNames from "classnames";
import NavTopBar from "./NavTopBar";
import NavTabBar from "./NavTabBar";

interface PageProps {
  className?: string;
}

const Page: FC<PageProps> = ({ children, className }) => {
  const classes = classNames(
    "absolute inset-0 h-full flex flex-col lg:flex-1",
    className
  );
  return (
    <div className={classes}>
      <NavTopBar className="hidden shrink-0 md:flex" />
      {children}
      <NavTabBar className="md:hidden" />
    </div>
  );
};
export default Page;
