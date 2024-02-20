import { createJSONStorage, persist } from 'zustand/middleware'
import { create, StateCreator } from 'zustand'

import { IProduct } from '@/shared/api'

interface ICartItem {
	product: {
		sku: IProduct['sku']
		price: IProduct['price']
	}
	quantity: number
}

interface ICartState {
	items: ICartItem[]
	addOneItem: (product: IProduct) => void
	removeOneItem: (sku: IProduct['sku']) => void
	removeItem: (sku: IProduct['sku']) => void
	clearCartData: () => void
}

const cartSlice: StateCreator<
	ICartState,
	[['zustand/persist', unknown]]
> = set => ({
	items: [],
	addOneItem: product =>
		set(state => {
			const item = state.items.find(i => i.product.sku === product.sku)
			if (!item) {
				return { items: [...state.items, { product, quantity: 1 }] }
			}

			item.quantity += 1

			return {
				items: [...state.items],
			}
		}),
	removeOneItem: sku =>
		set(state => {
			const item = state.items.find(i => i.product.sku === sku)
			if (!item) {
				throw new Error('Product not found!')
			}

			if (item.quantity > 1) {
				item.quantity -= 1
			}

			return {
				items: [...state.items],
			}
		}),
	removeItem: sku =>
		set(state => {
			const item = state.items.find(i => i.product.sku === sku)
			if (!item) {
				throw new Error('Product not found!')
			}
			const indexItem = state.items.indexOf(item)
			if (indexItem > -1) {
				state.items.splice(indexItem, 1)
			}

			return {
				items: [...state.items],
			}
		}),
	clearCartData: () => set(() => ({ items: [] })),
})

export const selectCartTotalPrice = () => {
	return useCartStore.getState().items.reduce((acc, item) => {
		return (acc += item.quantity * item.product.price)
	}, 0)
}

export const selectProductInCart = (sku: number): ICartItem | undefined => {
	return useCartStore.getState().items.find(p => p.product.sku === sku)
}

export const useCartStore = create<ICartState>()(
	persist(cartSlice, {
		name: 'cart-storage',
		storage: createJSONStorage(() => localStorage),
	}),
)
