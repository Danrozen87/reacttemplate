
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Atomic Components - Auth Label
import authLabelEn from './components/atoms/auth-label/en.json';
import authLabelDa from './components/atoms/auth-label/da.json';
import authLabelSv from './components/atoms/auth-label/sv.json';
import authLabelNl from './components/atoms/auth-label/nl.json';

// Atomic Components - Auth Form Header
import authFormHeaderEn from './components/molecules/auth-form-header/en.json';
import authFormHeaderDa from './components/molecules/auth-form-header/da.json';
import authFormHeaderSv from './components/molecules/auth-form-header/sv.json';
import authFormHeaderNl from './components/molecules/auth-form-header/nl.json';

// Atomic Components - Auth Password Input
import authPasswordInputEn from './components/molecules/auth-password-input/en.json';
import authPasswordInputDa from './components/molecules/auth-password-input/da.json';
import authPasswordInputSv from './components/molecules/auth-password-input/sv.json';
import authPasswordInputNl from './components/molecules/auth-password-input/nl.json';

// Atomic Components - Auth Form Email
import authFormEmailEn from './components/molecules/auth-form-email/en.json';
import authFormEmailDa from './components/molecules/auth-form-email/da.json';
import authFormEmailSv from './components/molecules/auth-form-email/sv.json';
import authFormEmailNl from './components/molecules/auth-form-email/nl.json';

// Atomic Components - Auth Form Fields
import authFormFieldsEn from './components/molecules/auth-form-fields/en.json';
import authFormFieldsDa from './components/molecules/auth-form-fields/da.json';
import authFormFieldsSv from './components/molecules/auth-form-fields/sv.json';
import authFormFieldsNl from './components/molecules/auth-form-fields/nl.json';

// Atomic Components - Auth Form Footer
import authFormFooterEn from './components/molecules/auth-form-footer/en.json';
import authFormFooterDa from './components/molecules/auth-form-footer/da.json';
import authFormFooterSv from './components/molecules/auth-form-footer/sv.json';
import authFormFooterNl from './components/molecules/auth-form-footer/nl.json';

// Atomic Components - Auth Social Buttons
import authSocialButtonsEn from './components/molecules/auth-social-buttons/en.json';
import authSocialButtonsDa from './components/molecules/auth-social-buttons/da.json';
import authSocialButtonsSv from './components/molecules/auth-social-buttons/sv.json';
import authSocialButtonsNl from './components/molecules/auth-social-buttons/nl.json';

// Atomic Components - Auth Hero
import authHeroEn from './components/organisms/auth-hero/en.json';
import authHeroDa from './components/organisms/auth-hero/da.json';
import authHeroSv from './components/organisms/auth-hero/sv.json';
import authHeroNl from './components/organisms/auth-hero/nl.json';

// Base translation types
export interface BaseTranslations {
  auth: Record<string, unknown>;
}

// Component-specific translation types
export type AuthLabelTranslations = typeof authLabelEn;
export type AuthFormHeaderTranslations = typeof authFormHeaderEn;
export type AuthPasswordInputTranslations = typeof authPasswordInputEn;
export type AuthFormEmailTranslations = typeof authFormEmailEn;
export type AuthFormFieldsTranslations = typeof authFormFieldsEn;
export type AuthFormFooterTranslations = typeof authFormFooterEn;
export type AuthSocialButtonsTranslations = typeof authSocialButtonsEn;
export type AuthHeroTranslations = typeof authHeroEn;

// Namespace configuration type
export type TranslationNamespaces = {
  'auth-label': AuthLabelTranslations;
  'auth-form-header': AuthFormHeaderTranslations;
  'auth-password-input': AuthPasswordInputTranslations;
  'auth-form-email': AuthFormEmailTranslations;
  'auth-form-fields': AuthFormFieldsTranslations;
  'auth-form-footer': AuthFormFooterTranslations;
  'auth-social-buttons': AuthSocialButtonsTranslations;
  'auth-hero': AuthHeroTranslations;
};

// Resource configuration
const resources = {
  en: {
    'auth-label': authLabelEn,
    'auth-form-header': authFormHeaderEn,
    'auth-password-input': authPasswordInputEn,
    'auth-form-email': authFormEmailEn,
    'auth-form-fields': authFormFieldsEn,
    'auth-form-footer': authFormFooterEn,
    'auth-social-buttons': authSocialButtonsEn,
    'auth-hero': authHeroEn
  },
  da: {
    'auth-label': authLabelDa,
    'auth-form-header': authFormHeaderDa,
    'auth-password-input': authPasswordInputDa,
    'auth-form-email': authFormEmailDa,
    'auth-form-fields': authFormFieldsDa,
    'auth-form-footer': authFormFooterDa,
    'auth-social-buttons': authSocialButtonsDa,
    'auth-hero': authHeroDa
  },
  sv: {
    'auth-label': authLabelSv,
    'auth-form-header': authFormHeaderSv,
    'auth-password-input': authPasswordInputSv,
    'auth-form-email': authFormEmailSv,
    'auth-form-fields': authFormFieldsSv,
    'auth-form-footer': authFormFooterSv,
    'auth-social-buttons': authSocialButtonsSv,
    'auth-hero': authHeroSv
  },
  nl: {
    'auth-label': authLabelNl,
    'auth-form-header': authFormHeaderNl,
    'auth-password-input': authPasswordInputNl,
    'auth-form-email': authFormEmailNl,
    'auth-form-fields': authFormFieldsNl,
    'auth-form-footer': authFormFooterNl,
    'auth-social-buttons': authSocialButtonsNl,
    'auth-hero': authHeroNl
  }
};

// Namespace configuration
const namespaces = [
  'auth-label',
  'auth-form-header',
  'auth-password-input',
  'auth-form-email',
  'auth-form-fields',
  'auth-form-footer',
  'auth-social-buttons',
  'auth-hero'
] as const;

// i18n initialization configuration
i18n.use(initReactI18next).init({
  resources,
  ns: namespaces,
  defaultNS: 'auth-label',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
