import { useTranslation } from "react-i18next";

const useI18n = () => {
  const { i18n } = useTranslation();

  const isDutch =
    i18n.language === "nl" ||
    i18n.language === "nl-NL" ||
    i18n.language === "nl-BE";

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const getLanguage = () => (isDutch ? "nl" : "en");

  return { isDutch, getLanguage, switchLanguage };
};

export default useI18n;
