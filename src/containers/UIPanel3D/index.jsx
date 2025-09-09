import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { useSettingsStore, useUIStore } from '../../store'
import './styles.css'

const UIContent = () => {
  const settings = useSettingsStore()
  const setSettingsPanelVisible = useUIStore((state) => state.setSettingsPanelVisible)
  
  return (
    <Html
      center
      transform
      occlude
      style={{
        width: '400px',
        padding: '20px',
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div className="ui-panel">
        <h2 className="panel-title">Function Settings</h2>
        
        <div className="control-section">
          <h3>X-Axis Range</h3>
          
          <div className="control-group">
            <label>
              X Min: <span className="value">{settings.xMin.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="-10"
              max="0"
              step="0.5"
              value={settings.xMin}
              onChange={(e) => settings.setXMin(parseFloat(e.target.value))}
              className="slider"
            />
          </div>
          
          <div className="control-group">
            <label>
              X Max: <span className="value">{settings.xMax.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={settings.xMax}
              onChange={(e) => settings.setXMax(parseFloat(e.target.value))}
              className="slider"
            />
          </div>
        </div>
        
        <div className="control-section">
          <h3>Y-Axis Range</h3>
          
          <div className="control-group">
            <label>
              Y Min: <span className="value">{settings.yMin.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="-10"
              max="0"
              step="0.5"
              value={settings.yMin}
              onChange={(e) => settings.setYMin(parseFloat(e.target.value))}
              className="slider"
            />
          </div>
          
          <div className="control-group">
            <label>
              Y Max: <span className="value">{settings.yMax.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={settings.yMax}
              onChange={(e) => settings.setYMax(parseFloat(e.target.value))}
              className="slider"
            />
          </div>
        </div>
        
        <div className="control-section">
          <h3>Mesh Resolution</h3>
          
          <div className="control-group">
            <label>
              Segments: <span className="value">{settings.segments}</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={settings.segments}
              onChange={(e) => settings.setSegments(parseInt(e.target.value))}
              className="slider"
            />
          </div>
        </div>
        
        <div className="control-section">
          <h3>Display Options</h3>
          
          <div className="switch-group">
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.wireframe}
                onChange={(e) => settings.setWireframe(e.target.checked)}
              />
              <span className="switch-slider"></span>
              <span className="switch-label">Wireframe Mode</span>
            </label>
          </div>
          
          <div className="switch-group">
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.showGrid}
                onChange={(e) => settings.setShowGrid(e.target.checked)}
              />
              <span className="switch-slider"></span>
              <span className="switch-label">Show Grid</span>
            </label>
          </div>
        </div>
        
        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => {
              settings.setXMin(-5)
              settings.setXMax(5)
              settings.setYMin(-5)
              settings.setYMax(5)
              settings.setSegments(50)
            }}
          >
            Reset Defaults
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={() => setSettingsPanelVisible(false)}
          >
            Close Panel
          </button>
        </div>
      </div>
    </Html>
  )
}

const UIPanel3D = () => {
  const visible = useUIStore((state) => state.settingsPanelVisible)
  
  if (!visible) return null
  
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '600px',
      zIndex: 1000,
      pointerEvents: 'auto'
    }}>
      <Canvas 
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-5, 5, 10]} />
        <UIContent />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default UIPanel3D