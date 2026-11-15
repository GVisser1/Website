import { Link } from "@tanstack/react-router";
import type { JSX } from "react";

// Matches the favicon: a "GV" monogram, with the full name next to it
const Logo = (): JSX.Element => (
  <Link
    to="/"
    className="-mx-1 flex items-center gap-x-2.5 rounded-sm px-1 py-0.5 select-none focus-visible:focus-ring"
  >
    <span
      aria-hidden="true"
      className="flex size-8 items-center justify-center rounded-full bg-btn-primary font-heading text-small font-bold tracking-tight text-inverse"
    >
      GV
    </span>
    <span className="font-heading text-lead font-semibold text-primary">Glenn Visser</span>
  </Link>
);

export default Logo;
