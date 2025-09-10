import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { XR, createXRStore } from '@react-three/xr'
import Scene from './components/Scene'

const store = createXRStore()

function App() {
  return (
    <>
      
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
      
      <Canvas
        shadows
        camera={{ position: [0, 1.7, 5], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
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
      </Canvas>
    </>
  )
}

export default App