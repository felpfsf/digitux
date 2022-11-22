import { useSwiper } from 'swiper/react'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'


const SwiperButtonPrev = () => {
  const swiper = useSwiper()

  return (
    <span
      className='w-12 h-12 rounded-full bg-digitux-primary flex items-center justify-center'
      onClick={() => swiper.slidePrev()}>
      <FiArrowLeft size={20} />
    </span>
  )
}

const SwiperButtonNext = () => {
  const swiper = useSwiper()

  return (
    <span
      className='w-12 h-12 rounded-full bg-digitux-primary flex items-center justify-center'
      onClick={() => swiper.slideNext()}>
      <FiArrowRight size={20} />
    </span>
  )
}

export { SwiperButtonNext, SwiperButtonPrev }
