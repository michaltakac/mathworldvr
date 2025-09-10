import { create } from 'zustand'

const useSettingsStore = create((set) => ({
  xMin: -3,
  yMin: -3,
  zMin: -3,
  xMax: 3,
  yMax: 3,
  zMax: 3,
  segments: 20,
  functionColor: '#4CAF50',
  useGradient: false,
  gradientColor1: '#4CAF50',
  gradientColor2: '#2196F3',
  gradientDirection: 'vertical', // 'vertical', 'horizontal', 'radial'
  wireframe: false,
  showGrid: true,
  showSettings: true,
  showCalculator: true,
  
  setXMin: (xMin) => set({ xMin }),
  setYMin: (yMin) => set({ yMin }),
  setZMin: (zMin) => set({ zMin }),
  setXMax: (xMax) => set({ xMax }),
  setYMax: (yMax) => set({ yMax }),
  setZMax: (zMax) => set({ zMax }),
  setSegments: (segments) => set({ segments }),
  setFunctionColor: (functionColor) => set({ functionColor }),
  setUseGradient: (useGradient) => set({ useGradient }),
  setGradientColor1: (gradientColor1) => set({ gradientColor1 }),
  setGradientColor2: (gradientColor2) => set({ gradientColor2 }),
  setGradientDirection: (gradientDirection) => set({ gradientDirection }),
  setWireframe: (wireframe) => set({ wireframe }),
  setShowGrid: (showGrid) => set({ showGrid }),
  toggleSettings: () => set((state) => ({ showSettings: !state.showSettings })),
  toggleCalculator: () => set((state) => ({ showCalculator: !state.showCalculator })),
  
  updateSettings: (updates) => set((state) => ({
    ...state,
    ...updates
  }))
}))

export default useSettingsStore