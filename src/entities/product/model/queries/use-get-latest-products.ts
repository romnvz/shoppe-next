import { useQuery } from '@tanstack/react-query'

import { ProductService } from '@/shared/api'

export const useGetLatestProducts = () => {
  return useQuery({
    queryKey: ['latest-products'],
    queryFn: () => ProductService.getProducts({ limit: 6, offset: 0 }),
  })
}
