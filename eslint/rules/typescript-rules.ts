
export const typescriptRules = {
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
};
