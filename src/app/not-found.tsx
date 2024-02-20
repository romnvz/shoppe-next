import { Metadata } from 'next'

import { NotFoundView } from '@/views/not-found'

export const metadata: Metadata = {
	title: 'Jwrly | Страница не найдена',
}

const NotFound = () => <NotFoundView />

export default NotFound
