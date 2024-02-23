import { createJSONStorage, persist } from 'zustand/middleware'
import { create, StateCreator, useStore } from 'zustand'

interface ISessionState {
	accessToken: string | null
	setAccessToken: (accessToken: string) => void
}

const sessionSlice: StateCreator<
	ISessionState,
	[['zustand/persist', unknown]]
> = set => ({
	accessToken: null,
	setAccessToken: accessToken =>
		set(state => {
			return { accessToken: (state.accessToken = accessToken) }
		}),
})

export type ExtractState<S> = S extends {
	getState: () => infer T
}
	? T
	: never

const accessTokenSelector = (state: ExtractState<typeof useSessionStore>) =>
	state.accessToken
export const useAccessToken = () => useSessionStore(accessTokenSelector)

export const useSessionStore = create<ISessionState>()(
	persist(sessionSlice, {
		name: 'session-storage',
		storage: createJSONStorage(() => sessionStorage),
	}),
)
