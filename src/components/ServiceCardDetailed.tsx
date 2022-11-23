import Image, { StaticImageData } from 'next/image'
import tikTik from '../assets/Titik-titik.png'

interface IServiceCardDetailedProps {
  title: string
  description: string
  imgUrl: StaticImageData
}

export function ServiceCardDetailed({
  description,
  imgUrl,
  title
}: IServiceCardDetailedProps) {
  return (
    <>
      <div className='mt-4 flex flex-col items-center justify-center md:flex-row gap-11 xl:gap-36'>
        <div className='flex-1 max-w-[530px]'>
          <h2 className='text-[22px] xl:text-3xl font-bold'>{title}</h2>
          <p className='mt-4 text-lg text-white/60 leading-relaxed'>
            {description}
          </p>
        </div>
        <div className='relative h-[350px] w-[350px] mt-11 self-center'>
          <Image src={imgUrl} alt={''} className='w-full h-full' />
          <Image
            src={tikTik}
            alt={''}
            className='-z-10 absolute -top-6 -right-24 hidden xl:block'
          />
        </div>
      </div>
    </>
  )
}
