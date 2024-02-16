import type { CollectionEntry } from "astro:content";
import { snippetFilter, postFilter } from "./contentFilter";

export const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000,
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000,
        ),
    );
};

export const getSortedSnippets = (snippets: CollectionEntry<"snippet">[]) => {
  return snippets
    .filter(snippetFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000,
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000,
        ),
    );
};
