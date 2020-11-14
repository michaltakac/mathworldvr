import React from "react";
import { VRCanvas, DefaultXRControllers, Hands } from "@react-three/xr";
import { OrbitControls, Text } from "@react-three/drei";
import { Player } from "./components/Player";
import { Box } from "./components/Box";
// import { Sky } from "./components/Sky";
import { CalculatorKeyboard } from "./components/CalculatorKeyboard";
import { Grid } from "./components/Grid";
import { Floor } from "./components/Floor";

function App() {
  return (
    <VRCanvas
      style={{ background: "#171720" }}
      camera={{ position: [0, 0, -10], far: 1000 }}
      vr={{
        camera: { position: [0, 1.6, -10] },
      }}
    >
      <Hands />
      <DefaultXRControllers />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CalculatorKeyboard position={[-0.2, 1.14, -0.4]} rotation={[0, 0, 0]} />
      <OrbitControls />

      <Grid position={[0, -1, -2]} divisions={20} />

      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        Hello world!
      </Text>

      {/* <Floor position={[10, 10, 10]} receiveShadow={true} rotation={{ x: -Math.PI / 2 }} color="blue" /> */}

      {/* --- Effects --- */}
    </VRCanvas>
  );
}

export default App;
