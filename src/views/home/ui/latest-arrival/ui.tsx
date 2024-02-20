'use client'

import Link from 'next/link'

import { ProductList, useGetLatestProductsQuery } from '@/entities/product'

export const LatestArrival = () => {
	const { data } = useGetLatestProductsQuery()

	return (
		<section className="container mx-auto max-w-7xl px-5 mt-12">
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl md:text-3xl">Последние поступления</h1>
				<Link
					className="text-base text-yellow-800 opacity-80"
					href={'/shop'}
				>
					Все
				</Link>
			</div>
			<ProductList products={data?.products || []} />
		</section>
	)
}
