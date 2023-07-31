import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { IconType } from "./Icon";
import { Link } from "./Link";
import { Text } from "./Text";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [useDarkMode, setUseDarkMode] = useState(localStorage.getItem("theme") === "dark");

  const navigation: { name: string; href: string; icon: IconType }[] = [
    { name: t("HOME"), href: "#intro", icon: "HomeIcon" },
    { name: t("ABOUT"), href: "#about", icon: "SparklesIcon" },
    { name: t("TIMELINE"), href: "#timeline", icon: "RectangleStackIcon" },
    { name: t("CONTACT"), href: "#contact", icon: "AtSymbolIcon" },
  ];

  const switchTheme = () => {
    if (useDarkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setUseDarkMode(false);
      return;
    }
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    setUseDarkMode(true);
  };

  const isDutch = i18n.language === "nl" || i18n.language === "nl-NL" || i18n.language === "nl-BE";

  return (
    <nav
      className={clsx(
        "sticky top-0 z-30 border-b bg-white transition dark:border-gray-800 dark:bg-black",
        className
      )}
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
          <div className="flex items-center gap-x-2">
            <Button
              aria-label={`Switch to ${useDarkMode ? "light" : "dark"} mode`}
              icon={useDarkMode ? "MoonIcon" : "SunIcon"}
              iconType="outline"
              variant="clear"
              size="md"
              onClick={switchTheme}
            />
            <Button
              className="text-2xl leading-6"
              onClick={() => i18n.changeLanguage(isDutch ? "en" : "nl")}
              label={isDutch ? "🇳🇱" : "🇬🇧"}
              variant="clear"
              size="md"
              aria-label={`Switch to ${isDutch ? "English" : "Dutch"}`}
            />
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
