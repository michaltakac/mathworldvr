import React from 'react'
import { RigidBody } from '@react-three/rapier'

function Floor() {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial 
          color="#555555" 
          transparent 
          opacity={0.3}
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>
    </RigidBody>
  )
}

export default Floor