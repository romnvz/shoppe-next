import { Delete } from 'lucide-react'

import { useCartStore } from '@/entities/cart'
import { UiButton } from '@/shared/ui'
import { IProduct } from '@/shared/api'
import React, { FC, useCallback } from 'react'
import toast from 'react-hot-toast'

interface IAddToCartProps {
	productSku: IProduct['sku']
}

export const DeleteFromCart: FC<IAddToCartProps> = ({ productSku }) => {
	const { removeItemFromCart } = useCartStore()

	const onClickToRemove = () => {
		const isConfirmed = confirm(
			'Вы точно хотите удалить выбранные товары? Отменить данное действие будет невозможно.',
		)
		if (!isConfirmed) {
			return
		}

		removeItemFromCart(productSku)
		toast.success('Товар успешно удален из корзины!')
	}

	return (
		<UiButton
			variant="text"
			onClick={onClickToRemove}
		>
			<Delete className="w-5 h-5" />
		</UiButton>
	)
}
