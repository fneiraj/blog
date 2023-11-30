import { useState } from 'react'
import { Comments } from 'pliny/comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
const postDateTemplate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
export default function PostLayout({ content, authorDetails, next, prev, children }) {
  const { path, slug, date, title, tags } = content
  const [loadComments, setLoadComments] = useState(false)

  const CommentsPost = () => {
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
        {siteMetadata.comments && (
          <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
            {!loadComments && (
              <button onClick={() => setLoadComments(true)}>Cargar comentarios</button>
            )}
            {loadComments && <Comments commentsConfig={siteMetadata.comments} slug={slug} />}
          </div>
        )}
      </div>
    )
  }

  const PreviousAndNextPost = () => {
    console.log(prev.path)
    return (
      (next || prev) && (
        <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
          {prev && (
            <div>
              <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Articulo anterior
              </h2>
              <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                <Link href={`/${prev.path}`}>{prev.title}</Link>
              </div>
            </div>
          )}
          {next && (
            <div>
              <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Siguiente articulo
              </h2>
              <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                <Link href={`/${next.path}`}>{next.title}</Link>
              </div>
            </div>
          )}
        </div>
      )
    )
  }

  const Tags = () => {
    return (
      tags && (
        <div className="py-4 xl:py-8">
          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      )
    )
  }

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} authorDetails={authorDetails} {...content} />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Fecha de publicación</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{
              gridTemplateRows: 'auto 1fr',
            }}
          >
            <CommentsPost />
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                <Tags />
                <PreviousAndNextPost />
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Volver al inicio
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
