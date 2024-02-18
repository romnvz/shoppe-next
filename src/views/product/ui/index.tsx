'use client'

import { notFound } from 'next/navigation'

import { Tabs } from './tabs'
import { MainSection } from './main-section'
import { useGetProductBySkuQuery } from '@/entities/product'

export const ProductPage = ({ params }: { params: { sku: string } }) => {
	const { data: product } = useGetProductBySkuQuery(Number(params.sku))

	if (!product) notFound()

	return (
		<>
			<MainSection product={product} />
			<Tabs product={product} />
		</>
	)
}
