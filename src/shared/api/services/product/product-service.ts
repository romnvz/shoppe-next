import { AxiosError } from 'axios'

import { IProductQueryParams, IProductResponse } from './types'
import { httpClient } from '@/shared/api'

export class ProductService {
  static async getProducts({ ...params }: IProductQueryParams) {
    try {
      const { data } = await httpClient.get<IProductResponse>(
        process.env.NEXT_PUBLIC_BASE_URL + '/products',
        {
          params,
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
