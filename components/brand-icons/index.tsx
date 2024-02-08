import Icons from './icons'

export const BrandIconsMap = Icons

type Props = {
  type: keyof typeof BrandIconsMap
  className?: string
  isSelected?: boolean
}

const BrandIcon = ({ type, className, isSelected }: Props) => {
  const iconFinded = Object.keys(Icons).find((key) => key.toLowerCase() === type.toLowerCase())

  if (!iconFinded) {
    return <div>Missing icon for {type}</div>
  }

  const Icon = Icons[iconFinded]

  return (
    <Icon
      className={className || 'h-10 w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10'}
      fill="currentColor"
      //className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      isOn={isSelected == undefined ? true : isSelected}
    />
  )
}

export default BrandIcon
