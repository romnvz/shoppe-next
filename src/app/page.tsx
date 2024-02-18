import { Metadata } from 'next'

import { HomePage } from '@/views/home'
import { ProductService, queryClient } from '@/shared/api'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export const metadata: Metadata = {
	title: 'Jwrly | Главная',
}

const Home = async () => {
	const qc = queryClient
	await qc.prefetchQuery({
		queryKey: ['latest-product-list'],
		queryFn: () => ProductService.getProducts({ limit: 6, offset: 0 }),
	})

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			<HomePage />
		</HydrationBoundary>
	)
}

export default Home
