import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("blog").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  console.log(slugifyStr(posts[0].slug))

  return posts.map(post => ({
    params: { slug: slugifyStr(post.slug) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as CollectionEntry<"blog">), {
    headers: { "Content-Type": "image/png" },
  });