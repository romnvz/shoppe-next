import { Metadata } from 'next'

import { NotFoundPage } from '@/views/not-found'

export const metadata: Metadata = {
	title: 'Jwrly | Страница не найдена',
}

const NotFound = () => <NotFoundPage />

export default NotFound
