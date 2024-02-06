import * as React from 'react'

function removeFirstHash(str: string): string {
  return str.replace(/^#/, '')
}

export function useActiveHeading(headingList: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = React.useState('')

  React.useEffect(() => {
    const callback: IntersectionObserverCallback = (headingEntries) => {
      const visibleHeadings = headingEntries.filter((e) => e.isIntersecting)

      if (visibleHeadings.length === 0) {
        const element = headingEntries.reverse().find((e) => e.boundingClientRect.bottom < 150)
        if (element) {
          setActiveId(`#${element.target.id}`)
        }
      } else {
        setActiveId(`#${visibleHeadings[0].target.id}`)
      }
    }

    const observer = new IntersectionObserver(callback, options)

    headingList
      .map((heading) => document?.querySelector(`[id='${removeFirstHash(heading)}']`))
      .flatMap((f) => (f ? [f] : []))
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [headingList, options])
  return activeId
}
