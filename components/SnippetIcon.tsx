import Icons from '@/icons/index'

export const BrandIconsMap = Icons

export function SnippetIcon(props: {
  type: keyof typeof BrandIconsMap
  className?: string
  isSelected: boolean
}) {
  const { type, className, isSelected } = props
  const Icon = BrandIconsMap[type]
  if (!Icon) return <div>Missing icon for {type}</div>

  return isSelected ? (
    <Icon.on
      className={className || 'h-10 w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10'}
      fill="currentColor"
    />
  ) : (
    <Icon.off
      className={className || 'h-10 w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10'}
      fill="currentColor"
    />
  )
}
