import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageEN from './locale/en/translate.json'
import languageHE from './locale/he/translate.json'


export const resources = {
    en: languageEN,
    he: languageHE
} as const;


i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;