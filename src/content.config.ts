import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    description: z.string(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    rssOnly: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  posts: postsCollection,
};
