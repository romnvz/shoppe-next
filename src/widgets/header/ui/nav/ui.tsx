import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, FolderHeart, User, Menu, XCircle } from 'lucide-react'

import { useHeaderStore } from '../../model'
import { useCartStore } from '@/entities/cart'

export const Nav = () => {
	const { isOpen, open, close } = useHeaderStore()
	const { items } = useCartStore()

	const DesktopNav = (
		<nav className="hidden md:flex items-center gap-12">
			<ul className="flex items-center gap-10">
				<Link href="/shop">Магазин</Link>
				<Link href="/about">О нас</Link>
			</ul>
			<hr className="border-r-2 h-4 border-zinc-500" />
			<ul className="flex items-center gap-10">
				<Link
					href="/cart"
					className="relative"
				>
					<ShoppingCart
						width={20}
						height={20}
					/>
					{items.length > 0 && (
						<div className="absolute w-4 h-4 border-2 rounded-full border-black bg-white bottom-2.5 left-2.5 text-center z-10">
							<div className="text-xs font-semibold leading-none">
								{items.length < 10 ? items.length : '∞'}
							</div>
						</div>
					)}
				</Link>
				<Link href="/wishlist">
					<FolderHeart
						width={20}
						height={20}
					/>
				</Link>
				<Link href="/profile">
					<User
						width={20}
						height={20}
					/>
				</Link>
			</ul>
		</nav>
	)

	const MobileNav = (
		<ul className="flex items-center gap-5 md:hidden">
			<Link
				href="/cart"
				className="relative"
			>
				<ShoppingCart
					width={20}
					height={20}
				/>
				{items.length > 0 && (
					<div className="absolute w-4 h-4 border-2 rounded-full border-black bg-white bottom-2.5 left-2.5 text-center z-10">
						<div className="text-xs font-semibold leading-none">
							{items.length < 10 ? items.length : '∞'}
						</div>
					</div>
				)}
			</Link>
			{!isOpen ? (
				<button onClick={open}>
					<Menu
						width={20}
						height={20}
					/>
				</button>
			) : (
				<button onClick={close}>
					<XCircle
						width={20}
						height={20}
					/>
				</button>
			)}
		</ul>
	)

	return (
		<>
			{DesktopNav}
			{MobileNav}
		</>
	)
}
