import { motion } from 'framer-motion'
import { ProjectsDetailed } from '../../components/Projects/ProjectsDetailed'
import { ProjectsHero } from '../../components/Projects/ProjectsHero'
import { Tesimonials } from '../../components/Testimonials'

export default function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <ProjectsHero />
      <ProjectsDetailed />
      <Tesimonials />
    </motion.main>
  )
}
