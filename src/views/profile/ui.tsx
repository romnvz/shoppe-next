'use client'

import { useState } from 'react'

import { UiTabs } from '@/shared/ui'

export const ProfileView = () => {
	const tabs = [
		{
			label: 'Заказы',
			content: (
				<table className="w-full text-left text-black sm:table flex items-center justify-between">
					<thead className="sm:border-black sm:border-b-2">
						<tr className="bg-white sm:table-row flex flex-col">
							<th
								scope="col"
								className="py-3 text-black text-base font-normal"
							>
								Номер заказа
							</th>
							<th
								scope="col"
								className="py-3 text-black text-base font-normal"
							>
								Дата
							</th>
							<th
								scope="col"
								className="py-3 text-black text-base font-normal"
							>
								Статус
							</th>
							<th
								scope="col"
								className="py-3 text-black text-base font-normal"
							>
								Итог
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white sm:table-row flex flex-col sm:text-left text-right">
							<th
								scope="row"
								className="py-3 text-zinc-500 text-base font-normal"
							>
								1
							</th>
							<td className="py-3 text-zinc-500 text-base font-normal">
								8 мая 2024
							</td>
							<td className="py-3 text-zinc-500 text-base font-normal">
								Оформление
							</td>
							<td className="py-3 text-zinc-500 text-base font-normal">
								$ 105
							</td>
						</tr>
					</tbody>
				</table>
			),
		},
		{
			label: 'Отзывы',
			content: <div>po</div>,
		},
	]
	const [activeTab, setActiveTab] = useState(tabs[0].label)

	return (
		<div className="container mx-auto max-w-7xl px-5 mt-12 md:mt-24">
			<h1 className="hidden md:block text-3xl mb-20 text-center">
				Мой аккаунт
			</h1>

			<UiTabs
				className="gap-6"
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</div>
	)
}
