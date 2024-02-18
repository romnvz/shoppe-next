import Image from 'next/image'

import { IProduct } from '@/shared/api'

export const Gallery = ({ product }: { product: IProduct }) => {
	return (
		<div className="flex gap-10">
			<div className="flex flex-col justify-between hidden lg:flex">
				{product?.images.slice(0, 4).map((item, index) => (
					<div
						className="relative w-32 h-32 rounded-lg overflow-hidden"
						key={index}
					>
						<Image
							src={item}
							className="object-cover"
							alt="Product image"
							fill
						/>
					</div>
				))}
			</div>
			<div className="relative w-full h-[374px] lg:w-[540px] md:h-[600px] rounded-lg overflow-hidden">
				<Image
					src={product?.images[0]}
					className="object-cover"
					alt="Product image"
					fill
				/>
			</div>
		</div>
	)
}
