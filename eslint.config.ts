import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // Basic JS/TS recommended rules.
  tseslint.configs.recommended,

  // Recommended Astro rules.
  ...eslintPluginAstro.configs.recommended,

  // Specific Parser Config for Astro + TS.
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser, // This tells Astro to use TS parser for frontmatter
        extraFileExtensions: [".astro"]
      }
    }
  },

  // Prettier peacemaker (Always last).
  eslintConfigPrettier
];
