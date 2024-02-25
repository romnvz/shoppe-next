import { FC, Fragment } from 'react'

import { IProduct } from '@/shared/api'
import { ProductCard } from '@/entities/product'

interface IListProps {
	products: IProduct[]
}

export const List: FC<IListProps> = ({ products }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
			{products.map((product: IProduct) => (
				<Fragment key={product?.sku + 1}>
					<ProductCard product={product} />
				</Fragment>
			))}
		</div>
	)
}
