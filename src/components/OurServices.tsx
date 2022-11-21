import Link from 'next/link'

import data from '../data/dataMockup.json'

import { FiChevronRight } from 'react-icons/fi'

export function OurServices() {
  return (
    <section className='w-full mt-32 px-4'>
      <h2 className='xl:text-[22px] font-semibold leading-relaxed'>
        The Services we offer
      </h2>
      <div className='flex flex-wrap sm:items-center sm:justify-center xl:grid grid-cols-4 grid-rows-2 gap-10'>
        <h1 className='mt-4 text-[22px] xl:text-[40px] font-bold leading-9 xl:leading-normal col-span-2'>
          We offer a variaty of services to help you to grow and build your
          brand and help you with developing your Products
        </h1>

        {data.services.map(({ id, title, description }) => (
          <div key={id} className='w-[240px] mt-12 flex flex-col gap-[14px]'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-white/80'>{description}</p>
            <Link
              href={'/services'}
              className='w-40 py-4 border-2 rounded flex items-center justify-center gap-2 hover:bg-white hover:text-black duration-300 ease-in-out'>
              Learn More
              <FiChevronRight size={24} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
