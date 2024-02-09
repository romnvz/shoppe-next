import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { ProductApi } from '@/entities/product/api'

interface IProductSearchQueryParams {
  limit: number
  name?: string
  categoryId?: number
  discounted?: string
  priceMin?: number
  priceMax?: number
}

const productKey = ['products'] as unknown[]

export const useGetProductsQuery = ({ ...rest }: IProductSearchQueryParams) => {
  return useInfiniteQuery({
    queryKey: [productKey.concat(rest)],
    queryFn: ({ pageParam = 0 }) =>
      ProductApi.getProducts({ offset: pageParam, ...rest }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage) {
        return undefined
      }

      if (lastPage.offset + 10 > lastPage.totalProducts) {
        return false
      }

      return lastPage?.offset + 10
    },
  })
}

export const useGetLatestProductsQuery = () => {
  return useQuery({
    queryKey: ['latest-products'],
    queryFn: () => ProductApi.getLatestProducts(),
  })
}
