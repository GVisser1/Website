import { useHotkey } from "@tanstack/react-hotkeys";
import { useRouterState } from "@tanstack/react-router";
import type { JSX } from "react";
import { HOTKEYS, MAIL_TO, PAGES } from "@/constants";
import IconButton from "./button/iconButton";
import TextButton from "./button/textButton";
import Logo from "./logo";
import SearchDialog, { SearchDialogTrigger, searchDialogHandle } from "./searchDialog";
import SettingsDialog, { SettingsDialogTrigger, settingsDialogHandle } from "./settingsDialog";

export const Navbar = (): JSX.Element => {
  const { location } = useRouterState();
  const isActive = (href: string): boolean =>
    href === "/" ? location.pathname === href : location.pathname.startsWith(href);
  useHotkey(HOTKEYS.settings, () => {
    settingsDialogHandle.open(null);
  });
  useHotkey(HOTKEYS.search, () => {
    if (searchDialogHandle.isOpen) {
      searchDialogHandle.close();
    } else {
      searchDialogHandle.open(null);
    }
  });

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center border-b border-secondary bg-default">
      <nav className="mx-auto flex grow items-center justify-between px-6 py-1.5 tablet-ls:px-12 laptop:max-w-7xl">
        <Logo />
        <div className="hidden gap-x-3 tablet:flex">
          {PAGES.map((page) => (
            <TextButton
              key={page.name}
              type="link"
              variant="tertiary"
              label={page.name}
              href={page.href}
              active={isActive(page.href)}
              size="medium"
            />
          ))}
          <TextButton type="link" variant="tertiary" label="Contact" href={MAIL_TO} active={false} size="medium" />
          <SettingsDialogTrigger
            render={(triggerProps) => (
              <IconButton
                type="button"
                variant="tertiary"
                ariaLabel="Settings"
                icon="Cog"
                tooltip={{ title: "Settings", shortcut: HOTKEYS.settings, position: "bottom" }}
                htmlProps={triggerProps}
              />
            )}
          />
        </div>

        <div className="flex gap-x-3 tablet:hidden">
          <SearchDialogTrigger
            render={(triggerProps) => (
              <IconButton
                type="button"
                variant="tertiary"
                ariaLabel="Search"
                icon="MagnifyingGlass"
                tooltip={{
                  title: "Search and quickly jump to a page",
                  shortcut: HOTKEYS.search,
                  position: "bottom",
                }}
                htmlProps={triggerProps}
              />
            )}
          />
          <SettingsDialogTrigger
            render={(triggerProps) => (
              <IconButton
                type="button"
                variant="tertiary"
                ariaLabel="Settings"
                icon="Cog"
                tooltip={{ title: "Settings", shortcut: HOTKEYS.settings, position: "bottom" }}
                htmlProps={triggerProps}
              />
            )}
          />
        </div>
      </nav>
      <SearchDialog />
      <SettingsDialog />
    </header>
  );
};
