import React from 'react'
import { Entity } from 'aframe-react'
import { useCalculatorStore, useUIStore, useParametricFunctionStore } from '../../store'
import CalcButton from './CalcButton'

const Calculator = () => {
  const visible = useUIStore((state) => state.calculatorVisible)
  const displayText = useCalculatorStore((state) => state.displayText)
  const writeText = useCalculatorStore((state) => state.writeText)
  const backspace = useCalculatorStore((state) => state.backspace)
  const clearText = useCalculatorStore((state) => state.clearText)
  const setEquation = useParametricFunctionStore((state) => state.setEquation)
  
  if (!visible) return null
  
  const handleEnter = () => {
    if (displayText) {
      setEquation(displayText)
    }
  }
  
  const buttons = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', '.', '=', '/'],
    ['x', 'y', 'z', '^'],
    ['(', ')', 'C', '←'],
    ['sin', 'cos', 'tan', 'Enter']
  ]
  
  return (
    <Entity position={{ x: 1, y: 1.5, z: -1 }}>
      <Entity
        geometry={{ primitive: 'plane', width: 1.2, height: 0.2 }}
        material={{ color: '#333' }}
        text={{
          value: displayText || '0',
          color: '#FFF',
          align: 'center',
          width: 3
        }}
        position={{ x: 0, y: 0.5, z: 0.01 }}
      />
      
      {buttons.map((row, rowIndex) => (
        row.map((btn, colIndex) => (
          <CalcButton
            key={`${rowIndex}-${colIndex}`}
            text={btn}
            position={{
              x: (colIndex - 1.5) * 0.3,
              y: -rowIndex * 0.25,
              z: 0
            }}
            onClick={() => {
              if (btn === 'C') clearText()
              else if (btn === '←') backspace()
              else if (btn === 'Enter' || btn === '=') handleEnter()
              else writeText(btn)
            }}
          />
        ))
      ))}
    </Entity>
  )
}

export default Calculator