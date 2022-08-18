import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { IconType } from "./Icon";
import Text from "./Text";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import useSystem from "../hooks/useSystem";
import { DropdownMenu, MenuItem } from "./DropDownMenu";
import { Button } from "./Button";
import useI18n from "../hooks/useI18n";
import { Radio } from "./Radio";
import Modal from "./Modal";

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
    { name: t("Hobbies"), href: "/hobbies", icon: IconType.SPARKLES },
    { name: t("PROJECTS"), href: "/projects", icon: IconType.COLLECTION },
    { name: t("CONTACT"), href: "/contact", icon: IconType.AT_SYMBOL },
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
        "transition-300 z-30 border-b border-gray-100 bg-white dark:border-slate-700 dark:bg-slate-900",
        className
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-2 md:px-6 lg:px-8">
            <div className="flex h-16 items-center">
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
                    className="hidden h-8 w-8 rounded-full saturate-150 lg:block"
                    src="/images/personal/GlennProfile1.jpg"
                    alt="Glenn profile picture"
                  />
                  <Text className="pr-4 md:pr-0 " weight="semibold" size="2xl">
                    Glenn Visser
                  </Text>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-0.5 lg:space-x-4">
                    {navigation.map((item) => (
                      <Button
                        compact
                        block
                        icon={item.icon}
                        iconType={location.pathname.includes(item.href) ? "solid" : "outline"}
                        key={item.name}
                        type={location.pathname.includes(item.href) ? "selected" : "clear"}
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

          <Disclosure.Panel className="transition-300 h-48 border-gray-100 bg-white dark:border-slate-700 dark:bg-slate-900 md:hidden">
            <div className="divide-y divide-slate-200 dark:divide-slate-600">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={classNames({
                    "w-full cursor-pointer px-2 py-3 font-semibold": true,
                    "text-gray-400 hover:text-gray-500 dark:hover:text-white":
                      !location.pathname.includes(item.href),
                    "bg-blue-50 text-gray-700 dark:bg-slate-800/60 dark:text-white":
                      location.pathname.includes(item.href),
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
