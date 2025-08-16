import type { ReactNode, JSX } from "react";
import React from "react";
import NextLink from "next/link";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
};

const InlineLink = (props: InlineLinkProps): JSX.Element => (
  <NextLink
    href={props.href}
    rel="noopener noreferrer"
    target="_blank"
    className="text-link underline decoration-primary underline-offset-4 visited:decoration-visited hover:decoration-primary-hover hover:decoration-2 visited:hover:decoration-visited-hover focus-visible:focus-ring-text visited:focus-visible:focus-ring-text"
  >
    {props.children}
  </NextLink>
);

export default InlineLink;
