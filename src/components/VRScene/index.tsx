import * as React from "react";

export class VRScene extends React.Component {
  componentDidMount() {
    // A-frame Components by community
    require("aframe");
    require("aframe-teleport-controls");
    require("super-hands");

    // Libraries used by MathworldVR (Three.js, out custom A-Frame components, etc.)
    require("../../lib");

    // Initialize aframe-physics-system
    import("aframe-physics-system");
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
