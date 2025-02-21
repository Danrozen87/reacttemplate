
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import atomic component translations
import authPasswordInputEn from './components/molecules/auth-password-input/en.json';
import authPasswordInputDa from './components/molecules/auth-password-input/da.json';
import authPasswordInputSv from './components/molecules/auth-password-input/sv.json';
import authPasswordInputNl from './components/molecules/auth-password-input/nl.json';

import authFormEmailEn from './components/molecules/auth-form-email/en.json';
import authFormEmailDa from './components/molecules/auth-form-email/da.json';
import authFormEmailSv from './components/molecules/auth-form-email/sv.json';
import authFormEmailNl from './components/molecules/auth-form-email/nl.json';

// Import existing translations
import authLabelEn from './components/atoms/auth-label/en.json';
import authLabelSv from './components/atoms/auth-label/sv.json';
import authLabelDa from './components/atoms/auth-label/da.json';
import authLabelNl from './components/atoms/auth-label/nl.json';

import authFormHeaderEn from './components/molecules/auth-form-header/en.json';
import authFormHeaderSv from './components/molecules/auth-form-header/sv.json';
import authFormHeaderDa from './components/molecules/auth-form-header/da.json';
import authFormHeaderNl from './components/molecules/auth-form-header/nl.json';

// Type definitions for translations
interface AuthLabelTranslations {
  auth: {
    label: {
      email: string;
      password: string;
      remember: string;
      submit: string;
    }
  }
}

interface AuthFormHeaderTranslations {
  auth: {
    welcome: string;
    signInToContinue: string;
  }
}

interface AuthPasswordInputTranslations {
  auth: {
    password: string;
    passwordPlaceholder: string;
    showPassword: string;
    hidePassword: string;
  }
}

interface AuthFormEmailTranslations {
  auth: {
    emailOrPhone: string;
    emailOrPhonePlaceholder: string;
  }
}

// Type validation for translations
export type TranslationNamespaces = {
  'auth-label': AuthLabelTranslations;
  'auth-form-header': AuthFormHeaderTranslations;
  'auth-password-input': AuthPasswordInputTranslations;
  'auth-form-email': AuthFormEmailTranslations;
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      'auth-password-input': authPasswordInputEn,
      'auth-form-email': authFormEmailEn,
      'auth-label': authLabelEn,
      'auth-form-header': authFormHeaderEn,
    },
    da: {
      'auth-password-input': authPasswordInputDa,
      'auth-form-email': authFormEmailDa,
      'auth-label': authLabelDa,
      'auth-form-header': authFormHeaderDa,
    },
    sv: {
      'auth-password-input': authPasswordInputSv,
      'auth-form-email': authFormEmailSv,
      'auth-label': authLabelSv,
      'auth-form-header': authFormHeaderSv,
    },
    nl: {
      'auth-password-input': authPasswordInputNl,
      'auth-form-email': authFormEmailNl,
      'auth-label': authLabelNl,
      'auth-form-header': authFormHeaderNl,
    }
  },
  ns: [
    'auth-password-input',
    'auth-form-email',
    'auth-label',
    'auth-form-header',
  ],
  defaultNS: 'auth-label',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
