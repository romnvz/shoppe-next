'use client'

import { notFound } from 'next/navigation'

import { Tabs } from './tabs'
import { MainSection } from './main-section'
import { useGetProductBySkuQuery } from '@/entities/product'

export const ProductView = ({ sku }: { sku: number }) => {
	const { data: product } = useGetProductBySkuQuery(sku)

	if (!product) notFound()

	return (
		<>
			<MainSection product={product} />
			<Tabs product={product} />
		</>
	)
}
