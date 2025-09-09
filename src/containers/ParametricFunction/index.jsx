import React from 'react'
import { Entity } from 'aframe-react'
import { useParametricFunctionStore, useSettingsStore } from '../../store'

const ParametricFunction = () => {
  const equation = useParametricFunctionStore((state) => state.equation)
  const {
    xMin, xMax, yMin, yMax, zMin, zMax,
    segments, functionColor, wireframe, showGrid
  } = useSettingsStore()
  
  return (
    <>
      {equation && (
        <Entity
          geometry={{
            primitive: 'parametricfunction',
            equation: equation,
            xMin, xMax, yMin, yMax, zMin, zMax,
            segments
          }}
          material={{
            color: functionColor,
            wireframe: wireframe,
            side: 'double',
            metalness: 0.2,
            roughness: 0.8
          }}
          position={{ x: 0, y: 0, z: 0 }}
        />
      )}
      
      {showGrid && (
        <Entity
          geometry={{
            primitive: 'plane',
            width: xMax - xMin,
            height: yMax - yMin
          }}
          material={{
            color: '#666666',
            wireframe: true,
            opacity: 0.3,
            transparent: true
          }}
          rotation={{ x: -90, y: 0, z: 0 }}
          position={{ x: 0, y: -0.01, z: 0 }}
        />
      )}
    </>
  )
}

export default ParametricFunction