'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
	Facebook,
	Heart,
	Instagram,
	Linkedin,
	Star,
	Twitter,
} from 'lucide-react'

import { UiButton } from '@/shared/ui'
import { IProduct } from '@/shared/api'
import { useGetFilterQuery } from '@/entities/product'

export const Info = ({ product }: { product: IProduct }) => {
	const { data: filters } = useGetFilterQuery()
	const [counter, setCounter] = useState(1)

	return (
		<div className="flex flex-col gap-6 lg:gap-16">
			<div className="flex flex-col gap-2.5 lg:gap-6">
				<h1 className="text-3xl">{product?.name}</h1>
				<div className="text-xl text-yellow-800 opacity-80">
					$ {product?.price},00
				</div>
			</div>
			<div className="flex flex-col gap-16">
				<div className="flex flex-col gap-6">
					<div className="flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center">
							<Star
								width={20}
								height={20}
								className="fill-yellow-800 opacity-80 stroke-none"
							/>
							<div className="font-bold">4.95</div>
						</div>
						<span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
						<Link
							href="#reviews"
							className="text-base text-zinc-500 underline"
						>
							{product?.reviews.length} отзыва
						</Link>
					</div>
					<div className="text-base text-zinc-500">{product?.description}</div>
				</div>
				<div className="flex gap-6">
					<div className="flex gap-4 px-3 items-center bg-zinc-100 text-zinc-500 rounded">
						<button
							className="w-3.5"
							onClick={() => setCounter(c => c - 1)}
						>
							-
						</button>
						<div className="w-3.5">{counter}</div>
						<button
							className="w-3.5"
							onClick={() => setCounter(c => c + 1)}
						>
							+
						</button>
					</div>
					<UiButton
						variant="outlined"
						className="font-bold w-full"
					>
						Добавить в корзину
					</UiButton>
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex gap-8 items-center">
						<button className="relative w-5 h-5">
							<Heart
								width={20}
								height={20}
								className="stroke-zinc-500"
							/>
						</button>
						<hr className="border-r h-4 border-zinc-400" />
						<div className="flex items-center gap-6">
							<Link href="http://linkedin.com">
								<Linkedin
									width={20}
									height={20}
									className="stroke-zinc-500"
								/>
							</Link>
							<Link href="http://facebook.com">
								<Facebook
									width={20}
									height={20}
									className="stroke-zinc-500"
								/>
							</Link>
							<Link href="http://instagram.com">
								<Instagram
									width={20}
									height={20}
									className="stroke-zinc-500"
								/>
							</Link>
							<Link href="http://twitter.com">
								<Twitter
									width={20}
									height={20}
									className="stroke-zinc-500"
								/>
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-base">
							SKU:
							<span className="ml-2 text-base text-zinc-500">
								{product?.sku}
							</span>
						</div>
						<div className="text-base">
							Категория:
							<span className="ml-2 text-base text-zinc-500">
								{
									filters?.categories.find(c => c.id === product?.categoryId)
										?.name
								}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
