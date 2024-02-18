import Link from 'next/link'
import Image from 'next/image'

import { UiButton } from '@/shared/ui'

export const NotFoundPage = () => {
	return (
		<div className="container mx-auto max-w-7xl px-5">
			<div className="flex flex-col items-center gap-12 mt-6">
				<div className="relative w-64 h-64">
					<Image
						src={'/images/not-found.svg'}
						fill
						alt="Not found image"
					/>
				</div>
				<div className="flex flex-col items-center max-w-96 mx-auto my-auto">
					<div className="flex flex-col gap-4 text-center">
						<h1 className="text-3xl font-medium">404 ошибка</h1>
						<p className="text-xl text-zinc-500">
							Страница не найдена, попробуйте перейти на главную страницу
						</p>
					</div>
				</div>
				<Link href="/">
					<UiButton
						variant="outlined"
						className="font-bold"
					>
						Главная страница
					</UiButton>
				</Link>
			</div>
		</div>
	)
}
