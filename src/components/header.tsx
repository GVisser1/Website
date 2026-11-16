import type { JSX, ReactNode } from "react";

type HeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

const Header = (props: HeaderProps): JSX.Element => (
  <header className="mt-10 mb-6 flex flex-col gap-y-2">
    <h1 className="font-heading text-title text-primary">{props.title}</h1>
    {props.description && <p className="mb-6 text-body text-secondary">{props.description}</p>}

    {props.children}
  </header>
);

export default Header;
