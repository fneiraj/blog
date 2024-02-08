'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '../Link'
import MobileNav from './MobileNav'
import ThemeSwitch from '../ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'
import TypewriterComponent from 'typewriter-effect'

const Header = () => {
  const pathname = usePathname()
  const title = pathname === '/' ? '/home' : pathname

  const ellipsisText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + '...'
    }
    return text
  }

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle} title="Ir al inicio">
          {/* <div className="flex items-center justify-between">
                <div className="mr-1">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div> */}
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between truncate text-xl font-semibold hover:text-primary-500">
            <TypewriterComponent
              options={{
                strings: ellipsisText(title, 35),
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden rounded-xl font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-opacity-10 sm:block sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
