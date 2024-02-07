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
    .flatMap((tags) => tags)
    .map((tag) => ({
      url: `${siteUrl}/blog/tags/${tag}`,
    }))

  const snippetsRoutes = allSnippets
    .filter((anippet) => !anippet.draft)
    .map((anippet) => ({
      url: `${siteUrl}/${anippet.path}`,
      lastModified: anippet.date,
    }))

  const snippetTechs = allSnippets
    .filter((snippet) => !snippet.draft)
    .map((snippet) => snippet.tech)
    .filter((value, index, array) => array.indexOf(value) === index)
    .flatMap((tech) => tech)
    .map((tech) => ({
      url: `${siteUrl}/snippets/tags/${tech.toLowerCase()}`,
    }))

  const routes = ['', 'blog', 'snippets', 'about-me'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...blogTags, ...snippetsRoutes, ...snippetTechs]
}
