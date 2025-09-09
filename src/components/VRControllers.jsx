import React from 'react'
import { useXR, useXRInputSourceState } from '@react-three/xr'
import { Sphere, Box } from '@react-three/drei'

function VRControllers() {
  const { isPresenting } = useXR()
  
  if (!isPresenting) return null
  
  // The @pmndrs/xr library handles controllers automatically through the store configuration
  // Custom controller rendering can be done via the store's controller option
  return null
}

export default VRControllers