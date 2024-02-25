import { Metadata } from 'next'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { ProductService } from '@/shared/api/services/product'
import { ProductView } from '@/views/product'
import { queryClient } from '@/shared/api'

interface IProductProps {
	params: {
		sku: number
	}
}

export const generateMetadata = async ({
	params,
}: IProductProps): Promise<Metadata> => {
	const product = await ProductService.getProductBySku(params.sku)
	const filters = await ProductService.getFilter()
	const category = filters?.categories.find(c => c.id === product?.categoryId)

	return {
		title: `${category?.name} ${product?.name} - купить по выгодной цене в интернет-магазине Jwrly`,
		description: `${product?.name} - ${product?.description}`,
	}
}

const Product = async ({ params }: IProductProps) => {
	const qc = queryClient
	await qc.prefetchQuery({
		queryKey: ['product', params.sku],
		queryFn: () => ProductService.getProductBySku(params.sku),
	})
	await qc.prefetchQuery({
		queryKey: ['filter'],
		queryFn: () => ProductService.getFilter(),
	})

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			<ProductView {...params} />
		</HydrationBoundary>
	)
}

export default Product
