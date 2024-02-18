'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

import { ProductList, useGetProducts } from '@/entities/product'
import { Button, Select, TextField, Toggle } from '@/shared/ui'
import { categories } from '../config'
import { useFiltersStore } from '../model'

export const ShopView = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { categoryId, discounted, setCategoryId, setDiscounted, setFilters } =
    useFiltersStore()
  const [isOpenFilters, setIsOpenFilters] = useState(false)

  useEffect(() => {
    if (window.location.search) {
      setFilters({
        categoryId: Number(searchParams.get('category')),
        discounted: Boolean(searchParams.get('discounted'))
          ? true
          : Boolean(''),
      })
    }
  }, [])

  const { data, isFetched } = useGetProducts({
    limit: 6,
    offset: 0,
    categoryId: categoryId,
    discounted: !discounted ? '' : 'true',
  })

  useEffect(() => {
    const qsCategoryId = categoryId > 0 ? `category=${categoryId}` : ''
    const qsDiscounted = discounted ? `&discounted` : ''

    router.push(`?${qsCategoryId}${qsDiscounted}`)
  }, [categoryId, discounted])

  useEffect(() => {
    document.body.style.overflow = isOpenFilters ? 'hidden' : 'unset'
  }, [isOpenFilters])

  return (
    <>
      {isOpenFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed h-svh w-svw z-50 bg-white">
          <div className="flex flex-col px-5 gap-7">
            <TextField
              variant="standard"
              placeholder="Поиск..."
              trailingIcon="/icons/search.svg"
            />
            <Select
              options={categories}
              value={String(categoryId)}
              label={'Категория'}
              onChange={({ value }) => setCategoryId(Number(value))}
            />
            <div className="flex items-center justify-between">
              <div>Со скидкой</div>
              <Toggle
                selected={discounted}
                toggleSelected={() => setDiscounted()}
              />
            </div>
            <Button
              variant="contained"
              className="mt-auto"
              onClick={() => setIsOpenFilters(false)}>
              Найти
            </Button>
          </div>
        </motion.div>
      )}
      <div className="container mx-auto max-w-7xl px-5 mt-12">
        <h1 className="text-3xl mb-6">Каталог товаров</h1>
        <div className="flex flex-col items-start md:flex-row gap-4 md:gap-8">
          <Button
            className="md:hidden text-yellow-800 opacity-80 px-1"
            variant="text"
            onClick={() => setIsOpenFilters(true)}>
            <Image
              src="/icons/filter.svg"
              width={18}
              height={18}
              alt="Filter icon"
            />
            Фильтры
          </Button>
          <div className="hidden md:flex flex-col gap-8 w-full max-w-64">
            <TextField
              variant="standard"
              placeholder="Поиск..."
              trailingIcon="/icons/search.svg"
            />
            <Select
              options={categories}
              value={String(categoryId)}
              label={'Категория'}
              onChange={({ value }) => setCategoryId(Number(value))}
            />
            <div className="flex items-center justify-between">
              <div>Со скидкой</div>
              <Toggle
                selected={discounted}
                toggleSelected={() => setDiscounted()}
              />
            </div>
          </div>
          <div className={'w-full'}>
            {isFetched && <ProductList products={data?.products || []} />}
          </div>
        </div>
      </div>
    </>
  )
}
