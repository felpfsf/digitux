import Image from 'next/image'

import arrow from '../../assets/arrow-02.png'

export function OurProcess() {
  const processCards = [
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
      <h2 className='text-[22px] font-bold'>Our Process</h2>
      <div className='flex flex-col md:flex-row items-start'>
        <h1 className='mt-4 text-4xl xl:text-[40px] leading-relaxed font-bold flex-1'>
          Our work process helps you get the best out of our team&apos;s ability
        </h1>
        <p className='mt-8 text-lg xl:text-[22px] text-white/60 leading-relaxed flex-1'>
          With Our team knowledge
          <br />
          We Choose the perfect process to suit the Development of your Product
        </p>
      </div>
      <div className='mt-16 xl:mt-40 flex flex-wrap sm:justify-center gap-14 relative'>
        <div className='hidden xl:block'>
          <Image src={arrow} alt={''} className='absolute -bottom-32 left-48' />
          <Image
            src={arrow}
            alt={''}
            className='absolute -top-32 left-1/3 rotate-180 -scale-x-[1]'
          />
          <Image
            src={arrow}
            alt={''}
            className='absolute -bottom-32 right-1/4'
          />
        </div>

        {/* Card */}
        {processCards.map(({ id, title, description }) => (
          <div key={id} className='sm:w-[250px]'>
            <h1 className='[&>span]:text-3xl text-[22px] [&>span]:font-bold font-semibold [&>span]:mr-4'>
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
