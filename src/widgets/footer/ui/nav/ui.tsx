import Link from 'next/link'
import { paths } from './config'

export const Nav = () => {
  return (
    <ul
      className={
        'flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-6'
      }>
      {paths.map((path) => (
        <Link
          className="text-base	uppercase text-zinc-500"
          href={path.href}
          key={path.href}>
          {path.text}
        </Link>
      ))}
    </ul>
  )
}
