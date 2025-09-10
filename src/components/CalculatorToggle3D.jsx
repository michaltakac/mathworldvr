import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box } from '@react-three/drei'
import { useSettingsStore } from '../store'

function CalculatorToggle3D({ position = [-2, 1.5, -2] }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const toggleCalculator = useSettingsStore((state) => state.toggleCalculator)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })
  
  const handleClick = () => {
    toggleCalculator()
  }
  
  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[0.5, 0.5, 0.5]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? '#ff00ff' : '#9b59b6'}
          emissive={hovered ? '#ff00ff' : '#9b59b6'}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Calculator
      </Text>
    </group>
  )
}

export default CalculatorToggle3D