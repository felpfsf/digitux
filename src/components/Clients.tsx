import Image from 'next/image'

import logoMicrosoft from '../assets/client_microsoft.png'
import logoGoogle from '../assets/client_google.png'
import logoSpotify from '../assets/client_spotify.png'
import logoTesla from '../assets/client_tesla.png'
import logoYassir from '../assets/client_yassir.png'
import logoTikTok from '../assets/client_tiktok.png'

export function Clients() {
  return (
    <section className='w-full mt-32 px-4'>
      <h1 className='text-2xl font-bold'>Client We helped</h1>
      <div className='mt-7 xl:mt-12 overflow-x-auto scrollbar-hide flex items-center xl:justify-evenly gap-12'>
        <Image
          src={logoMicrosoft}
          alt={'microsoft company logo'}
          className='w-32 h-7 xl:h-8 xl:w-auto'
        />
        <Image
          src={logoGoogle}
          alt={'Google company logo'}
          className='w-32 h-7 xl:h-10'
        />
        <Image
          src={logoSpotify}
          alt={'Spotify company logo'}
          className='w-32 h-7 xl:h-10 xl:w-auto'
        />
        <Image
          src={logoTesla}
          alt={'Tesla company logo'}
          className='w-32 h-7 xl:h-10'
        />
        <Image
          src={logoYassir}
          alt={'Yassir company logo'}
          className='w-32 h-7 xl:h-10'
        />
        <Image
          src={logoTikTok}
          alt={'TikTok company logo'}
          className='w-32 h-7 xl:h-12'
        />
      </div>
    </section>
  )
}
