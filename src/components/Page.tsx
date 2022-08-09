import { FC } from "react";
import NavBar from "./NavBar";

const Page: FC = ({ children }) => {
  return (
    <div className="absolute inset-0 overflow-hidden lg:static lg:flex-1">
      <div className="h-full overflow-y-auto bg-white transition duration-300 ease-in-out dark:bg-gray-900">
        <NavBar />
        {children}
      </div>
    </div>
  );
};
export default Page;
