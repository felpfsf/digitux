import Link from 'next/link'

import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <Hero />
    </motion.section>
  )
}
