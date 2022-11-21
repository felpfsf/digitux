import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import teamMemberJamila from '../assets/team-member-jamila.png'
import tikTik from '../assets/Titik-titik.png'

export function TeamSection() {
  return (
    <section className='w-full mt-32 px-4 flex flex-col lg:flex-row items-center lg:justify-between xl:gap-48'>
      <div className='max-w-[540px] xl:mb-20'>
        <h2 className='xl:text-[22px] font-bold leading-relaxed'>
          The Team behind DigitUX
        </h2>
        <h1 className='mt-4 text-[22px] xl:text-[34px] font-bold'>
          A team of creative Who Excited to help you with your Idea
        </h1>
        <p className='mt-6 text-lg text-white/80'>
          Our team of digital product creators and Tch Bring Skilled will take
          your idea to the next level and help you with your product
        </p>
      </div>
      <div className='relative max-w-[350px] mt-7 xl:mr-20 flex flex-col justify-center gap-4'>
        <Image
          className='z-[9]'
          src={teamMemberJamila}
          alt={
            'A white woaman with auburn hair using a notebook computer looking to you'
          }
        />
        <Image
          className='absolute -top-6 -right-24 hidden xl:block'
          src={tikTik}
          alt={''}
        />
        <div>
          <h2>Jamila Smail</h2>
          <p>Co-Founder</p>
        </div>
        <div className='mt-6 self-center xl:self-end flex gap-12'>
          <span className='w-12 h-12 rounded-full bg-digitux-primary flex items-center justify-center'>
            <FiArrowLeft size={20} />
          </span>
          <span className='w-12 h-12 rounded-full bg-digitux-primary flex items-center justify-center'>
            <FiArrowRight size={20} />
          </span>
        </div>
      </div>
    </section>
  )
}
