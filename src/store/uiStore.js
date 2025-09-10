import { create } from 'zustand'

const useUIStore = create((set) => ({
  attentionBoxVisible: true,
  calculatorVisible: true,
  settingsPanelVisible: true,  // Start visible by default
  vrMode: false,
  handTracking: false,
  
  toggleAttentionBox: () => set((state) => ({ 
    attentionBoxVisible: !state.attentionBoxVisible 
  })),
  
  setAttentionBoxVisible: (visible) => set({ 
    attentionBoxVisible: visible 
  }),
  
  toggleCalculator: () => set((state) => ({ 
    calculatorVisible: !state.calculatorVisible 
  })),
  
  toggleSettingsPanel: () => set((state) => ({ 
    settingsPanelVisible: !state.settingsPanelVisible 
  })),
  
  setSettingsPanelVisible: (visible) => set({ 
    settingsPanelVisible: visible 
  }),
  
  setVRMode: (vrMode) => set({ vrMode }),
  
  setHandTracking: (handTracking) => set({ handTracking })
}))

export default useUIStore