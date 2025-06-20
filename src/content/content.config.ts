import { defineCollection, z } from "astro:content";

export const collections = {
  links: defineCollection({
    schema: z.object({
      title: z.string(),
      redirect: z.string(),
      active: z.boolean(),
    }),
  }),
};
