import { AxiosError } from 'axios'

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
			const { data } = await httpClient.get<IProductList>(
				process.env.NEXT_PUBLIC_BASE_URL + '/products',
				{
					params: {
						...params,
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

	static async getProductBySku(sku: number) {
		try {
			const { data } = await httpClient.get<IProduct>(
				process.env.NEXT_PUBLIC_BASE_URL + `/products/sku/${sku}`,
			)

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async getFilter() {
		try {
			const { data } = await httpClient.get<IFilter>(
				process.env.NEXT_PUBLIC_BASE_URL + `/products/get-filter`,
			)

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async addReview({ sku, body }: { sku: number; body: IAddReviewDto }) {
		try {
			const { data } = await httpClient.post(
				process.env.NEXT_PUBLIC_BASE_URL + `/products/sku/${sku}/review`,
				{
					...body,
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
