import { Fragment } from "react";
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
import useI18n from "../hooks/useI18n";
import { Radio } from "./Radio";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDutch, switchLanguage, getLanguage } = useI18n();
  const { getTheme, switchTheme, getThemeIcon } = useSystem();

  const navigation = [
    { name: t("HOME"), href: "/home", icon: IconType.HOME },
    { name: t("PROJECTS"), href: "/projects", icon: IconType.FOLDER },
    { name: t("CONTACT"), href: "/contact", icon: IconType.USER_CIRCLE },
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
      icon: IconType.SUN,
      selected: getTheme() === "LIGHT",
      onClick: () => switchTheme("LIGHT"),
    },
    {
      label: t("DARK"),
      icon: IconType.MOON,
      selected: getTheme() === "DARK",
      onClick: () => switchTheme("DARK"),
    },
    {
      label: t("SYSTEM"),
      icon: IconType.DESKTOP_COMPUTER,
      selected: getTheme() === "SYSTEM",
      onClick: () => switchTheme("SYSTEM"),
    },
  ];

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "relative z-10 border-b-2 border-gray-100 bg-white transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800",
        className
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 md:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center md:hidden">
                <Disclosure.Button as={Fragment}>
                  <div>
                    <Button compact type="clear" icon={open ? IconType.X : IconType.MENU} />
                  </div>
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex items-center space-x-5 md:space-x-2">
                  <img
                    className="hidden h-8 w-8 rounded-full md:block"
                    src="/images/personal/GlennProfile1.jpg"
                  />
                  <Text className="pr-4 md:pr-0" weight="semibold" size="2xl">
                    Glenn Visser
                  </Text>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Button
                        compact
                        icon={item.icon}
                        key={item.name}
                        type={item.href === location.pathname ? "selected" : "clear"}
                        onClick={() => navigate(item.href)}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden items-center pr-2 md:static md:inset-auto md:ml-6 md:flex md:pr-0">
                <DropdownMenu
                  btnProps={{
                    icon: getThemeIcon(),
                    iconType: "outline",
                    type: "clear",
                    compact: true,
                  }}
                  items={themeOptions}
                />
              </div>
              <div className="hidden md:static md:inset-auto md:ml-6 md:flex md:items-center md:pr-0">
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
              <div className="flex md:static md:inset-auto md:ml-6 md:hidden md:items-center md:pr-0">
                <Modal
                  title={t("SETTINGS")}
                  btnProps={{
                    icon: IconType.COG,
                    iconType: "outline",
                    type: "clear",
                    compact: true,
                  }}
                >
                  <div className="flex w-full flex-col gap-y-5 divide-y-[0.5px] divide-gray-300 py-4 dark:divide-gray-700">
                    <Text>{t("SETTINGS_DESCRIPTION")}</Text>
                    <div className="pt-4">
                      <Text weight="semibold">{t("THEME")}</Text>
                      <Radio
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
                    </div>
                    <div className="pt-4">
                      <Text weight="semibold">{t("LANGUAGE")}</Text>
                      <Radio
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
                  </div>
                </Modal>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="h-36 border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 md:hidden">
            <div className="divide-y">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={classNames({
                    "w-full cursor-pointer px-2 py-3 font-semibold": true,
                    "text-gray-400": item.href !== location.pathname,
                    "bg-emerald-100 text-gray-700 dark:bg-gray-700 dark:text-white":
                      item.href === location.pathname,
                  })}
                  onClick={() => navigate(item.href)}
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
