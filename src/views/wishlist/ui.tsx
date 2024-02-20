'use client'

import {
	ProductList,
	useGetMultiplyProductsBySkuQuery,
} from '@/entities/product'
import { useWishlistStore } from '@/entities/wishlist'

export const WishlistView = () => {
	const { products } = useWishlistStore()
	const { data } = useGetMultiplyProductsBySkuQuery(products)

	return (
		<div className="container mx-auto max-w-7xl px-5 mt-12">
			<h1 className="text-2xl md:text-3xl mb-6 mb-12">Избранное</h1>
			{data?.length ? (
				<ProductList products={data || []} />
			) : (
				<div className="text-center mt-24">
					<div className="font-bold text-xl">В избранном пусто</div>
					<div className="text-md">Добавляйте товары с помощью ❤️️</div>
				</div>
			)}
		</div>
	)
}
