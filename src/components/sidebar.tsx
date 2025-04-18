"use client";

import React, { useEffect, useState, type JSX } from "react";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import type { IconName } from "@/components/icon";
import { IconAndTextButton, IconAndTextLink, IconButton, IconLink } from "./button";
import { useGlobalSearch } from "@/providers/globalSearchProvider";
import { MAIL_TO, MAIN_PAGES, PROJECT_PAGES } from "../constants";
import clsx from "clsx";
import useMetaKey from "../hooks/useMetaKey";
import { Divider } from "./divider";

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname();
  const { setOpen } = useGlobalSearch();
  const metaKey = useMetaKey();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const listClasses = clsx("flex flex-col gap-y-1 p-4");

  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
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
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            icon={isCollapsed ? "ChevronRightDouble" : "ChevronLeftDouble"}
            tooltip={{
              title: isCollapsed ? "Expand sidebar" : "Collapse sidebar",
              description: `${metaKey}/`,
              side: "right",
            }}
          />
        </div>
        <SidebarButton
          label="Search"
          icon="MagnifyingGlass"
          onClick={() => setOpen(true)}
          tooltip={{
            title: "Search and quickly jump to a Page",
            description: `${metaKey}K`,
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
            current={pathname === item.href}
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
            current={pathname === item.href}
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
      <IconLink aria-label={label} variant="ghost" active={current} tooltip={{ title: label }} {...props} />
    ) : (
      <IconAndTextLink aria-label={label} variant="ghost" label={label} fullWidth active={current} {...props} />
    )}
  </li>
);

type SidebarButtonProps = {
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
    return <IconButton variant="ghost" aria-label={label} {...props} />;
  }
  return <IconAndTextButton variant="ghost" aria-label={label} label={label} fullWidth {...props} />;
};
