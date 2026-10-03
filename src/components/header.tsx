import type { JSX } from "react";
import IconAndTextButton from "./button/iconAndTextButton";
import Divider from "./divider";

type HeaderProps = {
  title: string;
  description: string;
  topLink?: {
    href: string;
    label: string;
  };
};

const Header = ({ title, description, topLink }: HeaderProps): JSX.Element => (
  <header className="mb-8">
    {topLink && (
      <IconAndTextButton
        type="link"
        variant="light"
        href={topLink.href}
        label={topLink.label}
        icon="ChevronLeft"
        className="mb-6"
      />
    )}

    <h1 className="mb-1 text-header-2xl text-primary dark:text-primary-dark">{title}</h1>
    <p className="mb-6 text-base-regular text-secondary dark:text-secondary-dark">{description}</p>

    <Divider />
  </header>
);

export default Header;
