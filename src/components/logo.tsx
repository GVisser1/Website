import Image from "next/image";
import logo from "@/images/logo.webp";

const Logo = (): JSX.Element => (
  <div className="flex items-center gap-x-2">
    <Image className="size-6 rounded-full object-cover" src={logo} alt="Glenn profile" />
    <p className="text-lg font-semibold text-zinc-700 dark:text-white">Glenn Visser</p>
  </div>
);

export default Logo;
