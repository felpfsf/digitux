import Link from 'next/link'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'

export function ServicesHero() {
  return (
    <section className='max-w-3xl w-full mx-auto pt-28 px-4 sm:flex flex-col items-center justify-center'>
      <h2 className='xl:text-[22px] font-bold'>Our Services</h2>
      <h1 className='mt-4 text-4xl xl:text-[40px] font-bold sm:text-center'>
        Services We Offres
      </h1>
      <p className='mt-8 text-lg xl:text-[22px] text-white/60 sm:text-center leading-relaxed'>
        With Our Awesome team we offres a variaty of services from UI/UX design
        to Video Productions,Our Goal is to help you on your Road to Create your
        product
      </p>
      <div className='w-full sm:w-3/4 mt-11 flex flex-col sm:flex-row items-center justify-center gap-8'>
        <Link
          href={'/contact'}
          className='w-full text-sm font-semibold py-4 bg-digitux-primary rounded flex flex-1 items-center justify-center gap-2 hover:filter hover:contrast-200 transition-color ease-in-out duration-300'>
          Let&apos;s Talk
          <FiMessageSquare size={24} />
        </Link>
        <Link
          href={'/projects'}
          className='text-lg sm:text-[22px] flex flex-grow items-center gap-2 hover:underline underline-offset-8'>
          Check our Projects
          <FiArrowRight />
        </Link>
      </div>
    </section>
  )
}
