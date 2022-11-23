import Image from 'next/image'

import arrow from '../assets/arrow-02.png'

export function OurProcess() {
  const cards = [
    {
      id: 1,
      title: 'User Research',
      description:
        'User research helps us find out exactly how our target customers feel when interacting with a product'
    },
    {
      id: 2,
      title: 'Design',
      description:
        'User research helps us find out exactly how our target customers feel when interacting with a product'
    },
    {
      id: 3,
      title: 'Test',
      description:
        'User research helps us find out exactly how our target customers feel when interacting with a product'
    },
    {
      id: 4,
      title: 'Implementation',
      description:
        'User research helps us find out exactly how our target customers feel when interacting with a product'
    }
  ]
  return (
    <section className='w-full mt-44 px-4'>
      <h2 className='xl:text-[22px] font-bold'>Our Process</h2>
      <h1 className='mt-4 text-4xl xl:text-[40px] leading-relaxed font-bold sm:text-center'>
        Our Working Process help you to get the best from our team skill
      </h1>
      <p className='mt-8 text-lg xl:text-[22px] text-white/60 sm:text-center leading-relaxed'>
        With Our team knowloadg of different process
        <br />
        We Choose the perfect process to suit the Development of your Product
      </p>
      <div className='mt-16 xl:mt-40 flex flex-wrap sm:justify-center gap-14 relative'>
        <Image
          src={arrow}
          alt={''}
          className='absolute -bottom-32 left-48 hidden xl:block'
        />
        <Image
          src={arrow}
          alt={''}
          className='absolute -top-32 left-1/3 rotate-180 -scale-x-[1] hidden xl:block'
        />
        <Image
          src={arrow}
          alt={''}
          className='absolute -bottom-32 right-1/4 hidden xl:block'
        />
        {/* Card */}
        {cards.map(({ id, title, description }) => (
          <div key={id} className='sm:w-[250px]'>
            <h1 className='[&>span]:text-3xl text-[22px] [&>span]:mr-4'>
              <span>{`0${id}`}</span>
              {title}
            </h1>
            <p className='text-white/60 mt-3'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
