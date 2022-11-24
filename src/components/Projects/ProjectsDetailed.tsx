import { ProjectCardDetailed } from '../Cards/ProjectCardDetailed'

import proj01 from '../../assets/project-01.png'
import proj02 from '../../assets/project-02.png'
import proj03 from '../../assets/project-03.png'
import proj04 from '../../assets/project-04.png'
import proj05 from '../../assets/project-05.png'

export function ProjectsDetailed() {
  const cards = [
    {
      id: 1,
      type: 'UI/UX Design',
      title: 'Delex Relay, a delivery platfrome',
      description:
        'Delex is a Delivery Platform for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too',
      imgUrl: proj01
    },
    {
      id: 2,
      type: 'Web / app Development',
      title: 'Cooke Me, Fresh food At your Home',
      description:
        'Cooke me is an platform that offer fresh meal with a cheap price and allow indivudial to sell their meals',
      imgUrl: proj02
    },
    {
      id: 3,
      type: 'UI/UX Design',
      title: 'Booking, Travel anywhere',
      description:
        'Booking is an platform that offer hotels at a quality and competitive price',
      imgUrl: proj03
    },
    {
      id: 4,
      type: 'UI/UX Design',
      title: 'Homely, Nice and good furniture for your Home',
      description:
        'Homely is an platform that offer couchs, futons, desks and most variable furniture for your home',
      imgUrl: proj04
    },
    {
      id: 5,
      type: 'UI/UX Design',
      title: 'ADOC, Your Online Medical Appoinments',
      description:
        'ADOC Is an online Medical appoinment that allow user to take an appoinment with a doctor, it alos work as a medical files holder',
      imgUrl: proj05
    }
  ]
  return (
    <section className='w-full mt-32 px-4'>
      <div className='flex flex-col items-center gap-20'>
        {cards.map(props => (
          <ProjectCardDetailed key={props.id} {...props} />
        ))}
      </div>
    </section>
  )
}
