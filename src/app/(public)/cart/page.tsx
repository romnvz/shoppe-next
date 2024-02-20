import { Metadata } from 'next'

import { CartView } from '@/views/cart'

export const metadata: Metadata = {
	title: 'Заказы – Jwrly',
}

const Cart = () => <CartView />

export default Cart
