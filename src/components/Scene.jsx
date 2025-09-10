import { Sky, Environment } from '@react-three/drei'
import { Root } from '@react-three/uikit'
import { Defaults } from '@react-three/uikit-default'
import { Calculator, Settings, Grid3x3 } from '@react-three/uikit-lucide'
import Lights from './Lights'
import Floor from './Floor'
import ParametricSurface from './ParametricSurface'
import Calculator3D from './Calculator3D'
import SettingsPanel3D from './SettingsPanel3D'
import VRControllers from './VRControllers'
import CameraController from './CameraController'
import CoordinateSystem from './CoordinateSystem'
import ToggleButton3D from './ToggleButton3D'
import { useSettingsStore } from '../store'

function Scene() {
  const showCalculator = useSettingsStore((state) => state.showCalculator)
  const showGrid = useSettingsStore((state) => state.showGrid)
  const showSettings = useSettingsStore((state) => state.showSettings)
  const toggleCalculator = useSettingsStore((state) => state.toggleCalculator)
  const toggleSettings = useSettingsStore((state) => state.toggleSettings)
  const setShowGrid = useSettingsStore((state) => state.setShowGrid)
  
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
      
      {/* Floor at ground level */}
      <Floor />
      
      {/* 3D Coordinate System elevated to match the main content */}
      {showGrid && (
        <group position={[0, 2, -8]}>
          <CoordinateSystem size={10} divisions={10} />
        </group>
      )}
      
      {/* Main Components - elevated for VR viewing, pushed back */}
      <group position={[0, 2, -8]}>
        {/* Central parametric surface - no container box */}
        <ParametricSurface />
      </group>
      
      {/* Toggle buttons - each in their own Root */}
      <group position={[-1.5, 3.5, -3]}>
        <Root>
          <Defaults>
            <ToggleButton3D 
              position={[0, 0, 0]}
              onClick={toggleCalculator}
              icon={Calculator}
              label="Calculator"
              isActive={showCalculator}
            />
          </Defaults>
        </Root>
      </group>
      
      <group position={[0, 3.5, -3]}>
        <Root>
          <Defaults>
            <ToggleButton3D 
              position={[0, 0, 0]}
              onClick={toggleSettings}
              icon={Settings}
              label="Settings"
              isActive={showSettings}
            />
          </Defaults>
        </Root>
      </group>
      
      <group position={[1.5, 3.5, -3]}>
        <Root>
          <Defaults>
            <ToggleButton3D 
              position={[0, 0, 0]}
              onClick={() => setShowGrid(!showGrid)}
              icon={Grid3x3}
              label="Grid"
              isActive={showGrid}
            />
          </Defaults>
        </Root>
      </group>
      
      {/* Calculator Panel - left side */}
      {showCalculator && (
        <Calculator3D position={[-4.5, 2, -3]} />
      )}
      
      {/* Settings Panel - right side */}
      {showSettings && (
        <SettingsPanel3D position={[4.5, 2, -3]} />
      )}
    </>
  )
}

export default Scene