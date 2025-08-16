"use client";

import React, { useEffect, useState, type JSX } from "react";
import { usePathname } from "next/navigation";
import { MAIL_TO, MAIN_PAGES, PROJECT_PAGES } from "../constants";
import clsx from "clsx";
import useMetaKey from "../hooks/useMetaKey";
import Divider from "./divider";
import { useGlobalSearch } from "../providers/globalSearchProvider";
import Logo from "./logo";
import type { IconName } from "./icon";
import IconButton from "./button/iconButton";
import IconAndTextButton from "./button/iconAndTextButton";

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname();
  const { setOpen } = useGlobalSearch();
  const metaKey = useMetaKey();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const listClasses = clsx("flex flex-col gap-y-1 p-4");

  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === "[" && !(e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCollapsed((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return (): void => document.removeEventListener("keydown", down);
  }, []);

  return (
    <nav className={clsx("relative hidden shrink-0 flex-col transition-all lg:flex", isCollapsed ? "w-17" : "w-64")}>
      <div className={listClasses}>
        <div className="mb-2 flex items-center justify-between">
          {!isCollapsed && <Logo withTitle size="sm" />}
          <IconButton
            type="button"
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            ariaLabel={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            icon={isCollapsed ? "ChevronRightDouble" : "ChevronLeftDouble"}
            tooltip={{
              title: isCollapsed ? "Expand sidebar" : "Collapse sidebar",
              description: `[`,
              side: "right",
            }}
          />
        </div>
        <SidebarButton
          id="global-search-trigger"
          label="Search"
          icon="MagnifyingGlass"
          onClick={() => setOpen(true)}
          tooltip={{
            title: "Search and quickly jump to a Page",
            description: `${metaKey} + K`,
          }}
          isCollapsed={isCollapsed}
        />
      </div>

      <Divider soft />

      <ul className={listClasses}>
        {MAIN_PAGES.map((item) => (
          <SidebarLink
            key={item.name}
            href={item.href}
            current={pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")}
            icon={item.icon}
            label={item.name}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>

      <Divider soft />

      <ul className={listClasses}>
        {PROJECT_PAGES.map((item) => (
          <SidebarLink
            key={item.name}
            href={item.href}
            current={pathname === item.href || pathname.startsWith(item.href)}
            icon={item.icon}
            label={item.name}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>

      <div aria-hidden="true" className="mt-8 flex-1" />

      <Divider soft />

      <ul className={listClasses}>
        <SidebarLink href={MAIL_TO} icon="At" label="Contact" isCollapsed={isCollapsed} />
      </ul>
    </nav>
  );
};

type SidebarLinkProps = {
  current?: boolean;
  icon: IconName;
  label: string;
  href: string;
  isCollapsed: boolean;
};

const SidebarLink = ({ current, label, isCollapsed, ...props }: SidebarLinkProps): JSX.Element => (
  <li className="relative">
    {isCollapsed ? (
      <IconButton
        type="link"
        ariaLabel={label}
        variant="ghost"
        active={current ?? false}
        tooltip={{ title: label }}
        href={props.href}
        icon={props.icon}
      />
    ) : (
      <IconAndTextButton
        type="link"
        aria-label={label}
        variant="ghost"
        label={label}
        active={current ?? false}
        icon={props.icon}
        href={props.href}
        fullWidth
      />
    )}
  </li>
);

type SidebarButtonProps = {
  id?: string;
  icon: IconName;
  label: string;
  onClick: () => void;
  tooltip: {
    title: string;
    description: string;
  };
  isCollapsed: boolean;
};

const SidebarButton = ({ isCollapsed, label, ...props }: SidebarButtonProps): JSX.Element => {
  if (isCollapsed) {
    return <IconButton type="button" variant="ghost" ariaLabel={label} {...props} />;
  }
  return (
    <IconAndTextButton
      id={props.id}
      type="button"
      variant="ghost"
      icon={props.icon}
      onClick={props.onClick}
      label={label}
      fullWidth
      tooltip={props.tooltip}
    />
  );
};
