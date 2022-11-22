import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi'

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOpenNavMenu = () => {
    setIsNavOpen(prev => !prev)
  }

  const menuOptions = [
    { id: 1, label: 'Home', navUrl: '/' },
    { id: 2, label: 'Who are We ?', navUrl: '/about' },
    { id: 3, label: 'Our Services', navUrl: '/services' },
    { id: 4, label: 'Our Projects', navUrl: '/projects' },
    { id: 5, label: 'Contact', navUrl: '/contact' }
  ]

  const { asPath } = useRouter()

  return (
    <header className='fixed z-10 w-full mx-auto py-2 px-4 lg:px-16 bg-digitux-dark/70 backdrop-blur-[80px] flex items-center justify-between lg:justify-around'>
      <h1 className='text-2xl font-semibold'>DigitUX</h1>

      {isNavOpen ? (
        <HiOutlineX
          onClick={handleOpenNavMenu}
          size={32}
          className='lg:hidden z-10 cursor-pointer'
        />
      ) : (
        <HiMenuAlt1
          onClick={handleOpenNavMenu}
          size={32}
          className='lg:hidden z-10 cursor-pointer rotate-180'
        />
      )}

      {/* Mobile */}
      <nav
        className={
          isNavOpen
            ? 'fixed top-0 right-0 w-4/5 h-screen text-center pt-28 bg-digitux-dark/95 backdrop-blur-[80px] ease-in-out duration-300'
            : 'fixed top-0 -right-full w-4/5 h-screen text-center pt-28 bg-digitux-dark/95 backdrop-blur-[80px] ease-in-out duration-300'
        }>
        <ul>
          {menuOptions.map(({ id, label, navUrl }) => (
            <li key={id} className='pb-8'>
              <Link href={navUrl} onClick={handleOpenNavMenu}>
                <span
                  className={
                    asPath === navUrl
                      ? 'text-white font-bold border-b-2'
                      : 'text-white/60 hover:text-white hover:border-b-2'
                  }>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Desktop */}
      <nav className='hidden lg:flex'>
        <ul className='flex gap-6'>
          {menuOptions.map(({ id, label, navUrl }) => (
            <li key={id}>
              <Link href={navUrl}>
                <span
                  className={
                    asPath === navUrl
                      ? 'text-white font-bold border-b-2'
                      : 'text-white/60 hover:text-white hover:border-b-2'
                  }>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
