'use client'

import { Fragment, useEffect } from 'react'
import classNames from 'classnames'
import { useRouter, useSearchParams } from 'next/navigation'

import { ProductList, useGetProductsQuery } from '@/entities/product'
import { Button, Input, Select, Spinner, Toggle, Typography } from '@/shared/ui'
import { categories } from '../config'
import { useFiltersStore } from '../model'
import styles from './styles.module.scss'

export const ShopView = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { categoryId, discounted, setCategoryId, setDiscounted, setFilters } =
    useFiltersStore()

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

  const { data, isLoading, isFetched, hasNextPage, fetchNextPage } =
    useGetProductsQuery({
      limit: 6,
      categoryId: categoryId,
      discounted: !discounted ? '' : 'true',
    })

  useEffect(() => {
    const qsCategoryId = categoryId > 0 ? `category=${categoryId}` : ''
    const qsDiscounted = discounted ? `&discounted` : ''

    router.push(`?${qsCategoryId}${qsDiscounted}`)
  }, [categoryId, discounted])

  return (
    <section className={styles['catalog']}>
      <div className={classNames('container', styles['container'])}>
        <Typography className={styles['heading']} variant={'h1'}>
          Каталог товаров
        </Typography>
        <div className={styles['content']}>
          <Button className={styles['button']} variant={'light'} size={'small'}>
            Фильтры
          </Button>
          <div className={styles['filters']}>
            <Input variant={'primary'} placeholder={'Поиск...'} />
            <Select
              options={categories}
              value={String(categoryId)}
              label={'Категория'}
              onChange={({ value }) => setCategoryId(Number(value))}
            />
            <div className={styles['discount']}>
              <Typography variant={'h4'}>Со скидкой</Typography>
              <Toggle
                selected={discounted}
                toggleSelected={() => setDiscounted()}
              />
            </div>
          </div>
          {isLoading && <Spinner />}
          <div className={styles['infinity']}>
            {isFetched &&
              data?.pages.map((p, i) => (
                <ProductList products={p?.products || []} key={i} />
              ))}
            <Button
              variant={'light'}
              size={'small'}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage}>
              Показать еще
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
