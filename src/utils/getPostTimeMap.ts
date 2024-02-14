import type { CollectionEntry } from "astro:content";
import { postFilter } from "./contentFilter";

export const getPostsTimeMap = (posts: CollectionEntry<"blog">[]) => {
  const timeMap: Map<string, Map<string, Array<CollectionEntry<'blog'>>>> = new Map()

  for (const post of posts) {
    if (post.date !== null) {
      const year: string = new Date(post.data.pubDatetime).getFullYear().toString()
      const monthStr = new Date(post.data.pubDatetime)
        .toLocaleDateString('es-CL', {
          month: 'long'
        })
        .split(' ')[0]
      const month = monthStr[0].toUpperCase() + monthStr.slice(1)
      if (!timeMap.has(year)) {
        timeMap.set(year, new Map())
      }
      if (!timeMap.get(year)?.has(month)) {
        timeMap.get(year)?.set(month, [])
      }
      timeMap.get(year)?.get(month)?.push(post)
    }
  }

  return timeMap
};
