'use client'

import { FC } from 'react'

import { UiButton } from '@/shared/ui'
import { IProduct } from '@/shared/api'
import { selectProductInCart, useCartStore } from '@/entities/cart'
import toast from 'react-hot-toast'

interface IAddToCartProps {
	product: IProduct
}

export const AddToCart: FC<IAddToCartProps> = ({ product }) => {
	const { addItemToCart, increaseQuantity, decreaseQuantity } = useCartStore()
	const productInCart = selectProductInCart(product?.sku)

	const onClickToAdd = () => {
		addItemToCart(product)
		toast.success('Товар успешно добавлен в корзину!')
	}

	return (
		<>
			{productInCart && (
				<div className="flex gap-4 sm:py-3 sm:px-3 px-1.5 py-1.5 items-center bg-zinc-100 text-zinc-500 rounded">
					<button
						className="w-3.5"
						onClick={() => decreaseQuantity(product.sku)}
					>
						-
					</button>
					<div className="w-3.5">{productInCart.quantity}</div>
					<button
						className="w-3.5"
						onClick={() => increaseQuantity(product.sku)}
					>
						+
					</button>
				</div>
			)}
			{!productInCart && (
				<UiButton
					variant="outlined"
					className="font-bold w-full"
					onClick={onClickToAdd}
				>
					Добавить в корзину
				</UiButton>
			)}
		</>
	)
}
