import Link from 'next/link'
import Image from 'next/image'

import { accountPaths, basePaths } from './config'
import { useHeaderStore } from '../../model'

export const Nav = () => {
  const { isOpen, open, close } = useHeaderStore()

  const DesktopNav = (
    <nav className="hidden md:flex items-center gap-12">
      <ul className="flex items-center gap-10">
        {basePaths.map((path) => (
          <Link href={path.href} key={path.href}>
            {path.text}
          </Link>
        ))}
      </ul>
      <hr className="border-r-2 h-4 border-zinc-500" />
      <ul className="flex items-center gap-10">
        {accountPaths.map((path) => (
          <Link href={path.href} key={path.href}>
            <Image
              src={`/icons/${path.iconName}.svg`}
              width={19}
              height={19}
              alt={path.href}
            />
          </Link>
        ))}
      </ul>
    </nav>
  )

  const MobileNav = (
    <ul className="flex items-center gap-5 md:hidden">
      <Link href="/cart">
        <Image
          src={`/icons/shopping-cart.svg`}
          width={19}
          height={19}
          alt="Shopping cart link"
        />
      </Link>
      {!isOpen ? (
        <button onClick={open}>
          <Image
            src={`/icons/hamburger.svg`}
            width={19}
            height={19}
            alt="Hamburger button"
          />
        </button>
      ) : (
        <button onClick={close}>
          <Image
            src={`/icons/close.svg`}
            width={19}
            height={19}
            alt="Hamburger button"
          />
        </button>
      )}
    </ul>
  )

  return (
    <>
      {DesktopNav}
      {MobileNav}
    </>
  )
}
