import { create } from 'zustand'

interface IHeaderState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useHeaderStore = create<IHeaderState>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}))
