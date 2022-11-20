import { useTranslation } from "react-i18next";
import Text from "./Text";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="z-30 w-full border-t border-gray-200 bg-white p-4 transition dark:border-slate-700 dark:bg-gray-900 md:px-6 md:py-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between sm:flex-row">
        <Text color="medium">{`© ${new Date().getFullYear()} Glenn Visser`}</Text>
        <ul className="my-4 flex items-center justify-center gap-x-4 sm:my-0">
          <li>
            <Text tabIndex={-1} color="medium" href="/home">
              {t("HOME")}
            </Text>
          </li>
          <li>
            <Text tabIndex={-1} color="medium" href="/hobbies">
              {t("HOBBIES")}
            </Text>
          </li>
          <li>
            <Text tabIndex={-1} color="medium" href="/projects">
              {t("PROJECTS")}
            </Text>
          </li>
          <li>
            <Text tabIndex={-1} color="medium" href="#contact">
              {t("CONTACT")}
            </Text>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
