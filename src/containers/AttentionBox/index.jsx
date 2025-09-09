import React from 'react'
import { Entity } from 'aframe-react'
import { useUIStore } from '../../store'

const AttentionBox = () => {
  const visible = useUIStore((state) => state.attentionBoxVisible)
  
  if (!visible) return null
  
  return (
    <Entity
      geometry={{ primitive: 'box', width: 0.3, height: 0.3, depth: 0.3 }}
      material={{ color: '#4CC3D9', opacity: 0.8, transparent: true }}
      position={{ x: 0, y: 1.6, z: -1 }}
      animation__rotate={{
        property: 'rotation',
        to: '0 360 0',
        loop: true,
        dur: 10000
      }}
      animation__pulse={{
        property: 'scale',
        to: '1.1 1.1 1.1',
        dir: 'alternate',
        loop: true,
        dur: 1000
      }}
      className="interactive"
    />
  )
}

export default AttentionBox