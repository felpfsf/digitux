import Link from 'next/link'

import { motion } from 'framer-motion'
import { AboutTeam } from '../../components/AboutTeam'
import { AboutHero } from '../../components/AboutHero'
import { Tesimonials } from '../../components/Testimonials'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <AboutHero />
      <AboutTeam />
      <Tesimonials />
      {/* <h1 className='text-8xl font-extrabold'>About</h1>
      <h2 className='text-4xl my-4'>Quem somos</h2>
      <p className='text-2xl'>Este é um teste de rotas</p>
      <Link
        className='text-2xl underline underline-offset-4 text-purple-500'
        href='/'>
        Retornar
      </Link> */}
    </motion.section>
  )
}
