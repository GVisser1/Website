import type { ReactNode, JSX } from "react";
import React from "react";
import NextLink from "next/link";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
};

const InlineLink = (props: InlineLinkProps): JSX.Element => {
  const isExternal = !props.href.startsWith("/");

  return (
    <NextLink
      href={props.href}
      className="text-link text-primary underline decoration-primary underline-offset-4 visited:decoration-visited hover:decoration-primary-hover hover:decoration-2 visited:hover:decoration-visited-hover focus-visible:focus-ring-text visited:focus-visible:focus-ring-text dark:text-primary-dark"
      {...(isExternal && {
        rel: "noopener noreferrer",
        target: "_blank",
      })}
    >
      {props.children}
    </NextLink>
  );
};

export default InlineLink;
