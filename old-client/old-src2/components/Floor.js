import React from "react";
import * as THREE from "three";

export function Sky(props) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[4, 4]} />
      <meshStandardMaterial
        attach="material"
        color="green"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
