
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AuthLabelTranslations } from './components/atoms/auth-label/types';

// Import atomic component translations
import authLabelEn from './components/atoms/auth-label/en.json';
import authLabelSv from './components/atoms/auth-label/sv.json';
import authLabelDa from './components/atoms/auth-label/da.json';
import authLabelNl from './components/atoms/auth-label/nl.json';

// Type validation for translations
export type TranslationNamespaces = {
  'auth-label': AuthLabelTranslations;
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      'auth-label': authLabelEn,
    },
    sv: {
      'auth-label': authLabelSv,
    },
    da: {
      'auth-label': authLabelDa,
    },
    nl: {
      'auth-label': authLabelNl,
    },
  },
  ns: ['auth-label'],
  defaultNS: 'auth-label',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
