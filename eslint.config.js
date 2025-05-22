import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-undef": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-console": ["off"],
      "prefer-const": ["error"],
      "max-len": [
        "error",
        { code: 80, ignoreComments: true, ignoreUrls: true },
      ],
    },
  },
]);
