import { createJSONStorage, persist } from 'zustand/middleware'
import { create, StateCreator } from 'zustand'

import { IProduct } from '@/shared/api'

interface IWishlistState {
	products: number[]
	toggleWishlistProduct: (productSku: number) => void
}

const wishlistSlice: StateCreator<
	IWishlistState,
	[['zustand/persist', unknown]]
> = set => ({
	products: [],
	toggleWishlistProduct: sku =>
		set(state => {
			if (state.products.includes(sku)) {
				const index = state.products.indexOf(sku)
				if (index > -1) {
					state.products.splice(index, 1)

					return {
						products: [...state.products],
					}
				}
			}

			return { products: [...state.products, sku] }
		}),
})

export const selectIsInWishlist = (sku: number) => {
	if (useWishlistStore.getState().products.includes(sku)) {
		return true
	}

	return false
}

export const useWishlistStore = create<IWishlistState>()(
	persist(wishlistSlice, {
		name: 'wishlist-storage',
		storage: createJSONStorage(() => localStorage),
	}),
)
