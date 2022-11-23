import { motion } from 'framer-motion'
import { OurProcess } from '../../components/OurProcess'
import { ServicesHero } from '../../components/ServicesHero'

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <ServicesHero />
      <OurProcess />
    </motion.section>
  )
}
