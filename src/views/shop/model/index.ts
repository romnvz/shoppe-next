import { create } from 'zustand'

interface IFiltersState {
	categoryId: number
	discounted: boolean
	setCategoryId: (categoryId: number) => void
	setDiscounted: () => void
	setFilters: (params: { categoryId: number; discounted: boolean }) => void
}

export const useFiltersStore = create<IFiltersState>()(set => ({
	categoryId: 0,
	discounted: false,
	setCategoryId: id => set(() => ({ categoryId: id })),
	setDiscounted: () => set(state => ({ discounted: !state.discounted })),
	setFilters: params =>
		set(() => ({
			categoryId: params.categoryId,
			discounted: params.discounted,
		})),
}))
