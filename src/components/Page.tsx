import { FC } from "react";
import NavBar from "./NavBar";

const Page: FC = ({ children }) => {
  return (
    <div className="absolute inset-0 overflow-hidden lg:static lg:flex-1">
      <NavBar />
      <div className="h-full overflow-y-auto bg-white pb-12 dark:bg-gray-900 ">
        {children}
      </div>
    </div>
  );
};
export default Page;
