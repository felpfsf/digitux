import { useRef, useState } from 'react'

import { FiMinus, FiPlus } from 'react-icons/fi'

interface IAccordionProps {
  question: string
  answer: string
}

export function AccordionItem({ answer, question }: IAccordionProps) {
  const [isAcdOpen, setIsAcdOpen] = useState(false)

  const answDiv = useRef<HTMLDivElement>(null)

  const handleToggleAccordion = () => {
    setIsAcdOpen(prev => !prev)
  }

  return (
    <li className='mt-9 border rounded'>
      <button
        className='w-full font-medium py-4 px-6 flex items-center justify-between'
        onClick={handleToggleAccordion}>
        {question}
        <span className=''>{isAcdOpen ? <FiMinus /> : <FiPlus />}</span>
      </button>
      <div
        ref={answDiv}
        className='px-6 overflow-hidden transition-all ease-in-out duration-300'
        style={
          isAcdOpen
            ? { height: answDiv.current?.scrollHeight }
            : { height: '0px' }
        }>
        <div className='pb-4'>{answer}</div>
      </div>
    </li>
  )
}
