import { create } from "zustand"

const useLearnPathStore = create((set) => ({
  path: 0,
  setPath: (value) => set({ path: value }),
  increment: () => set((state) => ({ path: state.path + 1 })),
  decrement: () => set((state) => ({ path: state.path - 1 })),
}))

export default useLearnPathStore
