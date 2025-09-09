import React from 'react'
import { Entity } from 'aframe-react'

const Lights = () => {
  return (
    <>
      <Entity
        light={{ type: 'ambient', color: '#BBB', intensity: 0.6 }}
      />
      <Entity
        light={{ type: 'directional', color: '#FFF', intensity: 0.6 }}
        position={{ x: -0.5, y: 1, z: 1 }}
      />
    </>
  )
}

export default Lights