import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import jsxA11YPlugin from "eslint-plugin-jsx-a11y";
import preferArrowFunctionsPlugin from "eslint-plugin-prefer-arrow-functions";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import playwrightPlugin from "eslint-plugin-playwright";

export default [
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: { project: true },
      globals: { ...globals.browser, es2021: true },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
      "jsx-a11y": jsxA11YPlugin,
      "prefer-arrow-functions": preferArrowFunctionsPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.strict.rules,
      ...typescriptPlugin.configs.stylistic.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "jsx-a11y/no-autofocus": [2, { ignoreNonDOM: true }],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
      "prefer-arrow-functions/prefer-arrow-functions": ["error", { returnStyle: "implicit" }],
      "react/self-closing-comp": "error",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["e2e-tests/**/*.ts"],
    plugins: { playwright: playwrightPlugin },
    rules: {
      ...playwrightPlugin.configs["flat/recommended"].rules,
      "@typescript-eslint/no-floating-promises": "error",
      "playwright/no-raw-locators": "error",
      "playwright/expect-expect": ["error", { assertFunctionNames: ["analyzeA11yOfPage"] }],
      "playwright/no-standalone-expect": "off",
      "no-await-in-loop": "off",
      "no-restricted-syntax": "off",
    },
  },
  {
    ignores: ["node_modules", "dist", "*.config.*", ".next", "e2e-tests/test-reports", "e2e-tests/test-results"],
  },
];
