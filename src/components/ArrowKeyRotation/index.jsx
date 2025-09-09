import { useEffect } from 'react'
import { useUIStore } from '../../store'

const ArrowKeyRotation = () => {
  const setSettingsPanelVisible = useUIStore((state) => state.setSettingsPanelVisible)
  const settingsPanelVisible = useUIStore((state) => state.settingsPanelVisible)
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Toggle settings panel with 'S' key
      if (event.key === 's' || event.key === 'S') {
        event.preventDefault()
        setSettingsPanelVisible(!settingsPanelVisible)
        return
      }
      
      const camera = document.querySelector('[camera]')
      if (!camera) return

      const rotationSpeed = 2 // degrees per keypress
      const currentRotation = camera.getAttribute('rotation') || { x: 0, y: 0, z: 0 }
      
      switch(event.key) {
        case 'ArrowUp':
          event.preventDefault()
          camera.setAttribute('rotation', {
            x: currentRotation.x - rotationSpeed,
            y: currentRotation.y,
            z: currentRotation.z
          })
          break
        case 'ArrowDown':
          event.preventDefault()
          camera.setAttribute('rotation', {
            x: currentRotation.x + rotationSpeed,
            y: currentRotation.y,
            z: currentRotation.z
          })
          break
        case 'ArrowLeft':
          event.preventDefault()
          camera.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y + rotationSpeed,
            z: currentRotation.z
          })
          break
        case 'ArrowRight':
          event.preventDefault()
          camera.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y - rotationSpeed,
            z: currentRotation.z
          })
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [settingsPanelVisible, setSettingsPanelVisible])

  return null
}

export default ArrowKeyRotation