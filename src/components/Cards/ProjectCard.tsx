import Image from 'next/image'

interface IImageProps {
  imgUrl: string
  spec: string
  project: string
}

export const ProjectCard = ({ imgUrl, spec, project }: IImageProps) => {
  return (
    <div className='w-[350px] last:row-start-1 last:row-span-2 last:col-start-3 xl:last-of-type:h-full xl:last-of-type:overflow-visible'>
      <div className='h-[305px] xl:h-fit overflow-hidden'>
        <Image
          src={`/${imgUrl}`}
          width={350}
          height={659}
          alt={''}
          className='w-full'
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
