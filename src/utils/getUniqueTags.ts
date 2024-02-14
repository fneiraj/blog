import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import {postFilter, snippetFilter} from "./contentFilter";

interface Tag {
  tag: string;
  tagName: string;
}

export const getUniqueBlogTags = (posts: CollectionEntry<"blog">[]) => {
  const tags: Tag[] = posts
    .filter(postFilter)
    .flatMap(post => post.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};


export const getUniqueSnippetsTags = (posts: CollectionEntry<"snippet">[]) => {
  const tags: Tag[] = posts
    .filter(snippetFilter)
    .flatMap(post => post.data.tag)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag, count: 1}))
    .reduce((acc: Tag[], tag) => {
      const existingTag: Tag | undefined = acc.find((t: Tag) => t.tag === tag.tag);
      if (existingTag) {
        existingTag.count++;
      } else {
        acc.push(tag);
      }
      return acc;
    }, [])
  return tags;
};

