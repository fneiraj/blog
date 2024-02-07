import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import Tag from '../tags/Tag'

const PostArticle = ({ post }) => {
  const { slug, date, title, summary, tags } = post

  return (
    <li className="py-6">
      <article className="group flex rounded-xl bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800">
        {/*<Link href={`/blog/${slug}`}>*/}
        <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Publicado el</dt>
            <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, 'es-CL')}</time>
              {' • '}
              {/*'🕐'.repeat(Math.ceil(post.readingTime['minutes'] / 5))*/}
              {`  `}
              {post.readingTime['text'].replace('min', 'mins').replace('read', '')}
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-4">
            <div className="space-y-1">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link
                    href={`/blog/${slug}`}
                    className="postTitleTitle text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                  >
                    {title}
                  </Link>
                </h2>
              </div>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
              <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                {summary}
              </div>
            </div>
          </div>
        </div>
        {/*</Link>*/}
      </article>
    </li>
  )
}

export default function LatestPosts({ posts, maxDisplay }) {
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Ultimos posts
        </h1>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No se encontraron posts.'}
        {posts.slice(0, maxDisplay).map((post) => (
          <PostArticle key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}
