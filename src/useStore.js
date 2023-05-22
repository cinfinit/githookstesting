import { create } from "zustand";
const simpleState = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});
const useStore = create(simpleState);
export default useStore;
