import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import createUmami from "@yeskunall/astro-umami";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

try {
  process.loadEnvFile();
} catch {
  console.warn("Failed to load .env file.");
}

// Analytics
const umami = createUmami({
  id: process.env.UMAMI_WEBSITE_ID ?? "",
  endpointUrl: process.env.UMAMI_HOST ?? ""
});

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_DOMAIN ?? "http://localhost:4321",
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss() as any]
  },
  integrations: [mdx(), icon(), sitemap(), umami, svelte()]
});