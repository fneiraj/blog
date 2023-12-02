/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Snippet } from 'contentlayer/generated'
import Link from '@/components/Link'
import tagData from 'app/snippet-tech-data.json'
import { SnippetCard } from '@/components/SnippetCard'
import TagWithoutLink from '@/components/TagWithoutLink'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  snippets: CoreContent<Snippet>[]
  title: string
  initialDisplayPosts?: CoreContent<Snippet>[]
  pagination?: PaginationProps
  selectedTag?: string
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Anterior
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="anterior"
          >
            Anterior
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Siguiente
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="siguiente">
            Siguiente
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function SnippetsListLayout({
  snippets,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : snippets

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Tags = () => {
    return (
      <>
        {sortedTags.map((t) => {
          ;<div className="my-3">
            {pathname.split('/tags/')[1] === slug(t) ? (
              <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                {`${t} (${tagCounts[t]})`}
              </h3>
            ) : (
              <Link
                href={`/tags/${slug(t)}`}
                className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                aria-label={`View posts tagged ${t}`}
              >
                {`${t} (${tagCounts[t]})`}
              </Link>
            )}
          </div>
        })}
      </>
    )
  }

  const TechsList = () => {
    return (
      <div className="hidden h-full max-h-screen flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
        <div className="flex px-6 py-4">
          {sortedTags.map((t) => {
            return (
              <div key={t} className="">
                <SnippetCard
                  snippet={{
                    title: `${t} - ${tagCounts[t]} snippets`,
                    type: t,
                    isSelected: pathname.split('/tags/')[1] === slug(t),
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex flex-col">
          <TechsList />
          <div>
            <ul>
              {displayPosts.map((post) => {
                const { path, title, summary, tags } = post
                return (
                  <li key={slug} className="py-6">
                    <article>
                      <Link
                        href={`/${path}`}
                        className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                          <div className="space-y-5 xl:col-span-4">
                            <div className="space-y-1">
                              <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                  <Link
                                    href={`/${path}`}
                                    className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                                  >
                                    {title}
                                  </Link>
                                </h2>
                              </div>
                              <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                  <TagWithoutLink key={tag} text={tag} />
                                ))}
                              </div>
                              <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                                {summary}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
