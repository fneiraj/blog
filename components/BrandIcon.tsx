import Bash from '@components/tech-icons/bash.svg'

export const BrandIconsMap = {
  Bash,
}

export function BrandIcon(props: { type: keyof typeof BrandIconsMap; className?: string }) {
  const { type, className } = props
  const Icon = BrandIconsMap[type]
  if (!Icon) return <div>Missing icon for {type}</div>

  return (
    <Icon
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  )
}
