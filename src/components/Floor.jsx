import React from 'react'
import { RigidBody } from '@react-three/rapier'

function Floor() {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#777777" 
          transparent 
          opacity={0.2}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </RigidBody>
  )
}

export default Floor