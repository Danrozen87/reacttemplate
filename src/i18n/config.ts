
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import atomic component translations
import authLabelEn from './components/atoms/auth-label/en.json';
import authLabelDa from './components/atoms/auth-label/da.json';
import authLabelSv from './components/atoms/auth-label/sv.json';
import authLabelNl from './components/atoms/auth-label/nl.json';
import authFormHeaderEn from './components/molecules/auth-form-header/en.json';
import authFormHeaderDa from './components/molecules/auth-form-header/da.json';
import authFormHeaderSv from './components/molecules/auth-form-header/sv.json';
import authFormHeaderNl from './components/molecules/auth-form-header/nl.json';
import authPasswordInputEn from './components/molecules/auth-password-input/en.json';
import authPasswordInputDa from './components/molecules/auth-password-input/da.json';
import authPasswordInputSv from './components/molecules/auth-password-input/sv.json';
import authPasswordInputNl from './components/molecules/auth-password-input/nl.json';
import authFormEmailEn from './components/molecules/auth-form-email/en.json';
import authFormEmailDa from './components/molecules/auth-form-email/da.json';
import authFormEmailSv from './components/molecules/auth-form-email/sv.json';
import authFormEmailNl from './components/molecules/auth-form-email/nl.json';
import authFormFieldsEn from './components/molecules/auth-form-fields/en.json';
import authFormFieldsDa from './components/molecules/auth-form-fields/da.json';
import authFormFieldsSv from './components/molecules/auth-form-fields/sv.json';
import authFormFieldsNl from './components/molecules/auth-form-fields/nl.json';
import authFormFooterEn from './components/molecules/auth-form-footer/en.json';
import authFormFooterDa from './components/molecules/auth-form-footer/da.json';
import authFormFooterSv from './components/molecules/auth-form-footer/sv.json';
import authFormFooterNl from './components/molecules/auth-form-footer/nl.json';
import authSocialButtonsEn from './components/molecules/auth-social-buttons/en.json';
import authSocialButtonsDa from './components/molecules/auth-social-buttons/da.json';
import authSocialButtonsSv from './components/molecules/auth-social-buttons/sv.json';
import authSocialButtonsNl from './components/molecules/auth-social-buttons/nl.json';

// Import atomic component translations
import signUpFormEn from './components/molecules/sign-up-form/en.json';
import signUpFormDa from './components/molecules/sign-up-form/da.json';
import signUpFormSv from './components/molecules/sign-up-form/sv.json';
import signUpFormNl from './components/molecules/sign-up-form/nl.json';

// Define translation resources type
export type AuthLabelTranslations = typeof authLabelEn;
export type AuthFormHeaderTranslations = typeof authFormHeaderEn;
export type AuthPasswordInputTranslations = typeof authPasswordInputEn;
export type AuthFormEmailTranslations = typeof authFormEmailEn;
export type AuthFormFieldsTranslations = typeof authFormFieldsEn;
export type AuthFormFooterTranslations = typeof authFormFooterEn;
export type AuthSocialButtonsTranslations = typeof authSocialButtonsEn;
export type SignUpFormTranslations = typeof signUpFormEn;

// Add SignUpFormTranslations to TranslationNamespaces
export type TranslationNamespaces = {
  'auth-label': AuthLabelTranslations;
  'auth-form-header': AuthFormHeaderTranslations;
  'auth-password-input': AuthPasswordInputTranslations;
  'auth-form-email': AuthFormEmailTranslations;
  'auth-form-fields': AuthFormFieldsTranslations;
  'auth-form-footer': AuthFormFooterTranslations;
  'auth-social-buttons': AuthSocialButtonsTranslations;
  'sign-up-form': SignUpFormTranslations;
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      'auth-password-input': authPasswordInputEn,
      'auth-form-email': authFormEmailEn,
      'auth-label': authLabelEn,
      'auth-form-header': authFormHeaderEn,
      'auth-form-fields': authFormFieldsEn,
      'auth-form-footer': authFormFooterEn,
      'auth-social-buttons': authSocialButtonsEn,
      'sign-up-form': signUpFormEn
    },
    da: {
      'auth-password-input': authPasswordInputDa,
      'auth-form-email': authFormEmailDa,
      'auth-label': authLabelDa,
      'auth-form-header': authFormHeaderDa,
      'auth-form-fields': authFormFieldsDa,
      'auth-form-footer': authFormFooterDa,
      'auth-social-buttons': authSocialButtonsDa,
      'sign-up-form': signUpFormDa
    },
    sv: {
      'auth-password-input': authPasswordInputSv,
      'auth-form-email': authFormEmailSv,
      'auth-label': authLabelSv,
      'auth-form-header': authFormHeaderSv,
      'auth-form-fields': authFormFieldsSv,
      'auth-form-footer': authFormFooterSv,
      'auth-social-buttons': authSocialButtonsSv,
      'sign-up-form': signUpFormSv
    },
    nl: {
      'auth-password-input': authPasswordInputNl,
      'auth-form-email': authFormEmailNl,
      'auth-label': authLabelNl,
      'auth-form-header': authFormHeaderNl,
      'auth-form-fields': authFormFieldsNl,
      'auth-form-footer': authFormFooterNl,
      'auth-social-buttons': authSocialButtonsNl,
      'sign-up-form': signUpFormNl
    }
  },
  ns: [
    'auth-password-input',
    'auth-form-email',
    'auth-label',
    'auth-form-header',
    'auth-form-fields',
    'auth-form-footer',
    'auth-social-buttons',
    'sign-up-form'
  ],
  defaultNS: 'auth-label',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
