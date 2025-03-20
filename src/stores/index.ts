import { create } from "zustand";

interface IStore {
  count: number;
  addCount: () => void;
  removeCount: () => void;
}

export const useStore = create<IStore>()((set) => ({
  count: 0,
  addCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set((state) => ({ count: state.count - 1 })),
}));
