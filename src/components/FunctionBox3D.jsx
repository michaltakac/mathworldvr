import React from 'react'
import { Box } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

function FunctionBox3D({ position = [0, 1, 0], children }) {
  return (
    <group position={position}>
      <RigidBody type="fixed">
        <Box args={[3, 0.1, 3]} position={[0, -0.5, 0]}>
          <meshStandardMaterial 
            color="#2a2a2a"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </Box>
      </RigidBody>
      
      <group position={[0, 0.5, 0]}>
        {children}
      </group>
    </group>
  )
}

export default FunctionBox3D