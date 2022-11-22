import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import teamMemberJamila from '../assets/team-member-jamila.png'
import tikTik from '../assets/Titik-titik.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
  SwiperButton,
  SwiperButtonNext,
  SwiperButtonPrev
} from './SwiperButton'

import { TeamMemberCard } from './TeamMemberCard'

import data from '../data/dataMockup.json'

export function TeamSection() {
  return (
    <section className='w-full mt-32 px-4 flex flex-wrap items-center lg:justify-between gap-7 xl:gap-48'>
      <div className='max-w-[540px] xl:mb-20 md:flex-1'>
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
      <Swiper className='flex-1'>
        {data.teamMembers.map(props => (
          <SwiperSlide key={props.id} className='flex justify-center gap-9'>
            <TeamMemberCard {...props} />
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </section>
  )
}
