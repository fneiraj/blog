import { BrandIcon } from './BrandIcon'
import Link from './Link'

export function SnippetCard({ snippet }) {
  const { type, title, isSelected } = snippet

  const link = isSelected ? `/snippets` : `/snippets/tags/${type}`

  return (
    <Link href={link} title={title}>
      <div
        data-umami-event="view-snippet"
        className="shadow-intense hover:shadow-nextjs dark:shadow-intense-dark  dark:hover:shadow-nextjs-dark mb-4 flex cursor-pointer gap-6 rounded-lg border border-transparent p-3 transition duration-100 hover:scale-110 lg:mb-0 lg:p-4"
      >
        <div className="flex items-center justify-center">
          <BrandIcon type={type} isSelected={isSelected} />
        </div>
      </div>
    </Link>
  )
}
