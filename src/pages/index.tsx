import { motion } from 'framer-motion'

import { Hero } from '../components/Hero'
import { Clients } from '../components/Clients'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <Hero />
      <Clients/>
    </motion.section>
  )
}
