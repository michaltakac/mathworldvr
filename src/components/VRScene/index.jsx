import 'aframe'
// import 'aframe-teleport-controls' // Temporarily disabled - incompatible with Three.js 0.173
import '../../lib'

import React from 'react'
import PropTypes from 'prop-types'

const VRScene = ({ children }) => {
  return (
    <a-scene
      webxr="requiredFeatures: local-floor; optionalFeatures: hand-tracking, hit-test, anchors, plane-detection, mesh-detection"
    >
      <a-entity id="cameraRig">
        <a-entity 
          id="head"
          camera="active: true"
          look-controls="enabled: true"
          wasd-controls="enabled: true; acceleration: 65"
          position="0 1.6 3"
        />
      </a-entity>
      {children}
    </a-scene>
  )
}

VRScene.propTypes = {
  children: PropTypes.node.isRequired,
}

export default VRScene