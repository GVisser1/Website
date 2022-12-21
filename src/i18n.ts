import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEn from "./translations/translationEn.json";
import translationsNl from "./translations/translationNl.json";

export const defaultNS = "translation";
export const resources = {
  en: { translation: translationsEn },
  nl: { translation: translationsNl },
};

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["en"],
    debug: false,

    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
