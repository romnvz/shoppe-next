import { Metadata } from 'next'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { ShopView } from '@/views/shop'
import { ProductService } from '@/shared/api/services/product'
import { queryClient } from '@/shared/api'

export const metadata: Metadata = {
	title:
		'Jwrly – ювелирный интернет-магазин. Миллионы товаров по выгодным ценам.',
	description:
		'Миллионы ювелирных товаров по выгодным ценам: Заколки, цепочки, кольца и многое другое. Скидки и акции каждый день. Доставка по всей России.',
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
			<ShopView />
		</HydrationBoundary>
	)
}

export default Shop
