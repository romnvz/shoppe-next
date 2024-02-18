'use client'

import { useState } from 'react'

import { UiTabs, ITabItem } from '@/shared/ui'
import { Description } from './description'
import { Reviews } from './reviews'
import { IProduct } from '@/shared/api'

export const Tabs = ({ product }: { product: IProduct }) => {
	const tabs: ITabItem[] = [
		{
			label: 'Описание',
			content: <Description product={product} />,
		},
		{
			label: 'Отзывы',
			content: <Reviews product={product} />,
		},
	]
	const [activeTab, setActiveTab] = useState(tabs[1].label)

	return (
		<div className="container mx-auto max-w-7xl px-5 flex flex-col gap-16 mt-16">
			<UiTabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</div>
	)
}
