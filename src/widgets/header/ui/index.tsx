'use client'

import { AnimatePresence } from 'framer-motion'
import classNames from 'classnames'

import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { useHeaderStore } from '../model'
import styles from './styles.module.scss'

export const Header = () => {
  const { isOpen } = useHeaderStore()

  return (
    <header className={styles['header']}>
      <div className={classNames('container', styles['container'])}>
        <Logo />
        <Nav />
      </div>
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
    </header>
  )
}
