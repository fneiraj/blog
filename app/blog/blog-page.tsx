'use client'
import PageTitle from '@/components/PageTitle'
//import PostCard from '@/components/PostCard'
import Link from '@/components/Link'
import Divider from '@/components/post/Divider'
import { Post } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/tags/Tag'

export default function Post({
  tags,
  posts,
  selectedTag,
}: {
  tags: Record<string, number>
  posts: Array<Post>
  selectedTag?: string
}) {
  //const MAX_DISPLAY = 4
  //const showingPosts = posts.slice(0, MAX_DISPLAY)

  const tagKeys = Object.keys(tags)
  const sortedTags = tagKeys.sort((a, b) => tags[b] - tags[a])

  const timeMap: Map<string, Map<string, Array<Post>>> = new Map()
  for (const post of posts) {
    if (post.date !== null) {
      const year: string = new Date(post.date).getFullYear().toString()
      const monthStr = new Date(post.date)
        .toLocaleDateString(siteMetadata.locale, {
          month: 'long',
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

  return (
    <>
      <div className="space-y-10">
        {/*        <div>
          <PageTitle>Posts recientes</PageTitle>
          <ul className={'grid gap-6 lg:grid-cols-2'} style={{ listStyle: `none` }}>
            {showingPosts.map((post) => {
              const { slug } = post
              return (
                <li key={slug}>
                  <PostCard post={post} tag={plogTag ? 'plog' : undefined} />
                </li>
              )
            })}
          </ul>
        </div>
          */}
        <div>
          <PageTitle>Tags</PageTitle>
          <div className="flex flex-wrap gap-4">
            {sortedTags.map((t) => {
              return <Tag key={t} text={t} count={tags[t]} isSelected={t === selectedTag} />
            })}
          </div>
        </div>

        <div>
          <PageTitle>
            Articulos
            {selectedTag && ` sobre ${selectedTag[0].toUpperCase()}${selectedTag.slice(1)}`}
          </PageTitle>
          {Array.from(timeMap.keys()).map((year) => {
            return (
              <div key={year}>
                <Divider>{year}</Divider>
                <ol className="relative ml-3 border-l border-gray-200 dark:border-gray-700">
                  {Array.from(timeMap.get(year)?.keys() ?? []).map((month) => (
                    <li key={month} className="mb-10 ml-6">
                      <span className="bg-hans-100 dark:ring-dark absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ">
                        <svg
                          aria-hidden="true"
                          className="text-hans-200 h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {month}
                      </h3>
                      <div>
                        {timeMap
                          .get(year)
                          ?.get(month)
                          ?.map((post) => {
                            const postDate = new Date(post.date)
                            const year = postDate.getFullYear()
                            const month = String(postDate.getMonth() + 1).padStart(2, '0')
                            const day = String(postDate.getDate()).padStart(2, '0')
                            const formattedDate = `${day}-${month}-${year}`
                            return (
                              <div className="text-lg font-bold" key={post.slug}>
                                <span className={'mr-3 text-gray-300 dark:text-opacity-50'}>
                                  {formattedDate}
                                </span>
                                <Link href={`/blog/${post.slug}`}>
                                  <span
                                    className={
                                      'text-hans-100 hover:text-hans-200 hover:text-primary-500 dark:text-opacity-80'
                                    }
                                  >
                                    {post.title}
                                  </span>
                                </Link>
                              </div>
                            )
                          })}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
