'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      id: 1,
      title: 'Hal Earrings',
      price: 20,
      img: 'slide',
    },
    {
      id: 2,
      title: 'Kaede Hair Pin Set Of 3',
      price: 30,
      img: 'slide-2',
    },
    {
      id: 3,
      title: 'Plaine Necklace',
      price: 19,
      img: 'slide-3',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex + 1 < items.length) {
        setActiveIndex((next) => next + 1)
      }

      if (activeIndex + 1 === items.length) {
        setActiveIndex(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [activeIndex, items.length])

  return (
    <section className="container mx-auto max-w-7xl px-5">
      <div className="relative">
        <div className="overflow-hidden relative rounded-2xl h-96 md:h-[37.5rem]">
          <div className="absolute flex flex-col gap-4 top-1/2 left-10 z-10">
            <h1 className="text-3xl text-black font-medium">
              {items[activeIndex].title}
            </h1>
            <h2 className="text-2xl	text-black">
              $ {items[activeIndex].price},00
            </h2>
          </div>
          <Image
            src={`/images/${items[activeIndex].img}.png`}
            fill
            className="block object-cover"
            alt={items[activeIndex].title}
          />
        </div>
        <div className="flex items-center absolute bottom-5 left-1/2 gap-3 z-10">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={clsx('w-2 h-2 rounded-full bg-white', {
                'w-4 h-4 !bg-transparent border-2': activeIndex + 1 === item.id,
              })}
              onClick={() => setActiveIndex(item.id - 1)}></button>
          ))}
        </div>
      </div>
    </section>
  )
}
