import Link from '@/components/Link'

export default function ViewAllPosts() {
  return (
    <div className="flex justify-end text-base font-medium leading-6">
      <Link
        href="/blog"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        aria-label="All posts"
      >
        Ver todos los posts &rarr;
      </Link>
    </div>
  )
}
