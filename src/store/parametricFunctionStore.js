import { create } from 'zustand'

const useParametricFunctionStore = create((set) => ({
  expression: 'sin(x) * cos(y)',
  equation: 'x^2 + y^2',
  parsedEquation: null,
  
  setExpression: (expression) => set({ 
    expression 
  }),
  
  setEquation: (equation) => set({ 
    equation,
    parsedEquation: null 
  }),
  
  setParsedEquation: (parsedEquation) => set({ 
    parsedEquation 
  })
}))

export default useParametricFunctionStore