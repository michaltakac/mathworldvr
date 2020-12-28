import React, { useEffect, useState } from "react";
import { VRCanvas, DefaultXRControllers, Hands } from "@react-three/xr";
import { OrbitControls, Text, Plane, Sky, Loader } from "@react-three/drei";
import { PhoenixSocketProvider } from "./PhoenixSocketContext";
import { Communication } from "./components/Communication";
import { Player } from "./components/Player";
import { Box } from "./components/Box";
// import { Sky } from "./components/Sky";
import { CalculatorKeyboard } from "./components/CalculatorKeyboard";
import { Grid } from "./components/Grid";
import { ParametricFunction } from "./components/ParametricFunction";
import { makeButton, makeSeparator, useTweaks } from "use-tweaks";
import { useStore } from "./lib/store";

function App() {
  const eq = useStore((state) => state.equation);
  const { updateEquation } = useStore((state) => state.api);
  const {
    posX,
    posY,
    posZ,
    xMin,
    yMin,
    zMin,
    xMax,
    yMax,
    zMax,
    equation,
    color,
    showWireframe,
    segments,
  } = useTweaks("Value tester", {
    posX: { value: 0, min: -10, max: 10 },
    posY: { value: -2, min: -10, max: 10 },
    posZ: { value: 0, min: -10, max: 10 },
    ...makeSeparator(),
    xMin: { value: -1, min: -10, max: 10 },
    yMin: { value: -1, min: -10, max: 10 },
    zMin: { value: -1, min: -10, max: 10 },
    xMax: { value: 1, min: -10, max: 10 },
    yMax: { value: 1, min: -10, max: 10 },
    zMax: { value: 2, min: -10, max: 10 },
    ...makeSeparator(),
    segments: { value: 30, min: 1, max: 200 },
    color: "#bada55",
    showWireframe: true,
    ...makeSeparator(),
    equation: "x^2",
    ...makeButton("Update graph", () => {
      updateEquation(equation);
      console.log(equation);
      console.log(eq);
    }),
  });

  return (
    <>
      <VRCanvas
        style={{ background: "#171720" }}
        camera={{ position: [0, 0, -3], far: 50 }}
        vr={{
          camera: { position: [0, 1.6, 0] },
        }}
      >
        <PhoenixSocketProvider>
          <>
            <Communication />
            <Hands />
            <DefaultXRControllers />

            <Player />

            <CalculatorKeyboard
              position={[-0.2, 1.14, -0.4]}
              rotation={[0, 0, 0]}
            />
          </>
        </PhoenixSocketProvider>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <OrbitControls />

        <Grid position={[0, -1, -2]} divisions={20} />

        <ParametricFunction
          position={[posX, posZ, posY]}
          xMin={xMin}
          yMin={yMin}
          zMin={zMin}
          xMax={xMax}
          yMax={yMax}
          zMax={zMax}
          color={color}
          segments={Math.round(segments)}
          showWireframe={showWireframe}
        />

        <Text
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          {equation}
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
