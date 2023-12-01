import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import { allSnippets } from 'contentlayer/generated'
import snippetTagData from 'app/snippet-tech-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import SnippetsListLayout from '@/layouts/SnippetsLayout'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = snippetTagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default function SnippetTagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(allSnippets.filter((post) => post.tech && slug(post.tech).includes(tag)))
  )
  return (
    <SnippetsListLayout
      snippets={allSnippets}
      initialDisplayPosts={filteredPosts}
      title={title}
      selectedTag={tag}
    />
  )
}
