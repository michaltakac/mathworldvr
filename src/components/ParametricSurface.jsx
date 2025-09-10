import React, { useMemo, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useSettingsStore, useParametricFunctionStore } from '../store'
import { evaluate } from 'mathjs'

function ParametricSurface() {
  const meshRef = useRef()
  const { 
    xMin, xMax, yMin, yMax, segments, wireframe, 
    functionColor, useGradient, gradientColor1, gradientColor2, gradientDirection 
  } = useSettingsStore()
  const { expression } = useParametricFunctionStore()
  
  const geometry = useMemo(() => {
    const geo = new ParametricGeometry(
      (u, v, target) => {
        const x = xMin + u * (xMax - xMin)
        const y = yMin + v * (yMax - yMin)
        
        let z = 0
        try {
          z = evaluate(expression, { x, y })
        } catch (e) {
          z = Math.sin(x) * Math.cos(y) // Fallback function
        }
        
        target.set(x, z, y)
      },
      segments,
      segments
    )
    
    geo.computeVertexNormals()
    return geo
  }, [xMin, xMax, yMin, yMax, segments, expression])
  
  // Create gradient texture if needed
  const gradientTexture = useMemo(() => {
    if (!useGradient) return null
    
    // Validate colors
    const isValidColor = (color) => /^#[0-9A-Fa-f]{6}$/.test(color)
    const safeColor1 = isValidColor(gradientColor1) ? gradientColor1 : '#4CAF50'
    const safeColor2 = isValidColor(gradientColor2) ? gradientColor2 : '#2196F3'
    
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const context = canvas.getContext('2d')
    
    let gradient
    if (gradientDirection === 'radial') {
      gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128)
    } else if (gradientDirection === 'horizontal') {
      gradient = context.createLinearGradient(0, 0, 256, 0)
    } else {
      gradient = context.createLinearGradient(0, 0, 0, 256)
    }
    
    gradient.addColorStop(0, safeColor1)
    gradient.addColorStop(1, safeColor2)
    
    context.fillStyle = gradient
    context.fillRect(0, 0, 256, 256)
    
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [useGradient, gradientColor1, gradientColor2, gradientDirection])
  
  // Remove automatic rotation - controlled by user interaction only
  
  return (
    <group>
      <mesh 
        ref={meshRef}
        geometry={geometry}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={useGradient ? '#ffffff' : (functionColor && /^#[0-9A-Fa-f]{6}$/.test(functionColor) ? functionColor : '#4CAF50')}
          map={gradientTexture}
          wireframe={wireframe}
          roughness={0.4}
          metalness={0.6}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
          side={THREE.DoubleSide}
          vertexColors={false}
        />
      </mesh>
      
      {/* Wireframe is now controlled by the wireframe prop in material */}
    </group>
  )
}

// Create ParametricGeometry since it's not in Three.js core anymore
class ParametricGeometry extends THREE.BufferGeometry {
  constructor(func, slices, stacks) {
    super()
    
    const vertices = []
    const normals = []
    const uvs = []
    const indices = []
    
    const sliceCount = slices + 1
    
    for (let i = 0; i <= stacks; i++) {
      const v = i / stacks
      
      for (let j = 0; j <= slices; j++) {
        const u = j / slices
        
        const p = new THREE.Vector3()
        func(u, v, p)
        vertices.push(p.x, p.y, p.z)
        
        normals.push(0, 0, 1)
        uvs.push(u, v)
      }
    }
    
    for (let i = 0; i < stacks; i++) {
      for (let j = 0; j < slices; j++) {
        const a = i * sliceCount + j
        const b = i * sliceCount + j + 1
        const c = (i + 1) * sliceCount + j + 1
        const d = (i + 1) * sliceCount + j
        
        indices.push(a, b, d)
        indices.push(b, c, d)
      }
    }
    
    this.setIndex(indices)
    this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
    this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  }
}

// THREE.ParametricGeometry = ParametricGeometry // Not needed

export default ParametricSurface