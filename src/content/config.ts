import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const socialLinks = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.url(),
      icon: z.string(),
      visible: z.boolean()
    })
  )
});
