import { motion } from 'framer-motion'
import { OurProcess } from '../../components/OurServices/OurProcess'
import { OurServices } from '../../components/OurServices/OurServices'
import { ServicesHero } from '../../components/OurServices/ServicesHero'
import { Tesimonials } from '../../components/Testimonials'

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <ServicesHero />
      <OurProcess />
      <OurServices />
      <Tesimonials />
    </motion.section>
  )
}
