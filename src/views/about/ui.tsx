import Image from 'next/image'

export const AboutView = () => {
	return (
		<div className="container mx-auto max-w-2xl px-5 mt-12 flex flex-col gap-10">
			<div className="flex flex-col gap-6 text-center">
				<h1 className="text-3xl">О нас</h1>
				<h3 className="text-xl">Мы делаем шикарные украшения для вас</h3>
			</div>
			<p className="text-base">
				Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
				sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
				pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
				placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
				sodales lectus placerat quis.
			</p>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl">Тренды в украшениях</h2>
					<div className="overflow-hidden relative rounded-2xl h-72">
						<Image
							src="/images/slide.png"
							alt="О нас / Изображение - 1"
							fill
						/>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
						a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
						consequat sed eu felis.
					</p>
					<ul className="pl-10 flex flex-col gap-2.5 list-disc">
						<li className="text-base">
							consectetur adipiscing elit. Aliquam placerat
						</li>
						<li className="text-base">
							consectetur adipiscing elit. Aliquam placerat
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl">Сделано с любовью</h2>
					<div className="overflow-hidden relative rounded-2xl h-72">
						<Image
							src="/images/slide-2.png"
							alt="О нас / Изображение - 2"
							fill
						/>
					</div>
				</div>
				<p className="text-base">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
					maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
					consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
					in molestie diam bibendu.
				</p>
			</div>
		</div>
	)
}
