import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { useSettingsStore, useUIStore } from '../../store'

const SettingsPanel = ({ name, position, rotation, scale }) => {
  const visible = useUIStore((state) => state.settingsPanelVisible)
  const settings = useSettingsStore()
  
  if (!visible) return null
  
  const settingsList = [
    { label: 'X Min', value: settings.xMin, setter: settings.setXMin },
    { label: 'X Max', value: settings.xMax, setter: settings.setXMax },
    { label: 'Y Min', value: settings.yMin, setter: settings.setYMin },
    { label: 'Y Max', value: settings.yMax, setter: settings.setYMax },
    { label: 'Segments', value: settings.segments, setter: settings.setSegments },
  ]
  
  return (
    <Entity position={position} rotation={rotation} scale={scale}>
      <Entity
        geometry={{ primitive: 'plane', width: 2, height: 2.5 }}
        material={{ color: '#222', opacity: 0.9, transparent: true }}
      />
      
      <Entity
        text={{
          value: name,
          color: '#FFF',
          align: 'center',
          width: 3
        }}
        position={{ x: 0, y: 1, z: 0.01 }}
      />
      
      {settingsList.map((setting, index) => (
        <Entity key={setting.label} position={{ x: -0.5, y: 0.5 - index * 0.3, z: 0.01 }}>
          <Entity
            text={{
              value: `${setting.label}: ${setting.value}`,
              color: '#FFF',
              align: 'left',
              width: 2
            }}
          />
          
          <Entity
            geometry={{ primitive: 'box', width: 0.15, height: 0.15, depth: 0.02 }}
            material={{ color: '#444' }}
            position={{ x: 0.8, y: 0, z: 0 }}
            text={{ value: '-', color: '#FFF', align: 'center', width: 4 }}
            className="interactive"
            events={{
              click: () => setting.setter(setting.value - (setting.label.includes('Segments') ? 1 : 0.5))
            }}
          />
          
          <Entity
            geometry={{ primitive: 'box', width: 0.15, height: 0.15, depth: 0.02 }}
            material={{ color: '#444' }}
            position={{ x: 1.1, y: 0, z: 0 }}
            text={{ value: '+', color: '#FFF', align: 'center', width: 4 }}
            className="interactive"
            events={{
              click: () => setting.setter(setting.value + (setting.label.includes('Segments') ? 1 : 0.5))
            }}
          />
        </Entity>
      ))}
      
      <Entity
        geometry={{ primitive: 'box', width: 0.8, height: 0.2, depth: 0.05 }}
        material={{ color: settings.wireframe ? '#4CAF50' : '#666' }}
        position={{ x: 0, y: -0.8, z: 0.01 }}
        text={{
          value: 'Wireframe',
          color: '#FFF',
          align: 'center',
          width: 2
        }}
        className="interactive"
        events={{
          click: () => settings.setWireframe(!settings.wireframe)
        }}
      />
      
      <Entity
        geometry={{ primitive: 'box', width: 0.8, height: 0.2, depth: 0.05 }}
        material={{ color: settings.showGrid ? '#4CAF50' : '#666' }}
        position={{ x: 0, y: -1.1, z: 0.01 }}
        text={{
          value: 'Grid',
          color: '#FFF',
          align: 'center',
          width: 2
        }}
        className="interactive"
        events={{
          click: () => settings.setShowGrid(!settings.showGrid)
        }}
      />
    </Entity>
  )
}

SettingsPanel.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.object,
  rotation: PropTypes.object,
  scale: PropTypes.object
}

export default SettingsPanel