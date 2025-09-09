import { create } from 'zustand'

const useSettingsStore = create((set) => ({
  xMin: -3,
  yMin: -3,
  zMin: -3,
  xMax: 3,
  yMax: 3,
  zMax: 3,
  segments: 20,
  functionColor: '#3498db',
  wireframe: false,
  showGrid: true,
  
  setXMin: (xMin) => set({ xMin }),
  setYMin: (yMin) => set({ yMin }),
  setZMin: (zMin) => set({ zMin }),
  setXMax: (xMax) => set({ xMax }),
  setYMax: (yMax) => set({ yMax }),
  setZMax: (zMax) => set({ zMax }),
  setSegments: (segments) => set({ segments }),
  setFunctionColor: (functionColor) => set({ functionColor }),
  setWireframe: (wireframe) => set({ wireframe }),
  setShowGrid: (showGrid) => set({ showGrid }),
  
  updateSettings: (updates) => set((state) => ({
    ...state,
    ...updates
  }))
}))

export default useSettingsStore