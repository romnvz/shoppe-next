'use client'

import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { useHeaderStore } from '../model'
import styles from './styles.module.scss'

export const Header = () => {
  const { isOpen } = useHeaderStore()

  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <div className={styles['row']}>
          <Logo />
          <Nav />
        </div>
      </div>
      {isOpen && <Menu />}
    </header>
  )
}
