// A-frame Components by community
import 'aframe'
import 'aframe-teleport-controls'
import 'super-hands'

// Libraries used by MathworldVR (Three.js, A-Frame, etc.)
import 'lib'

import React from 'react'
import PropTypes from 'prop-types'
import physics from 'aframe-physics-system'

class VRScene extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  componentWillMount() {
    // Initialize aframe-physics-system
    physics.registerAll()
  }

  render() {
    // Using a-scene because aframe-react's Scene component
    // doesn't handle physics props correctly
    return (
      <a-scene
        physics="gravity: 0"
        {...this.props}
      >
        {this.props.children}
      </a-scene>
    )
  }
}

export default VRScene
