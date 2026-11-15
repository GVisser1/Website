import { useRouterState } from "@tanstack/react-router";
import type { JSX } from "react";
import { MAIL_TO, PAGES } from "@/constants";
import TextButton from "./button/textButton";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import ThemeToggle from "./themeToggle";

export const Navbar = (): JSX.Element => {
  const { location } = useRouterState();
  const isActive = (href: string): boolean =>
    href === "/" ? location.pathname === href : location.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center border-b border-secondary bg-default">
      <nav className="mx-auto flex grow items-center justify-between px-6 py-1.5 tablet-ls:px-12 laptop:max-w-7xl">
        <Logo />
        <div className="hidden gap-x-3 tablet:flex">
          {PAGES.map((page) => (
            <TextButton
              key={page.name}
              type="link"
              variant="tertiary"
              label={page.name}
              href={page.href}
              active={isActive(page.href)}
              size="medium"
            />
          ))}
          <TextButton type="link" variant="tertiary" label="Contact" href={MAIL_TO} active={false} size="medium" />
          <ThemeToggle />
        </div>

        <div className="flex tablet:hidden">
          <MobileMenu isActive={isActive} />
        </div>
      </nav>
    </header>
  );
};
