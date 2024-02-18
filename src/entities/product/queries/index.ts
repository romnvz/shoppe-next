import { useMutation, useQuery } from '@tanstack/react-query'

import {
	IAddReviewDto,
	IProductQueryParams,
	ProductService,
	queryClient,
} from '@/shared/api'
import toast from 'react-hot-toast'

// Product
export const useGetProductsQuery = (body: IProductQueryParams) => {
	return useQuery({
		queryKey: ['product-list', body],
		queryFn: () => ProductService.getProducts({ ...body }),
	})
}

export const useGetProductBySkuQuery = (sku: number) => {
	return useQuery({
		queryKey: ['product'],
		queryFn: () => ProductService.getProductBySku(sku),
	})
}

export const useGetLatestProductsQuery = () => {
	return useQuery({
		queryKey: ['latest-product-list'],
		queryFn: () => ProductService.getProducts({ limit: 6, offset: 0 }),
	})
}

// Filter
export const useGetFilterQuery = () => {
	return useQuery({
		queryKey: ['filter'],
		queryFn: () => ProductService.getFilter(),
	})
}

// Review
export const useAddReviewMutation = () => {
	const qc = queryClient

	return useMutation({
		mutationKey: ['add-review'],
		mutationFn: ({ sku, body }: { sku: number; body: IAddReviewDto }) =>
			ProductService.addReview({ sku, body }),
		async onSuccess() {
			toast.success('Ваш отзыв отправлен на модерацию')
		},
		async onSettled() {
			await qc.invalidateQueries({ queryKey: ['product'] })
		},
	})
}
