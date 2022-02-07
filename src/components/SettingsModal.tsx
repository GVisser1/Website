import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { Icon, IconType } from "./Icon";
import Text from "./Text";
import { Title } from "./Title";

interface ModalProps {
  className?: string;
  icon?: IconType;
  label?: string;
}

type Themes = "LIGHT" | "DARK" | "SYSTEM";

const SettingsModal: React.FC<ModalProps> = ({ className, icon, label }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const getTheme = () => {
    if (!("theme" in localStorage)) {
      return "SYSTEM";
    } else if (localStorage.getItem("theme") === "light") {
      return "LIGHT";
    } else {
      return "DARK";
    }
  };
  const [theme, setTheme] = useState<Themes>(getTheme);
  const [useSystemTheme, setUseSystemTheme] = useState(
    !("theme" in localStorage)
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const mqListener = (e: MediaQueryListEvent) => {
    if (e.matches) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (!useSystemTheme) {
      darkThemeMq.removeEventListener("change", mqListener);
      return;
    }
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [useSystemTheme]);

  const isDutch =
    i18n.language === "nl" ||
    i18n.language === "nl-NL" ||
    i18n.language === "nl-BE";

  return (
    <>
      <div id="settings" onClick={openModal} className={className}>
        {icon && (
          <Icon
            name={icon}
            type="outline"
            className="shrink-0 hover:animate-spin-slow"
          />
        )}
        <p>{label}</p>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform rounded-2xl border-2 border-gray-700 bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-600">
                <div className="flex items-center justify-between">
                  <Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {t("SETTINGS")}
                  </Title>
                  <Button icon={IconType.X} type="clear" onClick={closeModal} />
                </div>
                <Text size="sm">{t("SETTINGS_DESCRIPTION")}</Text>
                <Title className="pt-4">{t("LANGUAGES")}</Title>
                <div className="mt-4 flex justify-evenly space-x-2">
                  <Button
                    block
                    onClick={async () => {
                      await i18n.changeLanguage("en");
                    }}
                    selected={!isDutch}
                    label={t("ENGLISH")}
                  />
                  <Button
                    block
                    onClick={async () => {
                      await i18n.changeLanguage("nl");
                    }}
                    selected={isDutch}
                    label={t("DUTCH")}
                  />
                </div>
                <Title className="pt-8 pb-4">{t("THEMES")}</Title>
                <div className="flex justify-evenly space-x-2">
                  <Button
                    block
                    label={t("LIGHT")}
                    selected={theme === "LIGHT"}
                    onClick={() => {
                      setTheme("LIGHT");
                      setUseSystemTheme(false);
                      localStorage.setItem("theme", "light");
                      document.documentElement.classList.remove("dark");
                    }}
                  />
                  <Button
                    block
                    label={t("DARK")}
                    selected={theme === "DARK"}
                    onClick={() => {
                      setTheme("DARK");
                      setUseSystemTheme(false);
                      localStorage.setItem("theme", "dark");
                      document.documentElement.classList.add("dark");
                    }}
                  />
                  <Button
                    block
                    label={t("SYSTEM")}
                    selected={theme === "SYSTEM"}
                    onClick={() => {
                      setTheme("SYSTEM");
                      localStorage.removeItem("theme");
                      setUseSystemTheme(true);
                      if (
                        window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
                      ) {
                        document.documentElement.classList.add("dark");
                      } else {
                        document.documentElement.classList.remove("dark");
                      }
                    }}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SettingsModal;
