import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'
import { accountPaths, basePaths } from './config'

export const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
      }}
      className={styles['menu']}>
      <div className={styles['container']}>
        <ul className={styles['list']}>
          {basePaths.map((path) => (
            <li className={styles['item']} key={path.href}>
              <Link className={styles['link']} href={path.href}>
                {path.text}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <ul className={styles['list']}>
          {accountPaths.map((path) => (
            <li className={styles['item']} key={path.href}>
              <Link className={styles['link']} href={path.href}>
                <Image
                  src={`/icons/${path.iconName}.svg`}
                  width={19}
                  height={19}
                  alt={'Shopping cart link'}
                />
                {path.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
