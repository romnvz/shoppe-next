import { AxiosError } from 'axios'

import type { IProductResponse } from '@/entities/product'
import { http } from '@/shared/api'

interface IProductSearchQueryParams {
  limit: number
  offset: number
  name?: string
  categoryId?: number
  discounted?: string
  priceMin?: number
  priceMax?: number
}

export class ProductApi {
  static async getProducts({ ...rest }: IProductSearchQueryParams) {
    try {
      const { data } = await http.get<IProductResponse>(
        process.env.NEXT_PUBLIC_BASE_URL + '/products',
        {
          params: {
            ...rest,
          },
        },
      )

      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.message)
      }
    }
  }

  static async getLatestProducts() {
    try {
      const { data } = await http.get<IProductResponse>(
        process.env.NEXT_PUBLIC_BASE_URL + '/products',
        {
          params: {
            limit: 8,
            offset: 0,
          },
        },
      )

      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.message)
      }
    }
  }
}
