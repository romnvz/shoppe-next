'use client'

import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export const Spinner = () => {
  return (
    <motion.div
      className={styles['spinner']}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}></motion.div>
  )
}
