import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { Root, Container, Text } from '@react-three/uikit'
import { 
  Defaults, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Slider,
  Switch,
  Label,
  Button
} from '@react-three/uikit-default'
import { useSettingsStore, useUIStore } from '../../store'

const SettingsPanel3D = ({ position = [0, 1.5, -2], rotation = [0, 0, 0], scale = 1 }) => {
  const visible = useUIStore((state) => state.settingsPanelVisible)
  const settings = useSettingsStore()
  
  if (!visible) return null
  
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Root
        sizeX={2}
        sizeY={2.5}
        pixelSize={0.002}
        anchorX="center"
        anchorY="center"
      >
        <Defaults>
          <Card width={1000} backgroundColor={0x222222} borderRadius={16} padding={24}>
            <CardHeader>
              <CardTitle>
                <Text fontSize={24} color="white">Function Settings</Text>
              </CardTitle>
            </CardHeader>
            
            <CardContent flexDirection="column" gap={20}>
              {/* X Min Slider */}
              <Container flexDirection="column" gap={8}>
                <Label>
                  <Text fontSize={14} color="white">X Min: {settings.xMin.toFixed(1)}</Text>
                </Label>
                <Slider 
                  defaultValue={settings.xMin} 
                  min={-10} 
                  max={0} 
                  step={0.5}
                  width={900}
                  onValueChange={(value) => settings.setXMin(value)}
                />
              </Container>
              
              {/* X Max Slider */}
              <Container flexDirection="column" gap={8}>
                <Label>
                  <Text fontSize={14} color="white">X Max: {settings.xMax.toFixed(1)}</Text>
                </Label>
                <Slider 
                  defaultValue={settings.xMax} 
                  min={0} 
                  max={10} 
                  step={0.5}
                  width={900}
                  onValueChange={(value) => settings.setXMax(value)}
                />
              </Container>
              
              {/* Y Min Slider */}
              <Container flexDirection="column" gap={8}>
                <Label>
                  <Text fontSize={14} color="white">Y Min: {settings.yMin.toFixed(1)}</Text>
                </Label>
                <Slider 
                  defaultValue={settings.yMin} 
                  min={-10} 
                  max={0} 
                  step={0.5}
                  width={900}
                  onValueChange={(value) => settings.setYMin(value)}
                />
              </Container>
              
              {/* Y Max Slider */}
              <Container flexDirection="column" gap={8}>
                <Label>
                  <Text fontSize={14} color="white">Y Max: {settings.yMax.toFixed(1)}</Text>
                </Label>
                <Slider 
                  defaultValue={settings.yMax} 
                  min={0} 
                  max={10} 
                  step={0.5}
                  width={900}
                  onValueChange={(value) => settings.setYMax(value)}
                />
              </Container>
              
              {/* Segments Slider */}
              <Container flexDirection="column" gap={8}>
                <Label>
                  <Text fontSize={14} color="white">Segments: {settings.segments}</Text>
                </Label>
                <Slider 
                  defaultValue={settings.segments} 
                  min={10} 
                  max={100} 
                  step={1}
                  width={900}
                  onValueChange={(value) => settings.setSegments(Math.round(value))}
                />
              </Container>
              
              {/* Wireframe Switch */}
              <Container flexDirection="row" alignItems="center" gap={12} marginTop={16}>
                <Switch 
                  defaultChecked={settings.wireframe}
                  onCheckedChange={(checked) => settings.setWireframe(checked)}
                />
                <Label>
                  <Text fontSize={14} color="white">Wireframe</Text>
                </Label>
              </Container>
              
              {/* Show Grid Switch */}
              <Container flexDirection="row" alignItems="center" gap={12}>
                <Switch 
                  defaultChecked={settings.showGrid}
                  onCheckedChange={(checked) => settings.setShowGrid(checked)}
                />
                <Label>
                  <Text fontSize={14} color="white">Show Grid</Text>
                </Label>
              </Container>
              
              {/* Close Button */}
              <Container marginTop={20}>
                <Button 
                  width="100%"
                  onClick={() => useUIStore.getState().setSettingsPanelVisible(false)}
                >
                  <Text>Close Panel</Text>
                </Button>
              </Container>
            </CardContent>
          </Card>
        </Defaults>
      </Root>
    </group>
  )
}

SettingsPanel3D.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
  scale: PropTypes.number
}

export default SettingsPanel3D