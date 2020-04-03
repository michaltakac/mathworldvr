import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

export const Controls = props => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(({ camera }) => {
    controls.current && controls.current.update();
    camera.updateMatrixWorld();
  });
  return <orbitControls ref={controls} args={[camera, gl.domElement]} {...props} />;
};
