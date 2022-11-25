import { AccordionItem } from './AccordionItem'

export function Accordion() {
  const faq = [
    {
      id: 1,
      question: 'Do You offer Software Development',
      answer:
        'Yes, we develop web applications, websites and integrated systems for any type of business'
    },
    {
      id: 2,
      question: 'Do you offer Social Media Marketing',
      answer:
        'Yes, we do offer Social Media marketing, we offer fb ads instgram ads, google campaign, tiktok promotion, and other social media platform'
    },
    {
      id: 3,
      question: 'Do you Offer pack Services',
      answer:
        'Everything is negotiable, we can manage your brand, your social networks and even develop your system or website.'
    },
    {
      id: 4,
      question: 'How long it take to realise a project',
      answer:
        'Take as long as necessary. Our team is skilled and we understand that you want a product as soon as possible, but to develop a quality product takes time.'
    }
  ]
  return (
    <>
      <ul>
        {faq.map(props => (
          <AccordionItem key={props.id} {...props} />
        ))}
      </ul>
    </>
  )
}
