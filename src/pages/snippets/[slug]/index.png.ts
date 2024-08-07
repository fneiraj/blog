import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForSnippet } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("snippet").then((p) =>
    p.filter(({ data }) => !data.draft && !data.ogImage),
  );

  return posts.map((post) => ({
    params: { slug: slugifyStr(post.slug) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForSnippet(props as CollectionEntry<"snippet">),
    {
      headers: { "Content-Type": "image/png" },
    },
  );
