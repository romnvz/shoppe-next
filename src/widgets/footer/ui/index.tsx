'use client'

import toast from 'react-hot-toast'

import { Form } from './form'
import { Links } from './links'
import { Nav } from './nav'

export const Footer = () => {
	const t = () =>
		toast.success('Ваш email подписан на новости и уведомления', {
			duration: 4000,
			position: 'bottom-center',
			iconTheme: {
				primary: '#A18A68',
				secondary: '#FFFFFF',
			},
			style: {
				color: '#707070',
				backgroundColor: '#EFEFEF',
			},
		})

	return (
		<footer className="mt-12">
			<div className="container mx-auto max-w-7xl p-5 md:mb-6 flex flex-col gap-6 md:before:border-t">
				<div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
					<Nav />
					<Form />
				</div>
				<div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
					<div onClick={t}>&copy; 2024 Shoppe</div>
					<Links />
				</div>
			</div>
		</footer>
	)
}
