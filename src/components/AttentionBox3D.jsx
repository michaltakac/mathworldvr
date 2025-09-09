import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box } from '@react-three/drei'
import { useUIStore } from '../store'

function AttentionBox3D({ position = [0, 1.5, -2] }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const setSettingsPanelVisible = useUIStore((state) => state.setSettingsPanelVisible)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })
  
  const handleClick = () => {
    setSettingsPanelVisible(true)
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
          color={hovered ? '#ff6b6b' : '#4ecdc4'}
          emissive={hovered ? '#ff6b6b' : '#4ecdc4'}
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
        Settings
      </Text>
    </group>
  )
}

export default AttentionBox3D