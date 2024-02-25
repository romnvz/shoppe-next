import { createJSONStorage, persist } from 'zustand/middleware'
import { create, StateCreator } from 'zustand'

import { ICartItem } from './types'
import { IProduct } from '@/shared/api/services/product'

interface ICartState {
	cartItems: ICartItem[]
	addItemToCart: (product: IProduct) => void
	increaseQuantity: (productSku: number) => void
	decreaseQuantity: (productSku: number) => void
	removeItemFromCart: (sku: number) => void
	clearCartData: () => void
}

const cartSlice: StateCreator<
	ICartState,
	[['zustand/persist', unknown]]
> = set => ({
	cartItems: [],
	addItemToCart: item =>
		set(state => {
			const itemExists = state.cartItems.find(
				cartItem => cartItem.product.sku === item.sku,
			)

			if (itemExists) {
				return { items: [...state.cartItems] }
			}

			return { cartItems: [...state.cartItems, { product: item, quantity: 1 }] }
		}),
	increaseQuantity: productSku =>
		set(state => {
			const itemExists = state.cartItems.find(
				cartItem => cartItem.product.sku === productSku,
			)

			if (itemExists) {
				if (typeof itemExists.quantity === 'number') {
					itemExists.quantity++
				}

				return { cartItems: [...state.cartItems] }
			}

			return { cartItems: [...state.cartItems] }
		}),
	decreaseQuantity: productSku =>
		set(state => {
			const itemExists = state.cartItems.find(
				cartItem => cartItem.product.sku === productSku,
			)

			if (itemExists) {
				if (typeof itemExists.quantity === 'number') {
					if (itemExists.quantity === 1) {
						return { cartItems: [...state.cartItems] }
					}
					itemExists.quantity--
				}
			}

			return { cartItems: [...state.cartItems] }
		}),
	removeItemFromCart: productSku =>
		set(state => {
			const itemExists = state.cartItems.find(
				cartItem => cartItem.product.sku === productSku,
			)

			if (itemExists) {
				if (typeof itemExists.quantity === 'number') {
					const indexItem = state.cartItems.indexOf(itemExists)
					if (indexItem > -1) {
						state.cartItems.splice(indexItem, 1)
					}
				}
			}

			return { cartItems: [...state.cartItems] }
		}),
	clearCartData: () => set(() => ({ cartItems: [] })),
})

export const selectCartTotalPrice = () => {
	return useCartStore.getState().cartItems.reduce((acc, item) => {
		return (acc += item.quantity * item.product.price)
	}, 0)
}

export const selectProductInCart = (sku: number): ICartItem | undefined => {
	return useCartStore.getState().cartItems.find(p => p.product.sku === sku)
}

export const useCartStore = create<ICartState>()(
	persist(cartSlice, {
		name: 'cart-storage',
		storage: createJSONStorage(() => localStorage),
	}),
)
