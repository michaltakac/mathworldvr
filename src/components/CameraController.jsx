import React, { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useUIStore } from '../store'

// Define keyboard controls
const KEYS = {
  forward: 'w',
  backward: 's',
  left: 'a',
  right: 'd',
  up: 'q',
  down: 'e',
  rotateLeft: 'ArrowLeft',
  rotateRight: 'ArrowRight',
  rotateUp: 'ArrowUp',
  rotateDown: 'ArrowDown',
  toggleSettings: 'p'
}

function CameraController() {
  const { camera } = useThree()
  const velocity = useRef({ x: 0, y: 0, z: 0 })
  const rotation = useRef({ x: 0, y: 0 })
  const setSettingsPanelVisible = useUIStore((state) => state.setSettingsPanelVisible)
  const settingsPanelVisible = useUIStore((state) => state.settingsPanelVisible)
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      const speed = 0.1
      const rotSpeed = 0.02
      
      // Use event.key directly for arrow keys, lowercase for letters
      const key = event.key.startsWith('Arrow') ? event.key : event.key.toLowerCase()
      
      switch(key) {
        case KEYS.forward:
          velocity.current.z = -speed
          break
        case KEYS.backward:
          velocity.current.z = speed
          break
        case KEYS.left:
          velocity.current.x = -speed
          break
        case KEYS.right:
          velocity.current.x = speed
          break
        case KEYS.up:
          velocity.current.y = speed
          break
        case KEYS.down:
          velocity.current.y = -speed
          break
        case KEYS.rotateLeft:
          rotation.current.y = rotSpeed
          break
        case KEYS.rotateRight:
          rotation.current.y = -rotSpeed
          break
        case KEYS.rotateUp:
          rotation.current.x = rotSpeed
          break
        case KEYS.rotateDown:
          rotation.current.x = -rotSpeed
          break
        case KEYS.toggleSettings:
          setSettingsPanelVisible(!settingsPanelVisible)
          break
      }
    }
    
    const handleKeyUp = (event) => {
      // Use event.key directly for arrow keys, lowercase for letters
      const key = event.key.startsWith('Arrow') ? event.key : event.key.toLowerCase()
      
      switch(key) {
        case KEYS.forward:
        case KEYS.backward:
          velocity.current.z = 0
          break
        case KEYS.left:
        case KEYS.right:
          velocity.current.x = 0
          break
        case KEYS.up:
        case KEYS.down:
          velocity.current.y = 0
          break
        case KEYS.rotateLeft:
        case KEYS.rotateRight:
          rotation.current.y = 0
          break
        case KEYS.rotateUp:
        case KEYS.rotateDown:
          rotation.current.x = 0
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [settingsPanelVisible, setSettingsPanelVisible])
  
  useFrame(() => {
    // Apply movement
    camera.position.x += velocity.current.x
    camera.position.y += velocity.current.y
    camera.position.z += velocity.current.z
    
    // Apply rotation
    camera.rotation.x += rotation.current.x
    camera.rotation.y += rotation.current.y
  })
  
  return null
}

export default CameraController