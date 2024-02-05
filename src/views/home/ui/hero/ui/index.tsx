'use client'

import cn from 'classnames'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    { id: 1, title: 'Hal Earrings', price: 20 },
    { id: 2, title: 'Kaede Hair Pin Set Of 3', price: 30 },
    { id: 3, title: 'Kaede Hair Pin Set Of 4', price: 45 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < items.length - 1) {
        setActiveIndex((next) => next + 1)
      }

      if (activeIndex === items.length - 1) {
        setActiveIndex(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  })

  return (
    <section className={styles['hero']}>
      <div className={cn('container', styles['container'])}>
        <div className={styles['carousel']}>
          <div
            className={styles['inner']}
            style={{
              transform: `translate(-${activeIndex * 100}%)`,
            }}>
            {items.map((item) => (
              <div className={styles['item']} key={item.id}>
                <Image
                  key={item.id}
                  className={styles['thumbnail']}
                  src={'/images/test-carousel.png'}
                  fill
                  alt={''}
                />
                <div className={styles['info']}>
                  <div className={styles['title']}>{item.title}</div>
                  <div className={styles['price']}>$ {item.price},00</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
