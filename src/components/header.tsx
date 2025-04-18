import { Divider } from "./divider";
import { IconAndTextLink } from "./button";

import type { JSX } from "react";

type HeaderProps = {
  title: string;
  description: string;
  topLink?: {
    href: string;
    label: string;
  };
};
const Header = ({ title, description, topLink }: HeaderProps): JSX.Element => (
  <header>
    {topLink && (
      <IconAndTextLink
        variant="ghost"
        href={topLink.href}
        aria-label="Back to overview"
        label="Back to overview"
        icon="ChevronLeft"
        className="mb-8 -ml-3"
      />
    )}

    <h1 className="mb-1 text-xl font-semibold text-zinc-700 dark:text-zinc-200">{title}</h1>
    <p className="text-zinc-500 dark:text-zinc-400">{description}</p>

    <Divider className="mt-6 mb-8" />
  </header>
);

export default Header;
