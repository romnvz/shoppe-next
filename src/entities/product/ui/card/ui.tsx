import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { IProduct } from '@/shared/api'

interface ICardProps {
	product: Partial<IProduct>
}

export const Card: FC<ICardProps> = ({ product }) => {
	return (
		<Link
			href={`/product/${product?.sku}`}
			className="flex flex-col gap-1.5 md:gap-6"
		>
			<div className="rounded-lg h-36 md:h-72 relative overflow-hidden">
				{product?.discount && (
					<div className="left-2.5 top-2.5 px-2 py-0.5 absolute bg-yellow-800 opacity-80 text-white rounded-[4px] z-10">
						- {product?.discount}%
					</div>
				)}
				{product?.images && (
					<Image
						className="object-cover"
						alt={product.name ?? ''}
						fill
						src={product.images[0]}
					/>
				)}
			</div>
			<div className="flex flex-col gap-1 md:gap-2">
				<div className="text-base md:text-xl">{product?.name}</div>
				<div className="text-base md:text-xl text-yellow-800 opacity-80">
					$ {product?.price},00
				</div>
			</div>
		</Link>
	)
}
