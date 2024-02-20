import { Metadata } from 'next'

import { HomeView } from '@/views/home'
import { ProductService, queryClient } from '@/shared/api'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export const metadata: Metadata = {
	title:
		'Jwrly – ювелирный интернет-магазин. Миллионы товаров по выгодным ценам.',
	description:
		'Миллионы ювелирных товаров по выгодным ценам: Заколки, цепочки, кольца и многое другое. Скидки и акции каждый день. Доставка по всей России.',
}

const Home = async () => {
	const qc = queryClient
	await qc.prefetchQuery({
		queryKey: ['latest-product-list'],
		queryFn: () => ProductService.getProducts({ limit: 6, offset: 0 }),
	})

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			<HomeView />
		</HydrationBoundary>
	)
}

export default Home
