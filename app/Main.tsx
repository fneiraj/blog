import LatestPosts from '@/components/home/LatestPosts'
import ViewAllPosts from '@/components/home/ViewAllPosts'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/*<HomeHeader />*/}
        {/*<PopularTags />*/}
        <LatestPosts posts={posts} maxDisplay={MAX_DISPLAY} />
      </div>
      {posts.length > MAX_DISPLAY && <ViewAllPosts />}
    </>
  )
}
