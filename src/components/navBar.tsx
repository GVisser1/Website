"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";
import React, { forwardRef, useId } from "react";
import { TouchTarget } from "@/components/touchTarget";
import Link from "@/components/link";

export const Navbar = ({ className, ...props }: ComponentPropsWithoutRef<"nav">): JSX.Element => (
  <nav {...props} className={clsx(className, "flex flex-1 items-center gap-4 py-2.5")} />
);

export const NavbarDivider = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => (
  <div aria-hidden="true" {...props} className={clsx(className, "h-6 w-px bg-zinc-950/10 dark:bg-white/10")} />
);

export const NavbarSection = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const id = useId();

  return (
    <LayoutGroup id={id}>
      <div {...props} className={clsx(className, "flex items-center gap-3")} />
    </LayoutGroup>
  );
};

export const NavbarSpacer = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => (
  <div aria-hidden="true" {...props} className={clsx(className, "-ml-4 flex-1")} />
);

export const NavbarItem = forwardRef(
  (
    {
      current,
      className,
      children,
      ...props
    }: { current?: boolean; className?: string; children: ReactNode } & (
      | Omit<Headless.ButtonProps, "className">
      | Omit<ComponentPropsWithoutRef<typeof Link>, "className">
    ),
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const classes = clsx(
      // Base
      "relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5",
      // Leading icon/icon-only
      "data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5",
      // Trailing icon (down chevron or similar)
      "data-[slot=icon]:last:[&:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-4",
      // Hover
      "data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950",
      // Active
      "data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950",
      // Dark mode
      "dark:text-white dark:data-[slot=icon]:*:fill-zinc-400",
      "dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white",
      "dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white"
    );

    return (
      <span className={clsx(className, "relative")}>
        {current && (
          <motion.span
            layoutId="current-indicator"
            className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
          />
        )}
        {"href" in props ? (
          <Link
            {...props}
            className={classes}
            data-current={current ? "true" : undefined}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
          >
            <TouchTarget>{children}</TouchTarget>
          </Link>
        ) : (
          <Headless.Button
            {...props}
            className={clsx("cursor-default", classes)}
            data-current={current ? "true" : undefined}
            ref={ref}
          >
            <TouchTarget>{children}</TouchTarget>
          </Headless.Button>
        )}
      </span>
    );
  }
);

NavbarItem.displayName = "NavbarItem";

export const NavbarLabel = ({ className, ...props }: ComponentPropsWithoutRef<"span">): JSX.Element => (
  <span {...props} className={clsx(className, "truncate")} />
);
