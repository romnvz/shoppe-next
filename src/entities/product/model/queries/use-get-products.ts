import { useQuery } from '@tanstack/react-query'

import { IProductQueryParams, ProductService } from '@/shared/api'

export const useGetProducts = ({ ...params }: IProductQueryParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => ProductService.getProducts({ ...params }),
  })
}
