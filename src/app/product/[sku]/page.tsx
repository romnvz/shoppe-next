import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { ProductService, queryClient } from '@/shared/api'
import { ProductPage } from '@/views/product'

const Product = async ({ params }: { params: { sku: string } }) => {
	const qc = queryClient
	await qc.prefetchQuery({
		queryKey: ['product'],
		queryFn: () => ProductService.getProductBySku(Number(params.sku)),
	})

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			<ProductPage params={params} />
		</HydrationBoundary>
	)
}

export default Product
