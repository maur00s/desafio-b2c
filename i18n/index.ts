import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";
 
i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "pt",
    defaultNS: false,
    ns: [
      "info",
      "offer",
      "product",
      "error",
    ],
    resources: {
      pt,
      en,
    },
  });
 
export default i18n;