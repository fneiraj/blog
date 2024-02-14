import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import {snippetFilter} from "./contentFilter";

interface Tag {
  tag: string;
  tagName: string;
  count: number;
}

const getUniqueTags = (posts: CollectionEntry<"snippet">[]) => {
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


export default getUniqueTags;
