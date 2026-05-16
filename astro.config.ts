import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import createUmami from "@yeskunall/astro-umami";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");

// Analytics
const umami = createUmami({
  id: env.UMAMI_WEBSITE_ID ?? "",
  endpointUrl: env.UMAMI_HOST ?? ""
});

// https://astro.build/config
export default defineConfig({
  site: env.BASE_DOMAIN ?? "http://localhost:4321",
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), icon(), sitemap(), vue(), umami]
});
