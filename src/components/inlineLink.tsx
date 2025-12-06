import { Link } from "@tanstack/react-router";
import type { JSX, ReactNode } from "react";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
};

const InlineLink = (props: InlineLinkProps): JSX.Element => {
  const isExternal = !props.href.startsWith("/");

  return (
    <Link
      to={props.href}
      className="focus-visible:focus-ring-text visited:focus-visible:focus-ring-text text-link text-primary underline decoration-primary underline-offset-4 visited:decoration-visited hover:decoration-2 hover:decoration-primary-hover visited:hover:decoration-visited-hover dark:text-primary-dark"
      {...(isExternal && {
        rel: "noopener noreferrer",
        target: "_blank",
      })}
    >
      {props.children}
    </Link>
  );
};

export default InlineLink;
