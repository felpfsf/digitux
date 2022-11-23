import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export function AboutTeam() {
  return (
    <div className='w-full mt-32 px-4'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-[22px] font-bold'>The team</h2>
        <h1 className='text-4xl text-[40px] font-bold leading-[60px]'>
          Meet The Awesome and Creative members of Our Team{' '}
        </h1>
      </div>
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}
