import Image from 'next/image'

import tikTik from '../assets/Titik-titik.png'

interface ITeamMemberCardProps {
  imgUrl: string
  imgAlt: string
  name: string
  position: string
}

export const TeamMemberCard = ({
  imgAlt,
  imgUrl,
  name,
  position
}: ITeamMemberCardProps) => {
  return (
    <>
      <div className='relative max-w-[350px] mt-7 xl:mr-20 flex flex-col justify-center gap-4'>
        <Image
          className='z-[9] w-[350px] h-[353px] object-cover'
          src={`/${imgUrl}`}
          alt={imgAlt}
          width={350}
          height={353}
          quality={100}
        />
        <Image
          className='absolute -top-6 -right-24 hidden md:block'
          src={tikTik}
          alt={''}
        />
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg xl:text-[22px] font-bold'>{name}</h2>
          <p className='xl:text-lg text-white/80'>{position}</p>
        </div>
      </div>
    </>
  )
}
