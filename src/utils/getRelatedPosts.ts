import type { CollectionEntry } from "astro:content";

export const getRelatedPosts = (
  allPosts: CollectionEntry<"blog">[],
  currentPost: CollectionEntry<"blog">,
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

  const relatedPosts = allPosts.filter(
    (post) =>
      post.id !== currentPost.id &&
      post.data.tags.some((tag) => currentPost.data.tags.includes(tag)),
  );

  return randomLot(relatedPosts, 5);
  // return relatedPosts.slice(0, 4)
};
