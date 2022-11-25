import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SwiperButton } from '../Swiper/SwiperButton'

import { ServiceCardDetailed } from '../Cards/ServiceCardDetailed'

import servImg from '../../assets/services-01.jpg'

export function OurServices() {
  const dataServices = [
    {
      id: 1,
      title: 'UI/UX and Web Design',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
    {
      id: 2,
      title: 'Web/App Development',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
    {
      id: 3,
      title: 'Marketing Digital, Social Media',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
    {
      id: 4,
      title: 'Brand Strategy & Art Direction',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
    {
      id: 5,
      title: 'Visual Identity Logo Brand',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
    {
      id: 6,
      title: 'Video / Ads Production',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
  ]
  return (
    <section className='w-full mt-40 px-4'>
      <h2 className='xl:text-[22px] font-semibold'>Our Services</h2>
      <Swiper>
        {dataServices.map(props => (
          <SwiperSlide key={props.id}>
            <ServiceCardDetailed {...props} />
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </section>
  )
}
