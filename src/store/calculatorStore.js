import { create } from 'zustand'
import * as math from 'mathjs'

const useCalculatorStore = create((set, get) => ({
  displayValue: '',
  equation: '',
  result: '',
  
  appendToEquation: (value) => set((state) => {
    const newEquation = state.equation + value
    return {
      equation: newEquation,
      displayValue: newEquation
    }
  }),
  
  appendNumber: (num) => set((state) => ({
    equation: state.equation + num,
    displayValue: state.equation + num
  })),
  
  setOperation: (op) => set((state) => ({
    equation: state.equation + op,
    displayValue: state.equation + op
  })),
  
  addFunction: (func) => set((state) => {
    // Add mathematical functions with proper syntax
    let addition = ''
    switch(func) {
      case 'sin':
      case 'cos':
      case 'tan':
      case 'log':
      case 'ln':
      case 'sqrt':
        addition = func + '('
        break
      case 'pi':
        addition = 'π'
        break
      case 'e':
        addition = 'e'
        break
      case '^':
        addition = '^'
        break
      case '(':
      case ')':
        addition = func
        break
      default:
        addition = func
    }
    return {
      equation: state.equation + addition,
      displayValue: state.equation + addition
    }
  }),
  
  calculate: () => set((state) => {
    try {
      // Check if equation contains x or y variables
      const hasVariables = /[xy]/.test(state.equation)
      
      if (hasVariables) {
        // This is a function expression, update the parametric function store
        const parametricStore = get().parametricFunctionStore
        if (parametricStore) {
          // Convert display symbols to math.js compatible ones
          let expression = state.equation
            .replace(/π/g, 'pi')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/√/g, 'sqrt')
          
          parametricStore.setExpression(expression)
          
          return {
            displayValue: 'f(x,y) = ' + state.equation,
            result: expression,
            equation: state.equation
          }
        }
      } else {
        // Regular calculation without variables
        let expression = state.equation
          .replace(/π/g, 'pi')
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/ln/g, 'log')
          .replace(/√/g, 'sqrt')
        
        const result = math.evaluate(expression)
        return {
          displayValue: state.equation + ' = ' + result,
          result: String(result),
          equation: String(result)
        }
      }
    } catch (error) {
      return {
        displayValue: 'Error',
        result: 'Error',
        equation: ''
      }
    }
  }),
  
  // Add reference to parametric function store
  setParametricFunctionStore: (store) => set({ parametricFunctionStore: store }),
  
  clear: () => set({
    displayValue: '',
    equation: '',
    result: ''
  }),
  
  backspace: () => set((state) => {
    const newEquation = state.equation.slice(0, -1)
    return {
      equation: newEquation,
      displayValue: newEquation
    }
  }),
  
  setEquation: (equation) => set({
    equation: equation,
    displayValue: equation
  }),
  
  // Keep the old functions for compatibility with other components
  displayText: 'x^2 + y^2',
  
  writeText: (text) => set((state) => ({ 
    displayText: state.displayText + text 
  })),
  
  backspace: () => set((state) => ({ 
    displayText: state.displayText.slice(0, -1) 
  })),
  
  clearText: () => set({ 
    displayText: '' 
  }),
  
  setDisplayText: (text) => set({ 
    displayText: text 
  })
}))

// Helper function for calculations
function calculate(firstValue, secondValue, operation) {
  switch (operation) {
    case '+':
      return firstValue + secondValue
    case '-':
      return firstValue - secondValue
    case '*':
      return firstValue * secondValue
    case '/':
      return secondValue !== 0 ? firstValue / secondValue : 0
    default:
      return secondValue
  }
}

export default useCalculatorStore