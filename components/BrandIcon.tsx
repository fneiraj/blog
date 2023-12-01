import { Bash, Java, Proxmox } from '@/icons/index'

export const BrandIconsMap = {
  bash: Bash,
  java: Java,
  proxmox: Proxmox,
}

export function BrandIcon(props: {
  type: keyof typeof BrandIconsMap
  className?: string
  isSelected: boolean
}) {
  const { type, className, isSelected } = props
  const Icon = BrandIconsMap[type]
  if (!Icon) return <div>Missing icon for {type}</div>

  return isSelected ? (
    <Icon.on
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  ) : (
    <Icon.off
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  )
}
