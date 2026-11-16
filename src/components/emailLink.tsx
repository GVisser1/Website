import type { JSX, ReactNode } from "react";
import { useState } from "react";

// Kept in pieces so the full address never appears in the prerendered HTML or the bundle, where scrapers harvest it
const ADDRESS_PARTS = ["gvisser.business", "gmail.com"];
const PLACEHOLDER_HREF = "mailto:";

const buildEmailHref = (): string => `${PLACEHOLDER_HREF}${ADDRESS_PARTS.join("@")}`;

type EmailLinkProps = {
  className?: string;
  children: ReactNode;
};

// The real address is filled in on hover, focus or touch, just before someone can use the link
const EmailLink = (props: EmailLinkProps): JSX.Element => {
  const [href, setHref] = useState(PLACEHOLDER_HREF);
  const reveal = (): void => setHref(buildEmailHref());

  return (
    <a
      href={href}
      className={props.className}
      onPointerEnter={reveal}
      onFocus={reveal}
      onClick={(event) => {
        event.currentTarget.href = buildEmailHref();
      }}
    >
      {props.children}
    </a>
  );
};

export default EmailLink;
