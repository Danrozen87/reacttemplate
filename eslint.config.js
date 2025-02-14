
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tailwindcss from "eslint-plugin-tailwindcss";
import regexp from "eslint-plugin-regexp";
import a11y from "eslint-plugin-jsx-a11y";

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
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      // Accessibility rules
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      // Custom rules for responsive design patterns
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      // Component size limit
      "max-lines": ["error", {
        "max": 68,
        "skipBlankLines": true,
        "skipComments": true
      }],
      // i18n requirements
      "regexp/no-missing-translations": [
        "error",
        {
          pattern: "\\bt\\(['\"`]([^'\"]+)['\"`]\\)",
          message: "Missing translation key"
        }
      ],
      // Logger enforcement
      "no-console": ["error", { allow: ["error", "warn"] }],
      // Input field styling enforcement
      "regexp/match": [
        "error",
        {
          patterns: [
            {
              pattern: "className=['\"`](?!.*bg-input).*(?:bg-white|bg-gray-\\d+)['\"`]",
              message: "Use semantic bg-input token instead of direct colors for input fields",
            },
            {
              pattern: "className=['\"`](?!.*border-input-border).*(?:border-gray-\\d+)['\"`]",
              message: "Use semantic border-input-border token for input field borders",
            },
            {
              pattern: "className=['\"`](?!.*placeholder:text-input-placeholder).*placeholder:text-['\"`]",
              message: "Use semantic placeholder:text-input-placeholder token for input placeholders",
            },
            {
              pattern: "className=['\"`](?!.*sm:|lg:).)*?(?:text-\\w+|p\\w*-\\w+|m\\w*-\\w+)['\"`]",
              message: "Use mobile-first approach with sm: or lg: breakpoints for responsive styles",
            },
            {
              pattern: "className=['\"`](?!.*container).*?mx-auto['\"`]",
              message: "Use the container class for centered content",
            },
            {
              pattern: "className=['\"`](?!.*px-4 sm:px-6 lg:px-8).*?px-['\"`]",
              message: "Use consistent responsive padding (px-4 sm:px-6 lg:px-8)",
            },
            {
              pattern: "className=['\"`](?!.*animate-).*(?:transition|transform|opacity)['\"`]",
              message: "Use our centralized animation system with animate-* classes",
            },
            {
              pattern: "className=['\"`](?!.*backdrop-blur-).*blur['\"`]",
              message: "Use our centralized blur system with backdrop-blur-* classes",
            },
            {
              pattern: "className=['\"`](?!.*dark:).*bg-\\w+['\"`]",
              message: "Use dark: variant for proper dark mode support",
            },
            {
              pattern: "logger\\.(?:info|error|warn|debug)\\(",
              message: "Use our centralized logger system",
            }
          ],
        }
      ],
    },
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
