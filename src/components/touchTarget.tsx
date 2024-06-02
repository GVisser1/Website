import type { ReactNode } from "react";

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export const TouchTarget = ({ children }: { children: ReactNode }): JSX.Element => (
  <>
    <span
      className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
      aria-hidden="true"
    />
    {children}
  </>
);
