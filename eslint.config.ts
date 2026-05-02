import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // Astro's recommended linting rules.
  ...eslintPluginAstro.configs.recommended,

  {
    ignores: ["**/*.md", "**/*.mdx"]
  },

  // Turn off anything that conflicts with Prettier (MUST be last).
  eslintConfigPrettier
];
