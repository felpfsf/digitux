import { motion } from 'framer-motion'
import { AboutHero } from '../../components/About/AboutHero'
import { AboutTeam } from '../../components/About/AboutTeam'
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
    </motion.section>
  )
}
