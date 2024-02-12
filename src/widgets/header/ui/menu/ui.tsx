import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { accountPaths, basePaths } from './config'

export const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed h-svh w-svw z-50 bg-white">
      <div className="flex flex-col px-5 gap-7">
        <ul className="flex flex-col gap-6">
          {basePaths.map((path) => (
            <Link
              href={path.href}
              key={path.href}
              className="text-xl text-black">
              {path.text}
            </Link>
          ))}
        </ul>
        <hr />
        <ul className="flex flex-col gap-6">
          {accountPaths.map((path) => (
            <Link
              href={path.href}
              key={path.href}
              className="flex text-xl text-black gap-3">
              <Image
                src={`/icons/${path.iconName}.svg`}
                width={19}
                height={19}
                alt="Shopping cart link"
              />
              {path.text}
            </Link>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
