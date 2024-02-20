'use client'

import { useCartStore } from '@/entities/cart'
import { selectCartTotalPrice } from '@/entities/cart'
import { useGetMultiplyProductsBySkuQuery } from '@/entities/product'
import { AddToCart } from '@/features/cart/add-to-cart'
import { DeleteFromCart } from '@/features/cart/delete-from-cart'
import { UiButton, UiTextField } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

export const CartView = () => {
	const { items } = useCartStore()
	const totalPrice = selectCartTotalPrice()
	const { data } = useGetMultiplyProductsBySkuQuery(
		items.map(i => i.product.sku),
	)
	return (
		<div className="container mx-auto max-w-7xl px-5 mt-6 md:mt-12">
			<h1 className="text-2xl md:text-3xl mb-6 mb-12">Корзина</h1>
			{items.length ? (
				<div className="flex flex-col md:flex-row gap-36">
					<div className="w-full flex flex-col gap-10">
						{data?.map(product => (
							<div
								className="flex justify-between"
								key={product.sku}
							>
								<div className="flex gap-4 md:gap-10">
									<div className="relative w-32 h-32 rounded overflow-hidden">
										<Image
											src={product.images[0]}
											alt={product.name}
											fill
										/>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-sm md:text-xl">{product.name}</div>
										<div className="text-sm md:text-base text-zinc-500 md:text-yellow-800 md:opacity-80">
											$ {product.price},00
										</div>
									</div>
								</div>
								<div className="flex md:flex-row flex-col-reverse md:items-start items-end gap-9">
									<AddToCart product={product} />
									<DeleteFromCart productSku={product.sku} />
								</div>
							</div>
						))}
					</div>
					<form className="w-full flex flex-col gap-10">
						<div className="flex flex-col gap-10">
							<UiTextField
								variant="standard"
								placeholder="Email"
								type="email"
							/>
							<UiTextField
								variant="standard"
								placeholder="Пароль"
								type="password"
							/>
							<UiTextField
								variant="standard"
								placeholder="Адрес доставки"
								type="text"
							/>
							<UiTextField
								variant="standard"
								placeholder="Имя"
								type="text"
							/>
							<UiTextField
								variant="standard"
								placeholder="Телефон"
								type="phone"
							/>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-4 p-6 bg-zinc-100">
								<div className="text-2xl">Итог</div>
								<hr />
								<div className="flex items-center justify-between">
									<div className="text-base font-bold">Стоимость</div>
									<div className="text-base font-bold">${totalPrice},00</div>
								</div>
							</div>
							<UiButton
								variant="contained"
								className="font-bold"
							>
								Оплатить
							</UiButton>
						</div>
					</form>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center text-center mt-24">
					<div className="font-bold text-xl">Корзина пуста</div>
					<div className="text-md">
						Воспользуйтесь поиском, чтобы найти всё, что нужно️
					</div>
					<UiButton
						variant="contained"
						className="mt-6"
					>
						<Link href="/shop">Начать покупки</Link>
					</UiButton>
				</div>
			)}
		</div>
	)
}
