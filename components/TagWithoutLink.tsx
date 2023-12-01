interface Props {
  text: string
}

const TagWithoutLink = ({ text }: Props) => {
  return (
    <div className="mr-3 mt-2 rounded-lg border border-primary-500 px-3 py-1 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900">
      {text.split(' ').join('-')}
    </div>
  )
}

export default TagWithoutLink
