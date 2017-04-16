import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const propTypes = {
  children: PropTypes.any,
  position: PropTypes.object,
}

const FunctionBox = ({ position, ...props }) => (
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
    { props.children }
  </Entity>
)

FunctionBox.propTypes = propTypes
export default FunctionBox
