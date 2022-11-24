import { IFormInputProps } from './form-interface'

export const Textarea = ({ label, name, placeholder }: IFormInputProps) => {
  return (
    <div className='mt-4 flex flex-col gap-2'>
      <label>{label}</label>
      <textarea
        name={name}
        cols={30}
        rows={10}
        placeholder={placeholder}
        className='py-2 px-4 rounded bg-white/20 border border-[#767676] placeholder:text-digitux-greySoft'></textarea>
    </div>
  )
}
