import React from 'react'
import { Sky, Environment, Grid } from '@react-three/drei'
import Lights from './Lights'
import Floor from './Floor'
import ParametricSurface from './ParametricSurface'
import Calculator3D from './Calculator3D'
import AttentionBox3D from './AttentionBox3D'
import FunctionBox3D from './FunctionBox3D'
import SettingsPanel3D from './SettingsPanel3D'
import VRControllers from './VRControllers'
import CameraController from './CameraController'

function Scene() {
  return (
    <>
      {/* Camera and Controls */}
      <CameraController />
      <VRControllers />
      
      {/* Lighting */}
      <Lights />
      
      {/* Environment */}
      <Sky 
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Environment preset="sunset" />
      
      {/* Floor and Grid */}
      <Floor />
      <Grid 
        args={[20, 20]}
        position={[0, 0, 0]}
        cellSize={1}
        cellThickness={0.5}
        cellColor={'#6f6f6f'}
        sectionSize={5}
        sectionThickness={1}
        sectionColor={'#9d4b4b'}
        fadeDistance={30}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={true}
      />
      
      {/* Main Components */}
      <AttentionBox3D position={[0, 1.5, -2]} />
      
      <FunctionBox3D position={[0, 1, 0]}>
        <ParametricSurface />
      </FunctionBox3D>
      
      <Calculator3D position={[2, 1.5, -1]} />
      
      <SettingsPanel3D 
        position={[-2, 1.5, -1]}
        rotation={[0, Math.PI / 6, 0]}
      />
    </>
  )
}

export default Scene