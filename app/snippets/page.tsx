import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allSnippets } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import SnippetsListLayout from '@/layouts/SnippetsLayout'

const SNIPPETS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Snippets' })

export default function SnippetPage() {
  const snippets = allCoreContent(sortPosts(allSnippets))
  const pageNumber = 1
  const initialDisplayPosts = snippets.slice(
    SNIPPETS_PER_PAGE * (pageNumber - 1),
    SNIPPETS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(snippets.length / SNIPPETS_PER_PAGE),
  }

  return (
    <SnippetsListLayout
      snippets={snippets}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
