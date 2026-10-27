import { Link } from "@tanstack/react-router";
import type { JSX } from "react";

const Logo = (): JSX.Element => (
  <Link to="/" className="rounded-sm font-frijole text-header-3xl text-primary select-none focus-visible:focus-ring">
    Glenn
  </Link>
);

export default Logo;
