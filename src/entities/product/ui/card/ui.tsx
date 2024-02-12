import Image from 'next/image'

import { IProduct } from '@/shared/api'

type TCardProps = {
  product: Partial<IProduct>
}

export const Card = ({ product }: TCardProps) => {
  return (
    <div className="flex flex-col gap-1.5 md:gap-6">
      <div className="rounded-lg h-36 md:h-72 relative overflow-hidden">
        {product.discount && (
          <div className="left-2.5 top-2.5 px-2 py-0.5 absolute bg-yellow-800 opacity-80 text-white rounded-[4px] z-10">
            - {product.discount}%
          </div>
        )}
        <Image
          className="object-cover"
          src={product.images![0]}
          alt={product.name ?? ''}
          fill
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="text-base md:text-xl">{product?.name}</div>
        <div className="text-base md:text-xl text-yellow-800 opacity-80">
          $ {product.price},00
        </div>
      </div>
    </div>
  )
}
