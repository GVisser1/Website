import * as Headless from "@headlessui/react";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import React, { forwardRef } from "react";
import type { LinkProps } from "next/link";
import NextLink from "next/link";

const Link = forwardRef((props: LinkProps & ComponentPropsWithoutRef<"a">, ref: ForwardedRef<HTMLAnchorElement>) => (
  <Headless.DataInteractive>
    <NextLink {...props} ref={ref} />
  </Headless.DataInteractive>
));

Link.displayName = "Link";

type InlineLinkProps = LinkProps & ComponentPropsWithoutRef<"a">;
export const InlineLink = (props: InlineLinkProps): JSX.Element => (
  <NextLink {...props} rel="noopener noreferrer" target="_blank" />
);

export default Link;