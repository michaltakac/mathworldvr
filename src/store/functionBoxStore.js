import { create } from 'zustand'

const useFunctionBoxStore = create((set) => ({
  position: { x: 0, y: 1.6, z: -2 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  
  setPosition: (position) => set({ position }),
  
  updatePosition: (updates) => set((state) => ({
    position: { ...state.position, ...updates }
  })),
  
  setRotation: (rotation) => set({ rotation }),
  
  setScale: (scale) => set({ scale })
}))

export default useFunctionBoxStore