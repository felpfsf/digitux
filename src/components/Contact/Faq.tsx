import { useRef, useState } from 'react'
import { Accordion } from '../AccordionFaq/Accordion'

export function Faq() {
  const [clicked, setClicked] = useState(false)

  const contentEl = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setClicked(prev => !prev)
  }

  return (
    <section className='w-full px-4 mt-32 mx-auto flex flex-col lg:flex-row items-center'>
      <div className='max-w-[480px] mx-auto'>
        <h2 className='text-[22px] font-bold'>FAQ</h2>
        <h1 className='text-[40px] font-bold leading-snug md:leading-relaxed'>
          Here are Some Answer For Frequntly asked Questions
        </h1>
        <p className='text-[22px] text-white/60 mt-10'>
          We got alot of Message with the same questions, so here are some fast
          answer for popular Question
        </p>
      </div>
      {/* Accordion */}
      <div className='max-w-[540px] w-full h-[492px] mt-20 mx-auto'>
        <Accordion />
      </div>
    </section>
  )
}
