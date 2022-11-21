import Image from 'next/image'

import proj01 from '../assets/project-01.png'
import proj02 from '../assets/project-02.png'
import proj03 from '../assets/project-03.png'
import proj04 from '../assets/project-04.png'
import proj05 from '../assets/project-05.png'

export function OurProjects() {
  return (
    <section className='w-full mt-32 px-4'>
      <h2 className='xl:text-[22px] font-bold leading-relaxed'>
        The work we realised
      </h2>
      <h1 className='mt-4 text-[22px] xl:text-[34px] font-bold leading-9 xl:leading-normal'>
        The work we did that made our Client happy and satisfied
      </h1>
      <div className='mt-28 flex flex-wrap items-center justify-center gap-10 xl:gap-0 xl:grid grid-cols-3'>
        {/* card 1 */}
        <div className='max-w-[350px]'>
          <div>
            <Image src={proj01} alt={''} className='w-full h-full' />
          </div>
          <div className='mt-2'>
            <p>
              <strong>UI/UX</strong>
            </p>
            <p>Delex Relay</p>
          </div>
        </div>
        {/* card 2 */}
        <div className='max-w-[350px]'>
          <div>
            <Image src={proj02} alt={''} className='w-full h-full' />
          </div>
          <div className='mt-2'>
            <p>
              <strong>UI/UX</strong>
            </p>
            <p>Delex Relay</p>
          </div>
        </div>
        {/* card 3 */}
        <div className='max-w-[350px]'>
          <div>
            <Image src={proj03} alt={''} className='w-full h-full' />
          </div>
          <div className='mt-2'>
            <p>
              <strong>UI/UX</strong>
            </p>
            <p>Delex Relay</p>
          </div>
        </div>
        {/* card 4 */}
        <div className='max-w-[350px]'>
          <div>
            <Image src={proj04} alt={''} className='w-full h-full' />
          </div>
          <div className='mt-2'>
            <p>
              <strong>UI/UX</strong>
            </p>
            <p>Delex Relay</p>
          </div>
        </div>
        {/* card 5 */}
        <div className='max-w-[350px] row-start-1 row-span-2 col-start-3'>
          <div className='h-[305px] xl:h-full overflow-hidden'>
            <Image src={proj05} alt={''} className='w-full' />
          </div>
          <div className='mt-2'>
            <p>
              <strong>UI/UX</strong>
            </p>
            <p>Delex Relay</p>
          </div>
        </div>
      </div>
    </section>
  )
}
