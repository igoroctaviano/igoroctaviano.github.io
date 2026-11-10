import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/** Blog posts, one Markdown file each. The file name is the URL slug. */
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["pt-BR", "en"]).default("pt-BR"),
    draft: z.boolean().default(false),
  }),
});

/** Free, open source tools. Edit src/data/tools.json to add one. */
const tools = defineCollection({
  loader: file("./src/data/tools.json"),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    repo: z.url(),
    url: z.url().optional(),
    tags: z.array(z.string()).default([]),
    kind: z.enum(["app", "library", "action", "cli", "guide"]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { blog, tools };
