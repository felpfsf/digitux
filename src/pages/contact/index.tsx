import { motion } from 'framer-motion'
import { ContactHero } from '../../components/Contact/ContactHero'
import { Faq } from '../../components/Contact/Faq'
import { OurServices } from '../../components/OurServices/OurServices'

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <ContactHero />
      <Faq />
      <OurServices />
    </motion.main>
  )
}
