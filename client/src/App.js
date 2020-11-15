import React from "react";
import { VRCanvas, DefaultXRControllers, Hands } from "@react-three/xr";
import { OrbitControls, Text, Plane, Sky, Loader } from "@react-three/drei";
import { Player } from "./components/Player";
import { Box } from "./components/Box";
// import { Sky } from "./components/Sky";
import { CalculatorKeyboard } from "./components/CalculatorKeyboard";
import { Grid } from "./components/Grid";
import { ParametricFunction } from "./components/ParametricFunction";
import { useTweaks } from "use-tweaks";

function App() {
  const { positionX } = useTweaks({
    positionX: { value: -2, min: -10, max: 10 },
  });
  console.log(positionX)
  return (
    <>
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
        <CalculatorKeyboard
          position={[-0.2, 1.14, -0.4]}
          rotation={[0, 0, 0]}
        />
        <OrbitControls />

        <Grid position={[0, -1, -2]} divisions={20} />

        <ParametricFunction position={[0, 0, positionX]} />

        <Text
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Hello world!
        </Text>

        <Plane position={[10, 0, 10]} receiveShadow={true} color="green" />

        <Sky
          distance={450000} // Camera distance (default=450000)
          sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
          inclination={0} // Sun elevation angle from 0 to 1 (default=0)
          azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        />

        {/* --- Effects --- */}
      </VRCanvas>
      <Loader />
    </>
  );
}

export default App;
