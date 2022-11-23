import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SwiperButton } from './SwiperButton'

import { TeamMemberCard } from './TeamMemberCard'

import data from '../data/dataMockup.json'

export function AboutTeam() {
  return (
    <section className='w-full mt-32 px-4 xl:flex items-center'>
      <div className='flex flex-col mx-auto gap-4 max-w-[350px]'>
        <h2 className='text-[22px] font-bold'>The team</h2>
        <h1 className='text-4xl xl:text-[40px] font-bold leading-[60px] sm:text-center xl:text-left'>
          Meet The Awesome and Creative members of Our Team
        </h1>
      </div>

      <Swiper slidesPerView={2} className='mt-20'>
        {data.teamMembers.map(props => (
          <SwiperSlide key={props.id} className='ml-2'>
            <TeamMemberCard {...props} />
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </section>
  )
}
