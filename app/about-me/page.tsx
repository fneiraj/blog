import { genPageMetadata } from 'app/seo'
import Projects from '@/components/projects/Projects'
import BrandIcon from '@/components/brand-icons'

export const metadata = genPageMetadata({ title: 'About me' })

export default function Page() {
  return (
    <>
      <div className=" prose max-w-none text-gray-900  lg:prose-lg dark:text-gray-100">
        <h2 className="text-center font-extrabold  text-gray-900 dark:text-gray-100">
          Backend Developer
        </h2>
        <hr />
        <div>
          <p className="font-mono text-lg font-semibold text-[#bd93f9]">
            `Java` `Springboot` `Javascript` `Nodejs` `Nestjs`
          </p>
          <p>
            <b>Lenguajes:</b> Java, JavaScript & Typescript.
          </p>
          <p>
            <b>Frameworks y Herramientas:</b>
            <span className="ml-2 space-x-2">
              <i className="inline-block">
                <BrandIcon type="React" className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <BrandIcon type="Java" className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <BrandIcon type="Bash" className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <BrandIcon type="Javascript" className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <BrandIcon type="Java" className="h-6 w-6" />
              </i>
            </span>
          </p>
        </div>

        <hr />

        <h2 className=" text-gray-900 dark:text-gray-100">Proyectos</h2>
        <Projects />
      </div>
    </>
  )
}
