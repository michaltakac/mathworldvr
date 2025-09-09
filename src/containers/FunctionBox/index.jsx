import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { useFunctionBoxStore } from '../../store'

const FunctionBox = ({ children }) => {
  const { position, rotation, scale } = useFunctionBoxStore()
  
  return (
    <Entity
      position={position}
      rotation={rotation}
      scale={scale}
      className="function-box"
    >
      {children}
    </Entity>
  )
}

FunctionBox.propTypes = {
  children: PropTypes.node
}

export default FunctionBox