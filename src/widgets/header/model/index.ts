import { create } from "zustand";

interface HeaderState {
	isOpen: boolean
	toggle: () => void
	close: () => void
}

export const useHeaderStore = create<HeaderState>((set) => ({
	isOpen: false,
	toggle: () => set(() => ({ isOpen: true })),
	close: () => set(() => ({ isOpen: false }))
}))