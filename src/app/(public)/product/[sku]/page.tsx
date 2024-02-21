import { Metadata } from 'next'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { ProductService, queryClient } from '@/shared/api'
import { ProductView } from '@/views/product'

export const generateMetadata = async ({
	params,
}: {
	params: { sku: number }
}): Promise<Metadata> => {
	const product = await ProductService.getProductBySku(params.sku)
	const filters = await ProductService.getFilter()
	const category = filters?.categories.find(c => c.id === product?.categoryId)

	return {
		title: `${category?.name} ${product?.name} - купить по выгодной цене в интернет-магазине Jwrly`,
		description: `${product?.name} - ${product?.description}`,
	}
}

const Product = async ({ params }: { params: { sku: number } }) => {
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
			<ProductView sku={params.sku} />
		</HydrationBoundary>
	)
}

export default Product
