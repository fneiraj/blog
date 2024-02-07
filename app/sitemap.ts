import { MetadataRoute } from 'next'
import { allBlogs, allSnippets } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const blogTags = allBlogs
    .filter((post) => !post.draft)
    .map((post) => post.tags)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((tag) => ({
      url: `${siteUrl}/blog/tags/${tag}`,
    }))

  const snippetsRoutes = allSnippets
    .filter((anippet) => !anippet.draft)
    .map((anippet) => ({
      url: `${siteUrl}/${anippet.path}`,
      lastModified: anippet.date,
    }))

  const snippetTags = allSnippets
    .filter((snippet) => !snippet.draft)
    .map((snippet) => snippet.tags)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((tag) => ({
      url: `${siteUrl}/snippets/tags/${tag}`,
    }))

  const routes = ['', 'blog', 'snippets', 'about-me'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...blogTags, ...snippetsRoutes, ...snippetTags]
}
