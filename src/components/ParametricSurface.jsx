import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useSettingsStore, useParametricFunctionStore } from '../store'
import { evaluate } from 'mathjs'

function ParametricSurface() {
  const meshRef = useRef()
  const { xMin, xMax, yMin, yMax, segments, wireframe, showGrid } = useSettingsStore()
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
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })
  
  return (
    <group>
      <mesh 
        ref={meshRef}
        geometry={geometry}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#4CAF50"
          wireframe={wireframe}
          roughness={0.4}
          metalness={0.6}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {showGrid && (
        <lineSegments geometry={geometry}>
          <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
        </lineSegments>
      )}
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