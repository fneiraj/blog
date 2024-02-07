import { sortPosts } from 'pliny/utils/contentlayer'
import { allPosts } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'

import BlogPage from './blog-page'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Blog' })
export default async function Page() {
  const sortedPosts = sortPosts(allPosts)
  const tags = tagData as Record<string, number>
  return <BlogPage tags={tags} posts={sortedPosts} />
}
