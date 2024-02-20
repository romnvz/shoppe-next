import { Metadata } from 'next'

import { WishlistView } from '@/views/wishlist'

export const metadata: Metadata = {
	title: 'Избранное – Jwrly',
}

const Wishlist = () => <WishlistView />

export default Wishlist
