import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButton'

import { TestimonialCard } from './TestimonialCard'

import data from '../data/dataMockup.json'

export function Tesimonials() {
  return (
    <section className='w-full mt-32 px-4'>
      <h2 className='xl:text-[22px] font-semibold'>Testimonial</h2>
      <h1 className='mt-4 text-[22px] xl:text-[34px] font-bold max-w-[730px]'>
        You still hesitate about working with Us ? Check what They say about Us
      </h1>
      {/* To-do: testimonial slider */}
      <Swiper>
        {data.testimonials.map(props => (
          <SwiperSlide key={props.id}>
            {<TestimonialCard {...props} />}
          </SwiperSlide>
        ))}
        <div className='mt-14 flex justify-center gap-12'>
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </Swiper>
    </section>
  )
}
