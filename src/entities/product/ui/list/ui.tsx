import { IProductList } from '@/shared/api'
import { ProductCard, ProductCardSkeleton } from '@/entities/product'

export const List = ({ products }: IProductList) => {
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

export const Skeleton = () => {
	return (
		<div className={'grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12'}>
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
		</div>
	)
}
