import Link from 'next/link'
import { motion } from 'framer-motion'
import { FolderHeart, User } from 'lucide-react'

export const Menu = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed h-svh w-svw z-50 bg-white"
		>
			<div className="flex flex-col px-5 gap-7">
				<ul className="flex flex-col gap-6">
					<Link
						href="/"
						className="text-xl text-black"
					>
						Главная
					</Link>
					<Link
						href="/shop"
						className="text-xl text-black"
					>
						Магазин
					</Link>
					<Link
						href="/about"
						className="text-xl text-black"
					>
						О нас
					</Link>
				</ul>
				<hr />
				<ul className="flex flex-col gap-6">
					<Link
						href="/profile"
						className="flex items-center text-xl text-black gap-3"
					>
						<User
							width={20}
							height={20}
						/>
						Мой аккаунт
					</Link>
					<Link
						href="/wishlist"
						className="flex items-center text-xl text-black gap-3"
					>
						<FolderHeart
							width={20}
							height={20}
						/>
						Избранное
					</Link>
				</ul>
			</div>
		</motion.div>
	)
}
