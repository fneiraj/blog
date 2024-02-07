import siteMetadata from '@/data/siteMetadata'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const BlogMeta = ({ date, readingTime }) => {
  return (
    <dd className="flex-column flex gap-1 font-semibold text-gray-500 dark:text-gray-400">
      <time dateTime={date} className="flex items-center">
        📆
        <span className="ml-1 md:ml-2">
          {' '}
          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
        </span>
      </time>
      <span className="mx-2">{` • `}</span>
      <div className="flex items-center">
        🕒
        <span className="ml-1.5 md:ml-2">{Math.ceil(readingTime.minutes)} minutos</span>
      </div>
    </dd>
  )
}

export default BlogMeta
