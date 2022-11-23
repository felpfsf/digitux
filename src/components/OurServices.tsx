import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SwiperButton } from './SwiperButton'

import servImg from '../assets/services-01.jpg'
import tikTik from '../assets/Titik-titik.png'

export function OurServices() {
  return (
    <section className='w-full mt-40 px-4'>
      <h2 className='xl:text-[22px] font-semibold'>Our Services</h2>
      {/* swiper */}
      <Swiper>
        {/* Card #1 */}
        <SwiperSlide>
          <div className='mt-4 flex flex-col items-center justify-center md:flex-row gap-11 xl:gap-36'>
            <div className='flex-1 max-w-[530px]'>
              <h2 className='text-[22px] xl:text-3xl font-bold'>
                Ui /Ux , Web Design
              </h2>
              <p className='mt-4 text-lg text-white/60 leading-relaxed'>
                With a team of the best Digital Product Designer In the world at
                your hand , their goal is to create usefull andeasy to use
                products for you potentials users
              </p>
            </div>
            <div className='relative h-[350px] w-[350px] mt-11 self-center'>
              <Image src={servImg} alt={''} className='w-full h-full' />
              <Image
                src={tikTik}
                alt={''}
                className='-z-10 absolute -top-6 -right-24 hidden xl:block'
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Card #2 */}
        <SwiperSlide>
          <div className='mt-4 flex flex-col items-center justify-center md:flex-row gap-11 xl:gap-36'>
            <div className='flex-1 max-w-[530px]'>
              <h2 className='text-[22px] xl:text-3xl font-bold'>
                Web/App Development
              </h2>
              <p className='mt-4 text-lg text-white/60 leading-relaxed'>
                With a team of the best Digital Product Designer In the world at
                your hand , their goal is to create usefull andeasy to use
                products for you potentials users
              </p>
            </div>
            <div className='relative h-[350px] w-[350px] mt-11 self-center'>
              <Image src={servImg} alt={''} className='w-full h-full' />
              <Image
                src={tikTik}
                alt={''}
                className='-z-10 absolute -top-6 -right-24 hidden xl:block'
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Card #3 */}
        <SwiperSlide>
          <div className='mt-4 flex flex-col items-center justify-center md:flex-row gap-11 xl:gap-36'>
            <div className='flex-1 max-w-[530px]'>
              <h2 className='text-[22px] xl:text-3xl font-bold'>
                Marketing Digital,Social Media
              </h2>
              <p className='mt-4 text-lg text-white/60 leading-relaxed'>
                With a team of the best Digital Product Designer In the world at
                your hand , their goal is to create usefull andeasy to use
                products for you potentials users
              </p>
            </div>
            <div className='relative h-[350px] w-[350px] mt-11 self-center'>
              <Image src={servImg} alt={''} className='w-full h-full' />
              <Image
                src={tikTik}
                alt={''}
                className='-z-10 absolute -top-6 -right-24 hidden xl:block'
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Card #4 */}
        <SwiperSlide>
          <div className='mt-4 flex flex-col items-center justify-center md:flex-row gap-11 xl:gap-36'>
            <div className='flex-1 max-w-[530px]'>
              <h2 className='text-[22px] xl:text-3xl font-bold'>
                Brand Stratgey &Art Diraction
              </h2>
              <p className='mt-4 text-lg text-white/60 leading-relaxed'>
                With a team of the best Digital Product Designer In the world at
                your hand , their goal is to create usefull andeasy to use
                products for you potentials users
              </p>
            </div>
            <div className='relative h-[350px] w-[350px] mt-11 self-center'>
              <Image src={servImg} alt={''} className='w-full h-full' />
              <Image
                src={tikTik}
                alt={''}
                className='-z-10 absolute -top-6 -right-24 hidden xl:block'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperButton />
      </Swiper>
    </section>
  )
}
