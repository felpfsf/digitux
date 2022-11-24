import { FiChevronRight } from 'react-icons/fi'

export function ContactHero() {
  return (
    <section className='max-w-3xl w-full mx-auto pt-28 px-4 flex flex-col xl:items-center'>
      <h2 className='font-bold'>Let&apos;s Have a chat</h2>
      <h1 className='text-[40px] font-bold xl:leading-[70px]'>
        An expert at your services
      </h1>
      {/* form */}
      <form className='max-w-xl w-full flex flex-col'>
        <div className='mt-4 flex flex-col gap-2'>
          <label>Your name</label>
          <input
            type='text'
            placeholder='Your Full Name'
            className='py-2 px-4 rounded bg-white/20 border border-[#767676] placeholder:text-digitux-greySoft'
          />
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <label>Your email</label>
          <input
            type='email'
            placeholder='Your email'
            className='py-2 px-4 rounded bg-white/20 border border-[#767676] placeholder:text-digitux-greySoft'
          />
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <label>Your Phone Number </label>
          <input
            type='text'
            placeholder='Your Phone Number '
            className='py-2 px-4 rounded bg-white/20 border border-[#767676] placeholder:text-digitux-greySoft'
          />
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <label>Message:</label>
          <textarea
            cols={30}
            rows={10}
            placeholder='About What do you want to Talk?'
            className='py-2 px-4 rounded bg-white/20 border border-[#767676] placeholder:text-digitux-greySoft'></textarea>
        </div>
        <button className='mt-8 py-5 px-12 bg-digitux-primary self-center flex items-center'>
          Send the Message <FiChevronRight size={14} />
        </button>
      </form>
    </section>
  )
}
