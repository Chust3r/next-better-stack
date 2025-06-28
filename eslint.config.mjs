import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: fixupConfigRules(compat.extends("next/core-web-vitals", "plugin:import/recommended")),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        import: fixupPluginRules(_import),
    },

    rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "import/no-unresolved": "off",
        "import/named": "off",
        "react-hooks/exhaustive-deps": "warn",

        "import/order": ["warn", {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index"],

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },

            "newlines-between": "always",
        }],
    },
}]);