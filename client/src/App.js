import React from "react";
import { Canvas } from "react-three-fiber";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { Box } from "./components/Box";
import { Sky } from "./components/Sky";
import { Controls } from "./components/Controls";

function App() {
  return (
    <Canvas
      vr
      onCreated={({ gl }) => {
        gl.xr.enabled = true;
        document.body.appendChild(VRButton.createButton(gl));
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Sky />
      <Controls />
    </Canvas>
  );
}

export default App;
