import Link from 'next/link'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'

export function ProjectsHero() {
  const stats = [
    { id: 1, title: 'Happy Clients', number: '150' },
    { id: 2, title: 'Project Done', number: '450' },
    { id: 3, title: 'Solutions Created', number: '10' },
    { id: 4, title: 'Bussiness Growed', number: '25' }
  ]
  return (
    <section className='max-w-3xl w-full mx-auto pt-28 px-4 sm:flex flex-col items-center justify-center'>
      <h2 className='xl:text-[22px] font-bold'>Our Projects</h2>
      <h1 className='mt-4 text-4xl xl:text-[40px] leading-relaxed font-bold sm:text-center'>
        Project We Realised
      </h1>
      <p className='mt-8 text-lg xl:text-[22px] text-white/60 sm:text-center leading-relaxed'>
        Our team helped alot of startup and company to realise their Products
        and helped thousnd of client to grow their business
      </p>
      <div className='flex flex-col md:flex-col-reverse items-center'>
        <div className='w-full sm:w-3/4 mt-11 flex flex-col items-center justify-center gap-8'>
          <Link
            href={'/contact'}
            className='w-full sm:w-1/2 text-sm font-semibold py-4 bg-digitux-primary rounded flex items-center justify-center gap-2 hover:filter hover:contrast-200 transition-color ease-in-out duration-300'>
            Let&apos;s Talk
            <FiMessageSquare size={24} />
          </Link>
          <Link
            href={''}
            className='xl:hidden text-lg sm:text-[22px] flex items-center gap-2 hover:underline underline-offset-8'>
            Check our Project
            <FiArrowRight />
          </Link>
        </div>
        <div className='mt-24 md:mt-11 grid grid-cols-2 sm:grid-flow-col gap-12 sm:gap-[70px]'>
          {stats.map(({ id, title, number }) => (
            <div key={id}>
              <h2 className='font-semibold'>{title}</h2>
              <h1 className='mt-2 text-4xl font-bold'>
                <span>+</span>
                {number}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
