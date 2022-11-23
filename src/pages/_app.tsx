import { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DigitUX</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}