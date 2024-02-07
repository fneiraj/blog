//import { Authors, allAuthors } from 'contentlayer/generated'
//import { MDXLayoutRenderer } from 'pliny/mdx-components'
//import AuthorLayout from '@/layouts/AuthorLayout'
//import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import BrandIcon from '@/components/BrandIcon'
import Projects from '@/components/Projects'

export const metadata = genPageMetadata({ title: 'About me' })

export default function Page() {
  //const author = allAuthors.find((p) => p.slug === 'default') as Authors
  //const mainContent = coreContent(author)

  return (
    <>
      <div className="  max-w-none lg:prose-lg">
        <h2 className="text-center font-extrabold">Backend developer</h2>
        <hr />
        <div>
          {/* <p className="font-mono text-lg font-semibold text-[#bd93f9]">
            `Springboot` `Nestjs` `Vue` `Serverless` `Python` `uni-app`
  </p>*/}
          <p>
            <b>Programming Languages:</b> Java & Javascript.
          </p>
          <p>
            <b>Frameworks & Tools:</b>
            <span className="ml-2 space-x-2">
              <i className="inline-block">
                <BrandIcon type="java" className="h-8 w-8" />
              </i>
              <i className="inline-block">
                <BrandIcon type="java" className="h-8 w-8" />
              </i>
              <i className="inline-block">
                <BrandIcon type="java" className="h-8 w-8" />
              </i>
              <i className="inline-block">
                <BrandIcon type="java" className="h-8 w-8" />
              </i>
              <i className="inline-block">
                {' '}
                <BrandIcon type="java" className="h-8 w-8" />
              </i>
            </span>
          </p>
        </div>

        <hr />

        <h2>Projects</h2>
        <Projects />
      </div>
    </>
  )
}
