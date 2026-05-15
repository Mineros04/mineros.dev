import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const socialLinks = defineCollection({
  loader: file("src/content/socialLinks/links.json"),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    icon: z.string(),
    visible: z.boolean()
  })
});

export const collections = { socialLinks };
