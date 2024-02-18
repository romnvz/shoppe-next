import { Metadata } from 'next'

import { ShopView } from '@/views/shop'
import { ProductService, queryClient } from '@/shared/api'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Jwrly | Магазин',
}

const Shop = async () => {
	const qc = queryClient
	await qc.prefetchQuery({
		queryKey: [
			'product-list',
			{ categoryId: 0, discounted: '', limit: 6, offset: 0 },
		],
		queryFn: () =>
			ProductService.getProducts({
				limit: 6,
				offset: 0,
			}),
	})

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			<Suspense fallback={<>Loading..</>}>
				<ShopView />
			</Suspense>
		</HydrationBoundary>
	)
}

export default Shop
