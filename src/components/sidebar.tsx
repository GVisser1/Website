import { useRouterState } from "@tanstack/react-router";
import clsx from "clsx";
import { type JSX, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MAIL_TO, MAIN_PAGES, PROJECT_PAGES } from "@/constants";
import useMetaKey from "../hooks/useMetaKey";
import { useGlobalSearch } from "../providers/globalSearchProvider";
import IconAndTextButton from "./button/iconAndTextButton";
import IconButton from "./button/iconButton";
import Divider from "./divider";
import type { IconName } from "./icon";
import Logo from "./logo";

export const Sidebar = (): JSX.Element => {
  const { location } = useRouterState();
  const { setOpen } = useGlobalSearch();
  const metaKey = useMetaKey();
  const [isCollapsed, setIsCollapsed] = useLocalStorage("isSidebarCollapsed", false);
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
  }, [setIsCollapsed]);

  return (
    <nav
      className={clsx(
        "relative tablet-ls:flex hidden shrink-0 flex-col transition-all",
        isCollapsed ? "w-17" : "w-64",
      )}
    >
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
            title: "Search and quickly jump to a page",
            description: `${metaKey} + K`,
          }}
          isCollapsed={isCollapsed}
        />
      </div>

      <Divider soft />

      <ul className={listClasses}>
        {Object.values(MAIN_PAGES).map((item) => (
          <SidebarLink
            key={item.name}
            href={item.href}
            current={
              location.pathname === item.href ||
              (location.pathname.startsWith(item.href) && item.href !== "/")
            }
            icon={item.icon}
            label={item.name}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>

      <Divider soft />

      <ul className={listClasses}>
        {Object.values(PROJECT_PAGES).map((item) => (
          <SidebarLink
            key={item.name}
            href={item.href}
            current={location.pathname === item.href || location.pathname.startsWith(item.href)}
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
