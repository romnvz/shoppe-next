import { StateCreator, create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IReviewState {
	fields: {
		email: string
		name: string
	}
	setFields: (fields: { email: string; name: string }) => void
}

const reviewSlice: StateCreator<
	IReviewState,
	[['zustand/persist', unknown]]
> = set => ({
	fields: {
		email: '',
		name: '',
	},
	setFields: newFields => set(() => ({ fields: newFields })),
})

export const useReviewStore = create<IReviewState>()(
	persist(reviewSlice, {
		name: 'review-storage',
		storage: createJSONStorage(() => localStorage),
	}),
)
