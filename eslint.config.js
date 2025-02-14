
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tailwindcss from "eslint-plugin-tailwindcss";
import regexp from "eslint-plugin-regexp";

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
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
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
      // Custom rules for responsive design patterns
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      // Enforce responsive patterns using regexp
      "regexp/no-unused-capturing-group": "error",
      "regexp/no-super-linear-backtracking": "error",
      "regexp/prefer-named-replacement": "error",
      "regexp/match": [
        "error",
        {
          patterns: [
            {
              pattern: "className=['\"`](?:(?!sm:|lg:).)*?(?:text-\\w+|p\\w*-\\w+|m\\w*-\\w+)['\"`]",
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
            // New patterns for animations and blur effects
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
