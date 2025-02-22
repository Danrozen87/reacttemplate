
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
      
      // File Structure & Naming
      "filename-rules/match": ["error", {
        "pattern": "^[a-z0-9-]+$",
        "message": "Use kebab-case for file names"
      }],
      "folder-rules/unique-names": ["error", {
        "message": "Folder names must be unique across the project"
      }],
      "folder-rules/atomic-structure": ["error", {
        "atoms": "src/components/atoms",
        "molecules": "src/components/molecules",
        "organisms": "src/components/organisms",
        "message": "Components must be in their appropriate atomic design folders"
      }],
      
      // Component Size & Structure
      "max-lines": ["error", {
        "max": 68,
        "skipBlankLines": true,
        "skipComments": true
      }],
      "max-depth": ["error", 3],
      "complexity": ["error", 10],
      
      // TypeScript Configuration
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "default",
          "format": ["kebab-case"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "variable",
          "format": ["kebab-case", "UPPER_CASE"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "typeLike",
          "format": ["PascalCase"]
        }
      ],
      
      // i18n Strategy Enforcement
      "i18n/atomic-translations": ["error", {
        "maxKeysPerFile": 20,
        "requiredLanguages": ["en", "sv", "da", "nl"],
        "domainBasedStructure": true
      }],
      "i18n/no-missing-keys": "error",
      "i18n/valid-keys": "error",
      
      // Documentation Requirements
      "jsdoc/require-jsdoc": ["error", {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": true
        }
      }],
      "jsdoc/require-description": "error",
      "jsdoc/require-param": "error",
      "jsdoc/require-returns": "error",
      
      // Accessibility Rules
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      
      // Styling & Theme Enforcement
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      
      // Component Pattern Enforcement
      "regexp/component-structure": ["error", {
        "patterns": [
          {
            "pattern": "^export\\s+const\\s+[A-Z][a-zA-Z]+\\s*=\\s*React\\.forwardRef",
            "message": "Components must use forwardRef pattern"
          },
          {
            "pattern": "README\\.md$",
            "message": "Each component must have a README.md file"
          }
        ]
      }],
      
      // Performance Rules
      "no-console": ["error", { "allow": ["error", "warn"] }],
      "react/no-unstable-nested-components": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // Import Rules
      "import/no-duplicates": "error",
      "import/no-cycle": "error",
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }]
    }
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
