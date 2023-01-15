import { FC, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "./Text";
import useSystem from "../hooks/useSystem";
import { DropdownMenu, MenuItem } from "./DropDownMenu";
import { Button } from "./Button";
import useI18n from "../hooks/useI18n";
import { Radio } from "./Radio";
import { Modal } from "./Modal";
import { IconType } from "./Icon";
import { Link } from "./Link";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const { isDutch, switchLanguage, getLanguage } = useI18n();
  const { getTheme, switchTheme, getThemeIcon } = useSystem();
  const [openMenu, setOpenMenu] = useState(false);

  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const navigation: { name: string; href: string; icon: IconType }[] = [
    { name: t("HOME"), href: "/", icon: "HomeIcon" },
    { name: t("ABOUT"), href: "#about", icon: "SparklesIcon" },
    { name: t("TIMELINE"), href: "#timeline", icon: "RectangleStackIcon" },
    { name: t("CONTACT"), href: "#contact", icon: "AtSymbolIcon" },
  ];

  const languageOptions: MenuItem[] = [
    {
      label: t("DUTCH"),
      selected: isDutch,
      onClick: () => switchLanguage("nl"),
    },
    {
      label: t("ENGLISH"),
      selected: !isDutch,
      onClick: () => switchLanguage("en"),
    },
  ];

  const themeOptions: MenuItem[] = [
    {
      label: t("LIGHT"),
      icon: "SunIcon",
      selected: getTheme() === "LIGHT",
      onClick: () => switchTheme("LIGHT"),
    },
    {
      label: t("DARK"),
      icon: "MoonIcon",
      selected: getTheme() === "DARK",
      onClick: () => switchTheme("DARK"),
    },
    {
      label: t("SYSTEM"),
      icon: "ComputerDesktopIcon",
      selected: getTheme() === "SYSTEM",
      onClick: () => switchTheme("SYSTEM"),
    },
  ];
  const settingsModal = (
    <Modal
      open={showSettingsModal}
      onClose={() => setShowSettingsModal(false)}
      title={t("SETTINGS")}
    >
      <div className="flex w-full flex-col gap-y-5 dark:divide-gray-700">
        <Radio
          label={t("THEME")}
          options={[
            { label: t("LIGHT"), value: "LIGHT" },
            { label: t("DARK"), value: "DARK" },
            { label: t("SYSTEM"), value: "SYSTEM" },
          ]}
          onChange={(e) => {
            switchTheme(e.target.value);
          }}
          value={getTheme()}
        />
        <Radio
          label={t("LANGUAGE")}
          options={[
            { label: t("DUTCH"), value: "nl" },
            { label: t("ENGLISH"), value: "en" },
          ]}
          onChange={(e) => {
            switchLanguage(e.target.value);
          }}
          value={getLanguage()}
        />
      </div>
    </Modal>
  );

  return (
    <nav
      className={classNames("sticky top-0 z-30 bg-white transition dark:bg-slate-900", className)}
    >
      <div className="mx-auto max-w-screen-2xl px-2 md:px-6 lg:px-8">
        <div className="flex h-14 items-center sm:h-16">
          <Button
            className="md:hidden"
            size="md"
            variant="clear"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label={openMenu ? "close menu" : "open menu"}
            icon={openMenu ? "XMarkIcon" : "Bars3Icon"}
          />
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex items-center space-x-5 md:space-x-2">
              <img
                className="hidden h-8 w-8 rounded-full md:block"
                src="/images/profile-1.webp"
                alt="Glenn profile"
              />
              <Text className="pr-4 md:pr-0 " weight="semibold" size="2xl">
                Glenn Visser
              </Text>
            </div>
            <div className="ml-6 hidden items-center justify-center gap-x-4 md:flex">
              {navigation.map((item) => (
                <Link
                  className="text-gray-500 pointer:hover:text-gray-900 dark:text-gray-400 dark:pointer:hover:text-gray-300"
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden items-center pr-2 md:static md:inset-auto md:ml-6 md:flex md:pr-0">
            <DropdownMenu
              menuBtn={
                <Button
                  icon={getThemeIcon()}
                  iconType="outline"
                  variant="clear"
                  size="md"
                  aria-label="open theme switcher dropdown"
                />
              }
              items={themeOptions}
            />
          </div>
          <div className="hidden md:static md:inset-auto md:ml-6 md:flex md:items-center md:pr-0">
            <DropdownMenu
              menuBtn={
                <Button
                  icon="GlobeEuropeAfricaIcon"
                  iconType="outline"
                  variant="clear"
                  size="md"
                  aria-label="open language switcher dropdown"
                />
              }
              items={languageOptions}
            />
          </div>
          <div className="flex md:static md:inset-auto md:ml-6 md:hidden md:items-center md:pr-0">
            <Button
              size="md"
              icon="Cog8ToothIcon"
              iconType="outline"
              variant="clear"
              aria-label="open settings"
              onClick={() => setShowSettingsModal(true)}
            />
            {settingsModal}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute flex w-full flex-col border-t bg-white transition dark:border-gray-700 dark:bg-slate-900 md:hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                className="p-3 ring-inset"
                href={item.href}
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
