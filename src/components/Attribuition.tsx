import Link from 'next/link'

export function Attribuition() {
  return (
    <div className='max-w-[1440px] w-full mx-auto my-6 px-4'>
      <p className='text-sm font-light text-center'>
        DigitUX &copy; 2022 - Desenvolvido por{' '}
        <Link
          href='http://github.com/felpfsf'
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold underline underline-offset-4 hover:text-digitux-primary transition-all duration-300'>
          {' '}
          Felipe F
        </Link>
      </p>
    </div>
  )
}
