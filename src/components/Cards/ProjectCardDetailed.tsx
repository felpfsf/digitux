import Link from 'next/link'

import Image, { StaticImageData } from 'next/image'

import { FiChevronRight } from 'react-icons/fi'

interface IProjectCardDetailedProps {
  id: number
  type: string
  title: string
  description: string
  imgUrl: StaticImageData
}

export const ProjectCardDetailed = ({
  description,
  id,
  imgUrl,
  title,
  type
}: IProjectCardDetailedProps) => {
  return (
    <>
      <div
        className={
          id % 2 === 1
            ? 'xl:last-of-type:h-full xl:last-of-type:overflow-visible lg:flex flex-row items-center gap-8'
            : 'xl:last-of-type:h-full xl:last-of-type:overflow-visible lg:flex flex-row-reverse items-center gap-8'
        }>
        <div className='max-w-[544px]'>
          <h2 className='xl:text-[22px] font-bold'>{type}</h2>

          <h1 className='mt-4 text-xl xl:text-[40px] font-bold leading-normal'>
            {title}
          </h1>

          <p className='mt-4 text-lg text-white/60'>{description}</p>
          <Link
            href={''}
            className='w-52 mt-12 py-4 border-2 rounded lg:flex items-center justify-center gap-2 hover:bg-white hover:text-black duration-300 ease-in-out hidden'>
            Check the project
            <FiChevronRight size={24} />
          </Link>
        </div>
        <div className='mt-12 max-h-[458px] xl:w-[543px] overflow-hidden'>
          <Image
            src={imgUrl}
            width={543}
            height={464}
            alt={''}
            className='w-full h-auto object-cover'
          />
        </div>
        <Link
          href={''}
          className='w-52 mt-12 py-4 border-2 rounded flex items-center justify-center gap-2 hover:bg-white hover:text-black duration-300 ease-in-out lg:hidden'>
          Check the project
          <FiChevronRight size={24} />
        </Link>
      </div>
    </>
  )
}
