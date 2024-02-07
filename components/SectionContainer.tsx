'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { PageTransition } from 'next-page-transitions'

interface Props {
  children: ReactNode
}

const transitionStyles = {
  enter: {
    opacity: 0,
  },
  enterActive: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function SectionContainer({ children }: Props) {
  return (
    <PageTransition
      timeout={500}
      classNames="page-transition"
      monkeyPatchScrolling
      loadingDelay={500}
      loadingTimeout={{
        enter: 500,
        exit: 0,
      }}
      loadingClassNames="loading-indicator"
    >
      <motion.div initial="enter" animate="enterActive" exit="exit" variants={transitionStyles}>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          {children}
        </section>
      </motion.div>
    </PageTransition>
  )
}
