import * as Headless from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";

const styles = {
  base: [
    "relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold p-2",
    // Focus
    "border-transparent text-zinc-950 active:bg-zinc-950/5 hover:bg-zinc-950/5",
    "focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
    // Disabled
    "disabled:opacity-50",
    "dark:text-zinc-200 dark:active:bg-white/10 dark:hover:bg-white/10",
  ],
};

type ButtonProps = (
  | { outline?: never; plain?: never }
  | { outline: true; plain?: never }
  | { outline?: never; plain: true }
) & { className?: string; children: React.ReactNode } & (
    | Omit<Headless.ButtonProps, "as" | "className">
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, "className">
  );

const Button = forwardRef(({ className, children, ...props }: ButtonProps, ref: React.ForwardedRef<HTMLElement>) => {
  let classes = clsx(className, styles.base);

  return "href" in props ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={clsx(classes, "cursor-default")} ref={ref}>
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  );
});

Button.displayName = "Button";

export { Button };

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export const TouchTarget = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <span
      className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
      aria-hidden="true"
    />
    {children}
  </>
);
