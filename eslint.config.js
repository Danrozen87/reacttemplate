
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tailwindcss from "eslint-plugin-tailwindcss";
import regexp from "eslint-plugin-regexp";
import a11y from "eslint-plugin-jsx-a11y";

import { componentRules } from "./eslint/rules/component-rules";
import { typescriptRules } from "./eslint/rules/typescript-rules";
import { i18nRules } from "./eslint/rules/i18n-rules";
import { documentationRules } from "./eslint/rules/documentation-rules";
import { a11yRules } from "./eslint/rules/a11y-rules";
import { styleRules } from "./eslint/rules/style-rules";
import { performanceRules } from "./eslint/rules/performance-rules";
import { importRules } from "./eslint/rules/import-rules";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tailwindcss: tailwindcss,
      regexp: regexp,
      "jsx-a11y": a11y,
    },
    rules: {
      ...componentRules,
      ...typescriptRules,
      ...i18nRules,
      ...documentationRules,
      ...a11yRules,
      ...styleRules,
      ...performanceRules,
      ...importRules,
      
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    }
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
