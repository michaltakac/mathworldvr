import React from 'react'
import { Entity } from 'aframe-react'

const RightController = (props) => {
  return (
    <Entity
      id="rightController"
      hand-controls="right"
      sphere-collider={{ objects: '.interactive', radius: 0.05 }}
      if-no-vr-headset={{ visible: false }}
      super-hands
      static-body={{ shape: 'sphere', sphereRadius: 0.05 }}
      {...props}
    />
  )
}

export default RightController
