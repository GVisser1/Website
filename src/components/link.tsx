import type { ReactNode, JSX } from "react";
import React from "react";
import NextLink from "next/link";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
};

export const InlineLink = (props: InlineLinkProps): JSX.Element => (
  <NextLink href={props.href} rel="noopener noreferrer" target="_blank" className="focus-visible:outline">
    {props.children}
  </NextLink>
);
