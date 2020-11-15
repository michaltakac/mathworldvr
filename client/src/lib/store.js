import create from "zustand";

export const useStore = create((set) => ({
  equation: "x^2 + y^2",
  updateEquation: (equation) => set(() => ({ equation })),
}))
