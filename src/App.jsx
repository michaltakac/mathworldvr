import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Leva } from 'leva'
import { XR, createXRStore } from '@react-three/xr'
import Scene from './components/Scene'
import { useUIStore } from './store'

// Only create XR store if WebXR is actually available
const isXRAvailable = typeof navigator !== 'undefined' && 'xr' in navigator

const store = isXRAvailable ? createXRStore({
  controller: true,   // Enable controllers only for real XR
  hand: false,        // Disable hand tracking for now
  gaze: false,        // Disable gaze
  frameRate: 'high',  // High frame rate for VR
  emulate: false,     // Never emulate
  foveation: 0        // No foveation
}) : null

function App() {
  const settingsPanelVisible = useUIStore((state) => state.settingsPanelVisible)
  const [xrSupported, setXrSupported] = useState(false)
  
  useEffect(() => {
    // Check for real WebXR support
    if (isXRAvailable) {
      navigator.xr?.isSessionSupported('immersive-vr').then(setXrSupported)
    }
  }, [])
  
  return (
    <>
      <Leva hidden={!settingsPanelVisible} />
      
      {xrSupported && store && (
        <button
          onClick={() => store.enterVR()}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            zIndex: 1000
          }}
        >
          Enter VR
        </button>
      )}
      
      <Canvas
        shadows
        camera={{ position: [0, 1.6, 3], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        {store ? (
          <XR store={store}>
            <Suspense fallback={null}>
              <Physics gravity={[0, -9.81, 0]}>
                <Scene />
              </Physics>
            </Suspense>
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              makeDefault
            />
            
            <Stats />
          </XR>
        ) : (
          <>
            <Suspense fallback={null}>
              <Physics gravity={[0, -9.81, 0]}>
                <Scene />
              </Physics>
            </Suspense>
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              makeDefault
            />
            
            <Stats />
          </>
        )}
      </Canvas>
    </>
  )
}

export default App