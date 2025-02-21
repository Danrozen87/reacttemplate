
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AuthLabelTranslations } from './components/atoms/auth-label/types';
import { AuthFormHeaderTranslations } from './components/molecules/auth-form-header/types';

// Import atomic component translations
import authLabelEn from './components/atoms/auth-label/en.json';
import authLabelSv from './components/atoms/auth-label/sv.json';
import authLabelDa from './components/atoms/auth-label/da.json';
import authLabelNl from './components/atoms/auth-label/nl.json';

// Import molecular component translations
import authFormHeaderEn from './components/molecules/auth-form-header/en.json';
import authFormHeaderSv from './components/molecules/auth-form-header/sv.json';
import authFormHeaderDa from './components/molecules/auth-form-header/da.json';
import authFormHeaderNl from './components/molecules/auth-form-header/nl.json';

// Type validation for translations
export type TranslationNamespaces = {
  'auth-label': AuthLabelTranslations;
  'auth-form-header': AuthFormHeaderTranslations;
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      'auth-label': authLabelEn,
      'auth-form-header': authFormHeaderEn,
    },
    sv: {
      'auth-label': authLabelSv,
      'auth-form-header': authFormHeaderSv,
    },
    da: {
      'auth-label': authLabelDa,
      'auth-form-header': authFormHeaderDa,
    },
    nl: {
      'auth-label': authLabelNl,
      'auth-form-header': authFormHeaderNl,
    },
  },
  ns: ['auth-label', 'auth-form-header'],
  defaultNS: 'auth-label',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
