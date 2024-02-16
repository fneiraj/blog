import type { CollectionEntry } from "astro:content";
import { getSortedSnippets, getSortedPosts } from "./getSortedContent";
import { slugifyStr, slugifyAll } from "./slugify";

export const getSnippetsByTag = (
  snippets: CollectionEntry<"snippet">[],
  tag: string,
) =>
  getSortedSnippets(
    snippets.filter((post) => slugifyStr(post.data.tag) === tag),
  );

export const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) =>
  getSortedPosts(
    posts.filter((post) => slugifyAll(post.data.tags).includes(tag)),
  );
