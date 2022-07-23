import { useTranslation } from "react-i18next";

const useI18n = () => {
  const { i18n } = useTranslation();

  const isDutch =
    i18n.language === "nl" ||
    i18n.language === "nl-NL" ||
    i18n.language === "nl-BE";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return { isDutch, changeLanguage };
};

export default useI18n;
