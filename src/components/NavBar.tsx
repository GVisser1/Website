import { Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { IconType } from "./Icon";
import Text from "./Text";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import useSystem from "../hooks/useSystem";
import { DropdownMenu, MenuItem } from "./DropDownMenu";
import Modal from "./Modal";
import { Button } from "./Button";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const navigation = [
    { name: t("HOME"), href: "/home" },
    { name: t("PROJECTS"), href: "/projects" },
    { name: t("CONTACT"), href: "/contact" },
  ];

  const [useSystemTheme, setUseSystemTheme] = useState(
    !("theme" in localStorage)
  );
  const { getTheme } = useSystem(useSystemTheme);
  const [currentTheme, setCurrentTheme] = useState(getTheme);
  const [themeIcon, setThemeIcon] = useState<IconType>(
    IconType.DESKTOP_COMPUTER
  );

  useEffect(() => {
    if (currentTheme === "SYSTEM") {
      localStorage.removeItem("theme");
      setUseSystemTheme(true);
      setThemeIcon(IconType.DESKTOP_COMPUTER);
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        return;
      }
      document.documentElement.classList.remove("dark");
      return;
    }
    setUseSystemTheme(false);
    localStorage.setItem("theme", currentTheme.toLowerCase());
    if (currentTheme === "DARK") {
      setThemeIcon(IconType.MOON);
      document.documentElement.classList.add("dark");
      return;
    }
    setThemeIcon(IconType.SUN);
    document.documentElement.classList.remove("dark");
  }, [currentTheme]);

  const isDutch =
    i18n.language === "nl" ||
    i18n.language === "nl-NL" ||
    i18n.language === "nl-BE";

  const navClasses = (selected: boolean, block = false) =>
    classNames({
      "rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring focus:ring-blue-300":
        true,
      "bg-blue-600 text-white dark:bg-yellow-600": selected,
      "text-slate-400 hover:bg-gray-700 hover:text-white": !selected,
      "w-full text-left": block,
    });

  const themeOptions: MenuItem[] = [
    {
      label: t("LIGHT"),
      icon: IconType.SUN,
      selected: currentTheme === "LIGHT",
      onClick: () => setCurrentTheme("LIGHT"),
    },
    {
      label: t("DARK"),
      icon: IconType.MOON,
      selected: currentTheme === "DARK",
      onClick: () => setCurrentTheme("DARK"),
    },
    {
      label: t("SYSTEM"),
      icon: IconType.DESKTOP_COMPUTER,
      selected: currentTheme === "SYSTEM",
      onClick: () => setCurrentTheme("SYSTEM"),
    },
  ];

  const languageOptions: MenuItem[] = [
    {
      label: t("DUTCH"),
      selected: isDutch,
      onClick: () => i18n.changeLanguage("nl"),
    },
    {
      label: t("ENGLISH"),
      selected: !isDutch,
      onClick: () => i18n.changeLanguage("en"),
    },
  ];

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "z-10 border-b-2 border-gray-100 dark:border-gray-700 dark:bg-gray-800",
        className
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center sm:hidden">
                <Disclosure.Button as={Fragment}>
                  <>
                    <Button
                      compact
                      type="clear"
                      icon={open ? IconType.X : IconType.MENU}
                    />
                  </>
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center space-x-5 sm:space-x-2">
                  <img
                    className="hidden h-8 w-auto rounded-full sm:block"
                    src="src/images/personal/GlennProfile.webp"
                  />
                  <Text className="pr-4 sm:pr-0" weight="semibold" size="2xl">
                    Glenn Visser
                  </Text>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        className={navClasses(item.href === location.pathname)}
                        onClick={() => navigate(item.href)}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:flex sm:pr-0">
                <DropdownMenu
                  btnProps={{
                    icon: themeIcon,
                    iconType: "outline",
                    type: "clear",
                    compact: true,
                  }}
                  items={themeOptions}
                />
              </div>
              <div className="hidden sm:static sm:inset-auto sm:ml-6 sm:flex sm:items-center sm:pr-0">
                <DropdownMenu
                  btnProps={{
                    icon: IconType.GLOBE,
                    iconType: "outline",
                    type: "clear",
                    compact: true,
                  }}
                  items={languageOptions}
                />
              </div>
              <div className="flex sm:static sm:inset-auto sm:ml-6 sm:hidden sm:items-center sm:pr-0">
                <Modal
                  title={"Settings"}
                  btnProps={{
                    icon: IconType.COG,
                    iconType: "outline",
                    type: "clear",
                    compact: true,
                  }}
                >
                  <div className="flex w-full flex-col space-y-5 py-4">
                    <Text>{t("SETTINGS_DESCRIPTION")}</Text>
                    <div>
                      <DropdownMenu
                        btnProps={{
                          label: t("CHANGE_THEME"),
                          block: true,
                          icon: IconType.PENCIL,
                        }}
                        items={themeOptions}
                      />
                      <Text size="xs" className="pt-0.5">
                        {t("CURRENT_THEME")}: {t(`${currentTheme}`)}
                      </Text>
                    </div>
                    <div>
                      <DropdownMenu
                        btnProps={{
                          label: t("CHANGE_LANGUAGE"),
                          block: true,
                          icon: IconType.PENCIL,
                        }}
                        items={languageOptions}
                      />
                      <Text size="xs" className="pt-0.5">
                        {`${t("CURRENT_LANGUAGE")}: ${
                          isDutch ? t("DUTCH") : t("ENGLISH")
                        }`}
                      </Text>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={navClasses(item.href === location.pathname, true)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
