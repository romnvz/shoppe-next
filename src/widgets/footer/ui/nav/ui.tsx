import Link from 'next/link'
import styles from './styles.module.scss'
import { paths } from './config'

export const Nav = () => {
  return (
    <div className={styles['nav']}>
      <ul className={styles['list']}>
        {paths.map((path) => (
          <li className={styles['item']} key={path.href}>
            <Link className={styles['link']} href={path.href}>
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
