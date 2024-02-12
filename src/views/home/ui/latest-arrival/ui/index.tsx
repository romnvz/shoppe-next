'use client'

import Link from 'next/link'
import clsx from 'clsx'

import { Typography } from '@/shared/ui'
import { ProductList, useGetProducts } from '@/entities/product'
import { useGetLatestProducts } from '@/entities/product/model'

export const LatestArrival = () => {
  const { data } = useGetLatestProducts()

  return (
    <section className="container mx-auto max-w-7xl px-5 mt-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl">Последние поступления</h1>
        <Link className="text-base text-yellow-800 opacity-80" href={'/latest'}>
          Все
        </Link>
      </div>
      <ProductList products={data?.products || []} />
    </section>
  )
}
