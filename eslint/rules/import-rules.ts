
export const importRules = {
  "import/no-duplicates": "error",
  "import/no-cycle": "error",
  "import/order": ["error", {
    "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
    "newlines-between": "always",
    "alphabetize": { "order": "asc" }
  }],
};
