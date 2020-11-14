import React from "react";
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { Box } from "./components/Box";
import { Sky } from "./components/Sky";
import { Controls } from "./components/Controls";
import { Grid } from "./components/Grid";
import { Floor } from "./components/Floor";

function App() {
  return (
    <VRCanvas
      style={{ background: "#171720" }}
    >
      <DefaultXRControllers />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Controls />

      <Grid position={[0, -1, -2]} divisions={20} />

      <Floor receiveShadow={true} rotation={{ x: -Math.PI / 2 }} color="blue" />
    </VRCanvas>
  );
}

export default App;
