import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { ParametricFunction } from 'containers'

const propTypes = {
  position: PropTypes.object,
}

const FunctionBox = ({ position }) => (
  <Entity
    id="function-box"
    className="interactive"
    geometry="primitive: box; width: 4; height: 4; depth: 4;"
    material="transparent: true; opacity: 0; shader: standard"
    scale="0.2 0.2 0.2"
    position={position}
    grabbable
    stretchable
    dynamic-body
    stop-flying
  >
    { /* Function mesh with grid */ }
    <ParametricFunction />
  </Entity>
)

FunctionBox.propTypes = propTypes
export default FunctionBox
