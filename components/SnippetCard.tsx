import { BrandIcon } from './BrandIcon'
import Link from './Link'

export function SnippetCard({ snippet }) {
  const { type, heading, summary, title, slug } = snippet

  return (
    <Link href={`/snippets/${slug}`} title={title}>
      <div
        data-umami-event="view-snippet"
        className="shadow-intense hover:shadow-nextjs dark:shadow-intense-dark dark:hover:shadow-nextjs-dark mb-4 flex cursor-pointer gap-6 rounded-lg border border-transparent p-3 lg:mb-0 lg:p-4"
      >
        <div className="flex items-center justify-center">
          <BrandIcon type={type} />
        </div>
        <div className="space-y-2 overflow-hidden">
          <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold leading-8 tracking-tight lg:text-xl">
            {heading}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 lg:text-base">{summary}</p>
        </div>
      </div>
    </Link>
  )
}
