
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translations
import enTranslations from './locales/en.json';
import svTranslations from './locales/sv.json';
import daTranslations from './locales/da.json';
import nlTranslations from './locales/nl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      sv: { translation: svTranslations },
      da: { translation: daTranslations },
      nl: { translation: nlTranslations },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false // This is important for language switching
    }
  });

export default i18n;
