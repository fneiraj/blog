import Link from 'next/link'
import BrandIcon from '../brand-icons'

export default function SnippetCard({ snippet }) {
  const { path, title, summary, tag } = snippet

  {
    /*return (
    <li className="py-6">
      <article className="group flex rounded-xl bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800">
        {/*<Link
          href={`/${path}`}
  >
  <div className="space-y-2 bg-transparent bg-opacity-20 p-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
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
        )*/
  }

  return (
    <Link
      href={`/${path}`}
      title={title}
      className="rounded-xl border border-transparent bg-transparent bg-opacity-20 p-3 py-6 transition duration-100 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 "
    >
      <div
        data-umami-event="view-snippet"
        className="mb-4 flex cursor-pointer gap-6  lg:mb-0 lg:p-4"
      >
        <div className="flex items-center justify-center">
          <BrandIcon type={tag} className="h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20" />
        </div>
        <div className="space-y-2 overflow-hidden">
          <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold leading-8 tracking-tight lg:text-xl">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 lg:text-base">{summary}</p>
        </div>
      </div>
    </Link>
  )
}
