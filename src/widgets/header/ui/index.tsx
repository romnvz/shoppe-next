'use client'

import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { useHeaderStore } from '../model'

export const Header = () => {
  const { isOpen } = useHeaderStore()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <header>
      <div
        className={
          'container mx-auto max-w-7xl p-5 flex flex-col gap-6 md:after:border-b'
        }>
        <div className="flex justify-between items-center">
          <Logo />
          <Nav />
        </div>
      </div>
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
    </header>
  )
}
