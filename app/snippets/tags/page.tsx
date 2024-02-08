import { genPageMetadata } from 'app/seo'
import tagData from 'app/snippet-tag-data.json'
import { TagItem } from '@/components/snippet/TagCard'

export const metadata = genPageMetadata({ title: 'Snippets' })

export default function SnippetTagsPage() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const TagsList = () => {
    return (
      <div className="hidden h-full max-h-screen flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
        <div className="flex px-6 py-4">
          {sortedTags.map((t) => {
            return (
              <div key={t} className="">
                <TagItem
                  snippet={{
                    title: `${t} - ${tagCounts[t]} snippets`,
                    type: t,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return <TagsList />
}
