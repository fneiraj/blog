import { Card, CardContent, CardHeader, CardTitle } from '@/components/toc/Card'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { useActiveHeading } from './useActiveHeading'
import { Separator } from './Separator'

export const TOC = (props: { data }) => {
  const activeId = useActiveHeading(props.data.map((item) => item.url))

  return (
    <Card className="sticky top-[5em] mx-5">
      <CardHeader className="p-3">
        <CardTitle className="text-center text-lg">{'Tabla de contenido'}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flat-scrollbar-normal h-[60vh] overflow-y-auto px-2 py-2">
        <ul>
          {props.data?.map((item, index) => (
            <Link className={''} href={`${item.url}`} key={`toc-${index}`}>
              <li
                className={twMerge(
                  `rounded-lg py-2 text-sm hover:bg-gray-100 hover:dark:bg-gray-900`,
                  activeId === `${item.url}`
                    ? 'bg-gray-100 text-sky-700 dark:bg-gray-900 dark:text-sky-500'
                    : ''
                )}
                style={{ paddingLeft: `${item.depth - 1}em` }}
              >{`${item.value}`}</li>
            </Link>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
