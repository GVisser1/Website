import Image from "next/image";
import Link from "./link";
import Text from "./text";
import ThemeSwitcher from "./themeSwitcher";

const links: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/#timeline" },
  { name: "Contact", href: "/#contact" },
];

const NavBar = (): JSX.Element => (
  <header className="mx-auto max-w-screen-xl border-b bg-white px-4 pb-4 pt-8 transition-colors dark:border-zinc-800 dark:bg-zinc-900 md:px-8">
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

      <nav className="flex gap-x-4">
        {links.map((item) => (
          <Link href={item.href} key={item.name}>
            {item.name}
          </Link>
        ))}
      </nav>
      <ThemeSwitcher />
    </div>
  </header>
);

export default NavBar;
