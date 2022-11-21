import { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
