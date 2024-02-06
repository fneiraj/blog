import Icons from '@/icons/index'

export const BrandIconsMap = Icons

const BrandIcon = (props: { type: keyof typeof BrandIconsMap; className?: string }) => {
  const { type, className } = props

  const Icon = BrandIconsMap[type]

  if (!Icon) {
    return <div>Missing icon for {type}.</div>
  }

  return (
    <Icon.on
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  )
}

export default BrandIcon
