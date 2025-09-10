import React, { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'
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
  
  // Initialize keyboard shortcuts as enabled by default
  useEffect(() => {
    window.keyboardShortcutsEnabled = true;
  }, [])
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Skip if keyboard shortcuts are disabled (e.g., when input is focused)
      if (window.keyboardShortcutsEnabled === false) {
        return;
      }
      
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
      // Skip if keyboard shortcuts are disabled (e.g., when input is focused)
      if (window.keyboardShortcutsEnabled === false) {
        return;
      }
      
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
    // Apply rotation first
    camera.rotation.x += rotation.current.x
    camera.rotation.y += rotation.current.y
    
    // Apply movement relative to camera's current orientation
    // Create direction vectors based on camera's rotation
    const forward = new THREE.Vector3(0, 0, -1)
    const right = new THREE.Vector3(1, 0, 0)
    const up = new THREE.Vector3(0, 1, 0)
    
    // Apply camera's rotation to direction vectors
    forward.applyQuaternion(camera.quaternion)
    right.applyQuaternion(camera.quaternion)
    
    // Move based on velocity
    // Forward/backward movement
    camera.position.add(forward.multiplyScalar(velocity.current.z))
    // Left/right strafe movement
    camera.position.add(right.multiplyScalar(-velocity.current.x))
    // Up/down movement (world space)
    camera.position.y += velocity.current.y
  })
  
  return null
}

export default CameraController