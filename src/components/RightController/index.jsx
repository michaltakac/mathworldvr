import React from 'react'
import { Entity } from 'aframe-react'
import { useUIStore } from '../../store'

const RightController = (props) => {
  const handTracking = useUIStore((state) => state.handTracking)
  
  return (
    <Entity
      id="rightController"
      hand-controls={handTracking ? { hand: 'right', handModelStyle: 'highPoly' } : 'right'}
      laser-controls="hand: right"
      raycaster="objects: .interactive; far: 5"
      sphere-collider={{ objects: '.interactive', radius: 0.05 }}
      {...props}
    />
  )
}

export default RightController