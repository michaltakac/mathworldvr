import React from 'react'
import { Entity } from 'aframe-react'
import { useUIStore } from '../../store'

const LeftController = (props) => {
  const handTracking = useUIStore((state) => state.handTracking)
  
  return (
    <Entity
      id="leftController"
      hand-controls={handTracking ? { hand: 'left', handModelStyle: 'highPoly' } : 'left'}
      laser-controls="hand: left"
      raycaster="objects: .interactive; far: 5"
      sphere-collider={{ objects: '.interactive', radius: 0.05 }}
      {...props}
    />
  )
}

export default LeftController