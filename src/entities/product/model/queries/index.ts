import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { ProductApi } from '@/entities/product/api'

const productKey = ['products'] as unknown[]

export const useGetProductsQuery = (params: {
  limit: number
  name?: string
  categoryId?: number
  discounted?: string
  priceMin?: number
  priceMax?: number
}) => {
  return useInfiniteQuery({
    queryKey: [productKey.concat(params)],
    queryFn: () => ProductApi.getProducts(params),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  })
}

export const useGetLatestProductsQuery = () => {
  return useQuery({
    queryKey: ['latest-products'],
    queryFn: () => ProductApi.getLatestProducts(),
  })
}
