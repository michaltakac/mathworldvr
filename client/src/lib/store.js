import create from "zustand";

export const useStore = create((set) => ({
  equation: "x^2 + y^2",
  intersected: [],
  api: {
    updateEquation: (equation) => set(() => ({ equation })),
  },
}));
