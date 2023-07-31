import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "./Link";
import { Text } from "./Text";

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="z-30 w-full border-t bg-white p-4 transition dark:border-gray-800 dark:bg-black md:px-6 md:py-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between sm:flex-row">
        <Text size="sm" color="medium">{`© ${new Date().getFullYear()} Glenn Visser`}</Text>
        <ul className="my-4 flex items-center justify-center gap-x-4 sm:my-0">
          <li>
            <Link size="sm" color="gray" href="/">
              {t("HOME")}
            </Link>
          </li>
          <li>
            <Link size="sm" color="gray" href="#about">
              {t("ABOUT")}
            </Link>
          </li>
          <li>
            <Link size="sm" color="gray" href="#timeline">
              {t("TIMELINE")}
            </Link>
          </li>
          <li>
            <Link size="sm" color="gray" href="#contact">
              {t("CONTACT")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
