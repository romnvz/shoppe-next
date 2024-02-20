import clsx from 'clsx'
import { Heart } from 'lucide-react'

import { useWishlistStore, selectIsInWishlist } from '@/entities/wishlist'

export const AddToWishlist = ({ sku }: { sku: number }) => {
	const { toggleWishlistProduct } = useWishlistStore()

	return (
		<button className="relative w-5 h-5">
			<Heart
				width={20}
				height={20}
				className={clsx('stroke-zinc-500', {
					'fill-yellow-800 opacity-80 !stroke-none': selectIsInWishlist(sku),
				})}
				onClick={() => toggleWishlistProduct(sku)}
			/>
		</button>
	)
}
