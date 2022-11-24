import { AccordionItem } from './AccordionItem'

export function Accordion() {
  const faq = [
    {
      id: 1,
      question: 'Do You offer Software Development',
      answer:
        'Yes, we do offer Social Media marketing, we offer fb ads instgram ads, google campaign, tiktok promotion, and other social media platform'
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
        'Yes, we do offer Social Media marketing, we offer fb ads instgram ads, google campaign, tiktok promotion, and other social media platform'
    },
    {
      id: 4,
      question: 'How long it take to realise a project',
      answer:
        'Yes, we do offer Social Media marketing, we offer fb ads instgram ads, google campaign, tiktok promotion, and other social media platform'
    }
  ]
  return (
    <>
      <ul>
        {faq.map(props => (
          <AccordionItem key={props.id} {...props}/>
        ))}
      </ul>
    </>
  )
}
