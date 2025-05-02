import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import config_prettier from "eslint-config-prettier"
import plugin_onlyWarn from "eslint-plugin-only-warn"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

/** @type {import('eslint').Linter.Config[]} */
const config = [
  config_prettier,
  // next.js plugin
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      onlyWarn: plugin_onlyWarn,
    },
    rules: {
      "prefer-arrow-callback": "warn",
      "prefer-template": "warn",
      eqeqeq: "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
    ignores: [
      ".next/**",
      ".pnpm-store/**",
      "node_modules/**",
      "out/**",
      "plaintext",
    ],
  },
]

export default config
