import type { CollectionEntry } from "astro:content";
import { getSortedPosts } from "./getSortedContent";

export const getRelatedPosts = (
  allPosts: CollectionEntry<"blog">[],
  currentPost: CollectionEntry<"blog">,
  quantity = 5,
): CollectionEntry<"blog">[] => {
  const randomLot = (array, num) => {
    const newArray = [];

    while (newArray.length < num && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }

    return newArray;
  };

  const relatedPosts = getSortedPosts(allPosts).filter(
    (post) =>
      post.id !== currentPost.id &&
      post.data.tags.some((tag) => currentPost.data.tags.includes(tag)),
  );

  if (relatedPosts.length === 0) {
    return undefined;
  }

  return randomLot(relatedPosts, quantity);
  // return relatedPosts.slice(0, 4)
};
