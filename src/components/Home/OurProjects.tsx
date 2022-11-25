import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import { ProjectCard } from '../Cards/ProjectCard'
import data from '../../data/dataMockup.json'

export function OurProjects() {
  return (
    <section className='w-full mt-32 px-4'>
      <h2 className='xl:text-[22px] font-bold leading-relaxed'>
        The work we realised
      </h2>
      <h1 className='mt-4 text-[22px] xl:text-[34px] font-bold leading-9 xl:leading-normal'>
        The work we did that made ours clients happy and satisfied
      </h1>
      <div className='mt-28 flex flex-wrap items-center justify-center gap-10 xl:gap-0 xl:grid grid-cols-3 last:cursor-pointer'>
        {data.projects.map(props => (
          <ProjectCard key={props.id} {...props} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Link
          href={'/projects'}
          className='w-60 mt-14 py-4 border-2 rounded flex items-center justify-center gap-2 hover:bg-white hover:text-black duration-300 ease-in-out'>
          Explore More Projects
          <FiChevronRight size={24} />
        </Link>
      </div>
    </section>
  )
}
