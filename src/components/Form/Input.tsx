import { IFormInputProps } from "./form-interface"

export const Input = ({ label, name, placeholder, type, required }: IFormInputProps) => {
  return (
    <>
      <div className='mt-4 flex flex-col gap-2'>
        <label>{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className='py-2 px-4 rounded bg-white/20 border border-[#767676] placeholder:text-digitux-greySoft'
        />
      </div>
    </>
  )
}
