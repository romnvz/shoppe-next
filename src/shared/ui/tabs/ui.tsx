'use client'

import { Fragment, ReactNode } from 'react'
import clsx from 'clsx'

export interface ITabItem {
	label: string
	content: ReactNode
}

interface ITabsProps {
	tabs: ITabItem[]
	activeTab: string
	setActiveTab: (activeTab: string) => void
}

export const Tabs = ({ tabs, activeTab, setActiveTab }: ITabsProps) => {
	return (
		<div className="flex flex-col gap-16">
			<div className="flex items-center gap-16 pb-6 border-b text-zinc-500">
				{tabs.map(({ label }) => (
					<Fragment key={label}>
						<button
							className={clsx('text-xl', {
								'text-black': activeTab === label,
							})}
							onClick={() => setActiveTab(label)}
						>
							{label}
						</button>
					</Fragment>
				))}
			</div>
			{tabs.map(({ label, content }) => (
				<Fragment key={label}>{activeTab === label ? content : null}</Fragment>
			))}
		</div>
	)
}
