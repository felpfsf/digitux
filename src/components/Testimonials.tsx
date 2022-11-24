import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SwiperButton } from './Swiper/SwiperButton'

import { TestimonialCard } from './Cards/TestimonialCard'

import data from '../data/dataMockup.json'

export function Tesimonials() {
  return (
    <section className='w-full mt-32 px-4'>
      <h2 className='xl:text-[22px] font-semibold'>Testimonial</h2>
      <h1 className='mt-4 text-[22px] xl:text-[34px] font-bold max-w-[730px]'>
        You still hesitate about working with Us ? Check what They say about Us
      </h1>
      {/* To-do: testimonial slider */}
      <div className='hidden md:block'>
        <Swiper slidesPerView={2}>
          {data.testimonials.map(props => (
            <SwiperSlide key={props.id} className='flex justify-center'>
              {<TestimonialCard {...props} />}
            </SwiperSlide>
          ))}
          <SwiperButton />
        </Swiper>
      </div>
      <div className='md:hidden'>
        <Swiper>
          {data.testimonials.map(props => (
            <SwiperSlide key={props.id} className='flex justify-center gap-9'>
              <TestimonialCard {...props} />
            </SwiperSlide>
          ))}
          <SwiperButton />
        </Swiper>
      </div>
    </section>
  )
}
