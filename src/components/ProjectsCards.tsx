import Image from 'next/image'

interface IImageProps {
  imgUrl: string
  spec: string
  project: string
}

export const ProjectsCards = ({ imgUrl, spec, project }: IImageProps) => {
  return (
    <div className='w-[350px] last:row-start-1 last:row-span-2 last:col-start-3'>
      <div className='last:h-[305px] last:xl:h-full last:overflow-hidden'>
        <Image
          src={`/${imgUrl}`}
          width={350}
          height={659}
          alt={''}
          className='w-full h-full last:h-auto'
        />
      </div>
      <div className='mt-2'>
        <p>
          <strong>{spec}</strong>
        </p>
        <p className='text-sm text-white/80'>{project}</p>
      </div>
    </div>
  )
}
