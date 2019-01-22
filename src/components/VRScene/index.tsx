// A-frame Components by community
import "aframe";
import "aframe-teleport-controls";
import "super-hands";

// Libraries used by MathworldVR (Three.js, out custom A-Frame components, etc.)
import "lib";

import React from "react";
import PropTypes from "prop-types";
import physics from "aframe-physics-system";

class VRScene extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  componentWillMount() {
    // Initialize aframe-physics-system
    physics.registerAll();
  }

  render() {
    // Using a-scene because aframe-react's Scene component
    // is rendered last (it's how React works), thus physics
    // is not applied before components are rendered, so they fall...
    // https://github.com/facebook/react/issues/5737#issuecomment-167352763
    // TODO: use React.Suspense
    return <a-scene physics="gravity: 0">{this.props.children}</a-scene>;
  }
}

export default VRScene;
