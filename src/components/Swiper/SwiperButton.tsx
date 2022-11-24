import { useSwiper } from 'swiper/react'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const SwiperButtonPrev = () => {
  const swiper = useSwiper()

  return (
    <span
      className='w-12 h-12 rounded-full bg-digitux-primary flex items-center justify-center cursor-pointer'
      onClick={() => swiper.slidePrev()}>
      <FiArrowLeft size={20} />
    </span>
  )
}

const SwiperButtonNext = () => {
  const swiper = useSwiper()

  return (
    <span
      className='w-12 h-12 rounded-full bg-digitux-primary flex items-center justify-center cursor-pointer'
      onClick={() => swiper.slideNext()}>
      <FiArrowRight size={20} />
    </span>
  )
}

export const SwiperButton = () => {
  return (
    <div className='hidden mt-14 lg:flex justify-center gap-12'>
      <SwiperButtonPrev />
      <SwiperButtonNext />
    </div>
  )
}

export { SwiperButtonPrev, SwiperButtonNext }
