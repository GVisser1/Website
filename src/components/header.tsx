import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import IconAndTextButton from "./button/iconAndTextButton";

type HeaderProps = {
  title: string;
  description: string;
  topLink?: {
    href: string;
    label: string;
  };
  children?: ReactNode;
};

const Header = (props: HeaderProps): JSX.Element => (
  <header className={clsx("mb-6 flex flex-col gap-y-2", props.topLink ? "" : "mt-10")}>
    {props.topLink && (
      <IconAndTextButton
        type="link"
        variant="light"
        href={props.topLink.href}
        label={props.topLink.label}
        icon="ChevronLeft"
        className="mb-6 self-start"
      />
    )}

    <h1 className="text-header-4xl text-primary">{props.title}</h1>
    {props.description && (
      <p className="dark:text-secondary-dark mb-6 text-base-regular text-secondary">{props.description}</p>
    )}

    {props.children}
  </header>
);

export default Header;
