import Image from 'next/image'
import { Form } from '../Form/FormLayout'

import line from '../../assets/traced-line.png'

export function ContactHero() {
  return (
    <section className='max-w-3xl w-full mx-auto pt-28 px-4 flex flex-col xl:items-center'>
      <h2 className='font-bold'>Let&apos;s Have a chat</h2>
      <h1 className='text-[40px] font-bold xl:leading-[70px]'>
        An expert at your services
      </h1>
      {/* form */}
      <div className='relative z-10 w-full h-screen bg-digitux-dark'>
        <Form />
      </div>
      <Image
        src={line}
        alt={''}
        className='absolute z-[9] top-1/4 w-full hidden xl:block'
      />
    </section>
  )
}
