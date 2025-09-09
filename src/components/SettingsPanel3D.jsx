import React, { useEffect } from 'react'
import { Html } from '@react-three/drei'
import { useControls, button } from 'leva'
import { useSettingsStore, useParametricFunctionStore, useCalculatorStore } from '../store'

function SettingsPanel3D({ position = [-2, 1.5, -1], rotation = [0, 0, 0] }) {
  const settings = useSettingsStore()
  const parametric = useParametricFunctionStore()
  const setCalculatorEquation = useCalculatorStore((state) => state.setEquation)
  
  // Create Leva controls
  const values = useControls('Settings', {
    xMin: { value: settings.xMin, min: -10, max: 0, step: 0.5 },
    xMax: { value: settings.xMax, min: 0, max: 10, step: 0.5 },
    yMin: { value: settings.yMin, min: -10, max: 0, step: 0.5 },
    yMax: { value: settings.yMax, min: 0, max: 10, step: 0.5 },
    segments: { value: settings.segments, min: 10, max: 100, step: 5 },
    wireframe: settings.wireframe,
    showGrid: settings.showGrid,
    expression: { value: parametric.expression },
    'Reset Defaults': button(() => {
      settings.setXMin(-5)
      settings.setXMax(5)
      settings.setYMin(-5)
      settings.setYMax(5)
      settings.setSegments(50)
      settings.setWireframe(false)
      settings.setShowGrid(true)
    })
  })
  
  // Update store when Leva controls change
  useEffect(() => {
    settings.setXMin(values.xMin)
  }, [values.xMin])
  
  useEffect(() => {
    settings.setXMax(values.xMax)
  }, [values.xMax])
  
  useEffect(() => {
    settings.setYMin(values.yMin)
  }, [values.yMin])
  
  useEffect(() => {
    settings.setYMax(values.yMax)
  }, [values.yMax])
  
  useEffect(() => {
    settings.setSegments(values.segments)
  }, [values.segments])
  
  useEffect(() => {
    settings.setWireframe(values.wireframe)
  }, [values.wireframe])
  
  useEffect(() => {
    settings.setShowGrid(values.showGrid)
  }, [values.showGrid])
  
  useEffect(() => {
    parametric.setExpression(values.expression)
    // Also update the calculator display
    setCalculatorEquation(values.expression)
  }, [values.expression, setCalculatorEquation])
  
  return null // Leva creates its own panel
}

export default SettingsPanel3D