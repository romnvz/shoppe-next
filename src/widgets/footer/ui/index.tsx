'use client'

import toast from 'react-hot-toast'

import { Form } from './form'
import { Links } from './links'
import { Nav } from './nav'
import styles from './styles.module.scss'
import classNames from 'classnames'

export const Footer = () => {
  toast.success('Ваш email подписан на новости и уведомления', {
    duration: 2000,
  })

  return (
    <footer className={styles['footer']}>
      <div className={classNames('container', styles['container'])}>
        <div className={styles['row']}>
          <Nav />
          <Form />
        </div>
        <div className={styles['row']}>
          <div className={styles['copyright']}>&copy; 2024 Shoppe</div>
          <Links />
        </div>
      </div>
    </footer>
  )
}
