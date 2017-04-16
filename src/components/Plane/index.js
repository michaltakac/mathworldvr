import React from 'react'
import { Entity } from 'aframe-react'

const Plane = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'circle', radius: 12 }}
      material={{ src: 'url(floor.jpg)', shader: 'flat', roughness: 0 }}
      rotation="-90 0 0"
      static-body
      {...props}
    />
  )
}

export default Plane
