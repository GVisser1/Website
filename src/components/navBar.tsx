import Image from "next/image";
import Link from "./link";
import Text from "./text";

const links: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/#timeline" },
  { name: "Contact", href: "/#contact" },
];

const NavBar = (): JSX.Element => (
  <header className="border-b bg-white pb-4 pt-8">
    <nav>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-x-2">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            className="size-8 rounded-full object-cover"
            src="/images/logo.webp"
            alt="Glenn profile"
          />
          <Text weight="semibold" size="lg">
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

export default NavBar;
