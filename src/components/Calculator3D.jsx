import React, { useEffect } from 'react'
import { Box, Text, RoundedBox } from '@react-three/drei'
import { useCalculatorStore, useParametricFunctionStore } from '../store'

function Calculator3D({ position = [2, 1.5, -1] }) {
  const { 
    displayValue, 
    appendNumber, 
    setOperation, 
    calculate, 
    clear,
    addFunction,
    backspace,
    setParametricFunctionStore: setParamStore
  } = useCalculatorStore()
  
  const parametricStore = useParametricFunctionStore()
  const setEquation = useCalculatorStore((state) => state.setEquation)
  
  // Connect the stores and initialize with current expression
  useEffect(() => {
    setParamStore(parametricStore)
    // Initialize calculator with current expression
    if (parametricStore.expression) {
      setEquation(parametricStore.expression)
    }
  }, [setParamStore, parametricStore, setEquation])
  
  // Scientific calculator layout with x and y variables
  const buttons = [
    ['sin', 'cos', 'tan', 'ln', 'log'],
    ['√', '^', 'π', 'e', '(', ')'],
    ['x', 'y', '9', '÷', 'C'],
    ['7', '8', '6', '×', '⌫'],
    ['4', '5', '3', '-', ''],
    ['1', '2', '0', '+', ''],
    ['.', '', '', '=', '']
  ]
  
  const handleButtonClick = (value) => {
    if (value === '=') {
      calculate()
    } else if (value === 'C') {
      clear()
    } else if (value === '⌫') {
      backspace()
    } else if (['+', '-', '×', '÷'].includes(value)) {
      setOperation(value)
    } else if (['sin', 'cos', 'tan', 'ln', 'log', '√', '^', 'π', 'e', '(', ')'].includes(value)) {
      addFunction(value)
    } else if (['x', 'y'].includes(value)) {
      // Add x or y as variables
      appendNumber(value)
    } else if (value !== '') {
      appendNumber(value)
    }
  }
  
  const getButtonColor = (button) => {
    if (button === 'C') return '#ff4444'
    if (button === '⌫') return '#ff8844'
    if (button === '=') return '#44ff44'
    if (['+', '-', '×', '÷'].includes(button)) return '#4CAF50'
    if (['sin', 'cos', 'tan', 'ln', 'log', '√', '^', 'π', 'e', '(', ')'].includes(button)) return '#2196F3'
    if (['x', 'y'].includes(button)) return '#ff00ff'  // Purple for variables
    return '#3a3a3a'
  }
  
  const getButtonWidth = (button, rowIndex, colIndex) => {
    // Make some buttons wider
    if (button === '0' && rowIndex === 5) return 0.75
    if (button === '=' && rowIndex === 5) return 0.75
    return 0.35
  }
  
  return (
    <group position={position}>
      {/* Calculator Body */}
      <RoundedBox args={[3, 3.5, 0.3]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      
      {/* Display */}
      <RoundedBox 
        args={[2.7, 0.5, 0.1]} 
        position={[0, 1.4, 0.16]}
        radius={0.02}
      >
        <meshStandardMaterial color="#2a2a2a" />
      </RoundedBox>
      
      <Text
        position={[0, 1.4, 0.22]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        {displayValue || '0'}
      </Text>
      
      {/* Buttons */}
      {buttons.map((row, rowIndex) => (
        row.map((button, colIndex) => {
          if (button === '') return null
          
          const buttonWidth = getButtonWidth(button, rowIndex, colIndex)
          const spacing = 0.4
          const startX = -1.2
          const x = startX + colIndex * spacing + (buttonWidth > 0.35 ? (buttonWidth - 0.35) / 2 : 0)
          const y = 0.9 - rowIndex * 0.4
          
          return (
            <group key={`${rowIndex}-${colIndex}`}>
              <RoundedBox
                args={[buttonWidth, 0.35, 0.1]}
                position={[x, y, 0.16]}
                radius={0.02}
                onClick={() => handleButtonClick(button)}
                onPointerOver={(e) => {
                  e.stopPropagation()
                  document.body.style.cursor = 'pointer'
                }}
                onPointerOut={(e) => {
                  e.stopPropagation()
                  document.body.style.cursor = 'auto'
                }}
              >
                <meshStandardMaterial 
                  color={getButtonColor(button)}
                  metalness={0.6}
                  roughness={0.3}
                />
              </RoundedBox>
              
              <Text
                position={[x, y, 0.22]}
                fontSize={button.length > 2 ? 0.1 : 0.13}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {button}
              </Text>
            </group>
          )
        })
      ))}
    </group>
  )
}

export default Calculator3D