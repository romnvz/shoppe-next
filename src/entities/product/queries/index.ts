import toast from 'react-hot-toast'
import {
	QueryClient,
	QueryKey,
	useMutation,
	useQueries,
	useQuery,
} from '@tanstack/react-query'

import {
	IAddReviewDto,
	IProduct,
	IProductQueryParams,
	ProductService,
	queryClient,
} from '@/shared/api'

// Product
export const useGetProductsQuery = (query: IProductQueryParams) => {
	return useQuery({
		queryKey: ['product-list', query],
		queryFn: () => ProductService.getProducts({ ...query }),
	})
}

export const useGetProductBySkuQuery = (sku: number) => {
	return useQuery({
		queryKey: ['product', sku],
		queryFn: () => ProductService.getProductBySku(sku),
	})
}

export const useGetLatestProductsQuery = () => {
	return useQuery({
		queryKey: ['latest-product-list'],
		queryFn: () => ProductService.getProducts({ limit: 6, offset: 0 }),
	})
}

export const useGetMultiplyProductsBySkuQuery = (sku: number[]) => {
	return useQueries({
		queries: sku.map(s => ({
			queryKey: ['product', s],
			queryFn: () => ProductService.getProductBySku(s),
		})),
		combine: results => {
			return {
				data: results.map(result => <IProduct>result.data),
			}
		},
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
