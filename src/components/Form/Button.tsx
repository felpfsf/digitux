import { FiChevronRight } from 'react-icons/fi'

interface IButtonProps {
  buttonText: string
}

export const ButtonForm = ({ buttonText }: IButtonProps) => {
  return (
    <button className='mt-8 py-5 px-12 bg-digitux-primary rounded self-center flex items-center gap-3'>
      {buttonText}
      <FiChevronRight size={22} />
    </button>
  )
}
