
export const documentationRules = {
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
};
