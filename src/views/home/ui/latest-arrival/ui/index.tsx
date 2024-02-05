'use client'

import Link from 'next/link'
import cn from 'classnames'

import { Typography } from '@/shared/ui'
import { ProductList, useGetLatestProductsQuery } from '@/entities/product'
import styles from './styles.module.scss'

export const LatestArrival = () => {
  const { data } = useGetLatestProductsQuery()

  // TODO: Перенести grid сетку для продуктов

  return (
    <section className={styles['latest-arrival']}>
      <div className={cn('container', styles['container'])}>
        <div className={styles['header']}>
          <Typography className={styles['heading']} variant={'h1'}>
            Последние поступления
          </Typography>
          <Link className={styles['link']} href={'/latest'}>
            Все
          </Link>
        </div>
        <ProductList products={data?.products || []} />
      </div>
    </section>
  )
}
