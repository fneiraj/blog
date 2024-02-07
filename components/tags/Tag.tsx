import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  count?: number
  isSelected?: boolean
}

const Tag = ({ text, count, isSelected }: Props) => {
  if (!count) {
    return (
      <Link
        href={`/blog/tags/${slug(text)}`}
        className="mr-3 mt-2 rounded-lg border border-primary-500 px-3 py-1 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900"
      >
        {text}
      </Link>
    )
  } else {
    const className =
      'mr-3 mt-3 overflow-hidden rounded-lg border border-primary-500 text-xl text-primary-500 duration-300 hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900'

    const selectedClassName =
      'mr-3 mt-3 overflow-hidden rounded-lg border border-primary-500 text-xl duration-300 bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900'

    const link = isSelected ? `/blog` : `/blog/tags/${text}`

    return (
      <span className={isSelected ? selectedClassName : className}>
        <Link href={link}>
          <span className="text-hans-100 p-2">{text.toUpperCase()}</span>
          <span className={'dark:text-hans-400 bg-primary-500 p-2 text-white'}>{count}</span>
        </Link>
      </span>
    )
  }
}

export default Tag
