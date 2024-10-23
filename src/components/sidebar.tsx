"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";
import React, { Fragment, forwardRef, useEffect, useId, useState } from "react";
import Link from "@/components/link";
import { TouchTarget } from "@/components/touchTarget";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import Icon from "@/components/icon";
import SearchDialog from "./dialog/searchDialog";

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname();
  const [showSearchDialog, setShowSearchDialog] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey) && !showSearchDialog) {
        e.preventDefault();
        setShowSearchDialog(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <nav className="flex h-full flex-col overflow-y-hidden">
      <SidebarHeader>
        <SidebarItem href="/">
          <Logo />
        </SidebarItem>
        <SidebarSection>
          <SidebarItem current={false} onClick={() => setShowSearchDialog(true)}>
            <Icon name="MagnifyingGlassIcon" />
            <SidebarLabel>Search</SidebarLabel>
            <kbd className=" ml-auto font-sans font-semibold text-zinc-500 group-hover:visible group-data-[focus]:visible dark:text-zinc-400">
              <abbr title="Command" className="no-underline">
                ⌘
              </abbr>{" "}
              K
            </kbd>
            <SearchDialog open={showSearchDialog} onClose={() => setShowSearchDialog(false)} />
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/" current={pathname === "/"}>
            <Icon name="HomeIcon" />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/about" current={pathname.startsWith("/about")}>
            <Icon name="IdIcon" />
            <SidebarLabel>About me</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/timeline" current={pathname.startsWith("/timeline")}>
            <Icon name="CalendarIcon" />
            <SidebarLabel>Timeline</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings" current={pathname.startsWith("/settings")}>
            <Icon name="CogIcon" />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="mailto:gvisser.business@gmail.com">
            <Icon name="AtIcon" />
            <SidebarLabel>Contact</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter className="min-w-0 shrink-0">
        <span className="block truncate text-xs/5 font-normal text-zinc-600 dark:text-zinc-400">
          {`© ${new Date().getFullYear()} Glenn Visser`}
        </span>
      </SidebarFooter>
    </nav>
  );
};

const SidebarHeader = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => (
  <div
    {...props}
    className={clsx(
      className,
      "flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5"
    )}
  />
);

const SidebarBody = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => (
  <div
    {...props}
    className={clsx(
      className,
      "flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8"
    )}
  />
);

const SidebarFooter = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => (
  <div
    {...props}
    className={clsx(
      className,
      "flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5"
    )}
  />
);

const SidebarSection = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => {
  const id = useId();

  return (
    <LayoutGroup id={id}>
      <div {...props} data-slot="section" className={clsx(className, "flex flex-col gap-0.5")} />
    </LayoutGroup>
  );
};

const SidebarSpacer = ({ className, ...props }: ComponentPropsWithoutRef<"div">): JSX.Element => (
  <div aria-hidden="true" {...props} className={clsx(className, "mt-8 flex-1")} />
);

// const SidebarHeading = ({ className, children, ...props }: ComponentPropsWithoutRef<"h3">): JSX.Element => (
//   <h3 {...props} className={clsx(className, "mb-1 px-2 text-xs/6 font-medium text-zinc-600 dark:text-zinc-400")}>
//     {children}
//   </h3>
// );

type SidebarItemProps = {
  current?: boolean;
  className?: string;
  children: ReactNode;
} & (Omit<Headless.ButtonProps, "className"> | Omit<ComponentPropsWithoutRef<typeof Link>, "type" | "className">);
const SidebarItem = forwardRef(
  (
    { current, className, children, ...props }: SidebarItemProps,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
  ): JSX.Element => {
    const classes = clsx(
      // Base
      "flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-700 sm:py-2 sm:text-sm/5",
      // Focus
      "data-[focus]:outline",
      // Hover
      "data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950",
      // Current
      "data-[current=true]:text-zinc-950 data-[slot=icon]:*:data-[current=true]:fill-zinc-950",
      // Dark mode
      "dark:text-zinc-400 dark:data-[current=true]:text-white dark:data-[slot=icon]:*:fill-zinc-400",
      "dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white"
    );

    return (
      <span className={clsx(className, "relative")}>
        {current && (
          <motion.span
            layoutId="current-indicator"
            className="absolute inset-y-2 -left-4 w-1 rounded-full bg-zinc-950 dark:bg-white"
          />
        )}
        {"href" in props ? (
          <Headless.CloseButton as={Fragment} ref={ref}>
            <Link className={classes} {...props} data-current={current ? "true" : undefined}>
              <TouchTarget>{children}</TouchTarget>
            </Link>
          </Headless.CloseButton>
        ) : (
          <Headless.Button
            {...props}
            className={clsx("group cursor-default", classes)}
            data-current={current ? "true" : "false"}
            ref={ref}
          >
            <TouchTarget>{children}</TouchTarget>
          </Headless.Button>
        )}
      </span>
    );
  }
);

const SidebarLabel = ({ className, ...props }: ComponentPropsWithoutRef<"span">): JSX.Element => (
  <span {...props} className={clsx(className, "truncate")} />
);

SidebarItem.displayName = "SidebarItem";
