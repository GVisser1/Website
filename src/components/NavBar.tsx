import Image from "next/image";
import { IconType } from "./Icon";
import { Link } from "./Link";
import { Text } from "./Text";

export const NavBar = () => (
  <header className="border-b bg-white pb-4 pt-8">
    <nav>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-x-2">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            className="h-8 w-8 rounded-full object-cover"
            src="/images/profile-1.webp"
            alt="Glenn profile"
          />
          <Text weight="semibold" size="2xl">
            Glenn Visser
          </Text>
        </div>
        <div className="flex gap-x-4">
          {links.map((item) => (
            <Link className="text-gray-500 hover:text-gray-900" href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  </header>
);

const links: { name: string; href: string; icon: IconType }[] = [
  { name: "Home", href: "/", icon: "HomeIcon" },
  { name: "Timeline", href: "#timeline", icon: "RectangleStackIcon" },
  { name: "Contact", href: "#contact", icon: "AtSymbolIcon" },
];
