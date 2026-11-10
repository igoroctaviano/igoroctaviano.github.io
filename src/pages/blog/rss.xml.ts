import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../../site";
import { getPosts } from "../../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} · Writing`,
    description: "Notes on software design, programming languages and computer science.",
    site: context.site!,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
