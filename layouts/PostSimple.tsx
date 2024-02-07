'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/post/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/layout/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/post/ScrollTopAndComment'
import { BlogTags } from '@/components/post/BlogTag'
import BlogMeta from '@/components/post/BlogMeta'
import { TOC } from '@/components/toc/Toc'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tags, slug, date, title, filePath, readingTime, toc } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <div className="justify-center py-5 lg:flex ">
        <article className="py-5  lg:w-2/3">
          <div>
            <header>
              <div className="dark:border-gray space-y-1 border-b border-gray-200 pb-10">
                <div className="space-y-6 text-center">
                  <PageTitle>{title}</PageTitle>
                  <BlogTags tags={tags} />
                  <dl>
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <BlogMeta date={date} readingTime={readingTime} />
                    </div>
                  </dl>
                </div>
              </div>
            </header>
            <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pb-8 pt-10 dark:prose-invert ">{children}</div>
              </div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
              <footer>
                <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {prev && prev.path && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/${prev.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Post anterior: ${prev.title}`}
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && next.path && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/${next.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Post siguiente: ${next.title}`}
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </article>
        <div className="hidden md:w-1/3 lg:block">{toc && <TOC data={toc} />}</div>
      </div>
    </SectionContainer>
  )
}
