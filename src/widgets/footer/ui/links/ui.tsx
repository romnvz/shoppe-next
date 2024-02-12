import Link from 'next/link'
import Image from 'next/image'

import { links } from './config'

export const Links = () => {
  return (
    <ul className="flex items-center gap-6">
      {links.map((link) => (
        <Link href={link.href} key={link.href} className="relative w-5 h-5">
          <Image
            className="object-contain"
            src={`/icons/social/${link.iconName}.svg`}
            alt={link.iconName}
            fill
          />
        </Link>
      ))}
    </ul>
  )
}
