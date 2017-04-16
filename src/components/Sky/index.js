import React from 'react'
import { Entity } from 'aframe-react'

const Sky = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: 30, phiLength: 360, phiStart: 0, thetaLength: 90 }}
      material={{ shader: 'flat', src: 'url(sky.jpg)', side: 'back', height: 2048, width: 2048 }}
      {...props}
    />
  )
}

export default Sky
