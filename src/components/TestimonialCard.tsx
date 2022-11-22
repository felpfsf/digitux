import Image from 'next/image'

interface ITestimonialCardProps {
  id: number
  testimonial: string
  picUrl: string
  name: string
  role: string
}

export function TestimonialCard({
  testimonial,
  picUrl,
  name,
  role
}: ITestimonialCardProps) {
  return (
    <>
      <div className='mt-14 flex flex-col gap-8'>
        <p className='text-white/60'>{testimonial}</p>
        <div className='flex items-center gap-2'>
          <Image src={`/${picUrl}`} alt='' width={69} height={69} />
          <div>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p className='text-white/80'>{role}</p>
          </div>
        </div>
      </div>
    </>
  )
}
