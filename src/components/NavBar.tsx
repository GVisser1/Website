/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Icon, IconType } from "./Icon";
import Text from "./Text";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import useSystem from "../hooks/useSystem";
import SettingsModal from "./SettingsModal";

interface NavBarProps {
  className?: string;
}

type Themes = "LIGHT" | "DARK" | "SYSTEM";

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
  const [currentTheme, setCurrentTheme] = useState<Themes>(getTheme);
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

  const classes = (selected: boolean) =>
    classNames({
      "flex h-10 cursor-pointer items-center justify-between rounded-md px-4 py-2 text-gray-700":
        true,
      "bg-green-200 hover:bg-green-300/80": selected,
      "hover:bg-gray-200": !selected,
    });

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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <Icon name={IconType.X} className="block h-6 w-6" />
                  ) : (
                    <Icon name={IconType.MENU} className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center space-x-5 sm:space-x-2">
                  <img
                    className="hidden h-8 w-auto rounded-full sm:block"
                    src="images/personal/GlennProfile.jpeg"
                  />
                  <Text className="pr-4 sm:pr-0" weight="semibold" size="2xl">
                    Glenn Visser
                  </Text>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className={classNames(
                          item.href === location.pathname
                            ? "bg-blue-600 text-white dark:bg-yellow-600"
                            : "text-slate-400 hover:bg-gray-700 hover:text-white",
                          "cursor-pointer rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        onClick={() => navigate(item.href)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:flex sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="mt-2">
                    <Icon
                      name={themeIcon}
                      type="outline"
                      className="cursor-pointer rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {allThemes.map((item) => (
                        <Menu.Item key={item.theme}>
                          <div
                            onClick={() => setCurrentTheme(item.theme)}
                            className={classes(currentTheme === item.theme)}
                          >
                            <Text color="all-dark" icon={item.icon}>
                              {t(item.theme)}
                            </Text>
                            {currentTheme === item.theme && (
                              <Icon
                                type="outline"
                                name={IconType.CHECK_CIRCLE}
                              />
                            )}
                          </div>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="hidden sm:static sm:inset-auto sm:ml-6 sm:flex sm:items-center sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="mt-2">
                    <Icon
                      name={IconType.GLOBE}
                      type="outline"
                      className="cursor-pointer rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <div
                          onClick={async () => i18n.changeLanguage("en")}
                          className={classes(!isDutch)}
                        >
                          <Text color="all-dark">{t("ENGLISH")}</Text>
                          {!isDutch && (
                            <Icon type="outline" name={IconType.CHECK_CIRCLE} />
                          )}
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <div
                          onClick={async () => i18n.changeLanguage("nl")}
                          className={classes(isDutch)}
                        >
                          <Text color="all-dark">{t("DUTCH")}</Text>
                          {isDutch && (
                            <Icon type="outline" name={IconType.CHECK_CIRCLE} />
                          )}
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="flex sm:static sm:inset-auto sm:ml-6 sm:hidden sm:items-center sm:pr-0">
                <SettingsModal
                  icon={IconType.COG}
                  className="cursor-pointer text-gray-400"
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={classNames(
                    item.href === location.pathname
                      ? "bg-blue-600 text-white dark:bg-yellow-600"
                      : "text-slate-400 hover:bg-gray-700 hover:text-white",
                    "block cursor-pointer rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;

interface ThemeOptions {
  theme: Themes;
  icon: IconType;
}

const allThemes: ThemeOptions[] = [
  { theme: "LIGHT", icon: IconType.SUN },
  { theme: "DARK", icon: IconType.MOON },
  { theme: "SYSTEM", icon: IconType.DESKTOP_COMPUTER },
];
