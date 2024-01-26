import Link from 'next/link'
import Image from 'next/image'

import { links } from './config'
import styles from './styles.module.scss'

export const Links = () => {
  return (
    <div className={styles['links']}>
      <ul className={styles['list']}>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <Image
              src={`/icons/social/${link.iconName}.svg`}
              width={18}
              height={18}
              alt={link.iconName}
            />
          </Link>
        ))}
      </ul>
    </div>
  )
}
