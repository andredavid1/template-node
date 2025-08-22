import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      // Ordena imports por tipo e alfabeticamente
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Remove imports não utilizados
      "unused-imports/no-unused-imports": "error",
      // Remove variáveis não utilizadas (opcional)
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
      ],
    },
  },
  tseslint.configs.recommended,
]);
