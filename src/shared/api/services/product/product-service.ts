import { AxiosError, AxiosResponse } from 'axios'

import {
	IAddReviewDto,
	IFilter,
	IProduct,
	IProductList,
	IProductQueryParams,
} from './types'
import { httpClient } from '@/shared/api'

export class ProductService {
	static async getProducts(params: IProductQueryParams) {
		try {
			const { data } = await httpClient.get<IProductList>('/products', {
				params: {
					...params,
				},
			})

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async getProductBySku(sku: number) {
		try {
			const { data } = await httpClient.get<IProduct>(`/products/sku/${sku}`)

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async getMultiplyProductsBySkuQuery(sku: number[]) {
		try {
			const products = await Promise.all<IProduct[]>(
				sku.map(s => this.getProductBySku(s)),
			)

			if (!products) throw new Error('Error!')

			return products
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async getFilter() {
		try {
			const { data } = await httpClient.get<IFilter>(`/products/get-filter`)

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async addReview({ sku, body }: { sku: number; body: IAddReviewDto }) {
		try {
			const { data } = await httpClient.post(`/products/sku/${sku}/review`, {
				...body,
			})

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}
}
