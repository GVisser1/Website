import Divider from "./divider";
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
        label={topLink.label}
        icon="ChevronLeft"
        className="mb-4 -ml-3"
      />
    )}

    <h1 className="mb-1 text-2xl font-semibold text-primary dark:text-primary-dark">{title}</h1>
    <p className="text-secondary dark:text-secondary-dark">{description}</p>

    <Divider className="mt-6 mb-8" />
  </header>
);

export default Header;
