import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import createUmami from "@yeskunall/astro-umami";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

process.loadEnvFile();

// Analytics
const umami = createUmami({
  id: process.env.UMAMI_WEBSITE_ID ?? "",
  endpointUrl: process.env.UMAMI_HOST ?? ""
});

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_DOMAIN ?? "",
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), icon(), sitemap(), vue(), umami]
});
