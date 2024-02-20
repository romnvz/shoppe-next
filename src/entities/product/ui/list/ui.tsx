import { FC } from 'react'

import { IProduct } from '@/shared/api'
import { ProductCard } from '@/entities/product'

interface IListProps {
	products: IProduct[]
}

export const List: FC<IListProps> = ({ products }) => {
	return (
		<div className={'grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12'}>
			{products.map((product, index) => (
				<ProductCard
					product={product}
					key={index}
				/>
			))}
		</div>
	)
}
