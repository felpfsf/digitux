import Link from 'next/link'

export default function Home() {
  return (
    <div className='max-w-[1154px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <h1 className='text-8xl font-extrabold'>Home</h1>
      <h2 className='text-4xl my-4'>Teste de Next JS</h2>
      <Link
        className='text-2xl underline underline-offset-4 text-purple-500'
        href='/About'>
        About
      </Link>
    </div>
  )
}
