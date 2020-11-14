import React from "react";
import * as THREE from "three";

export function Sky(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[30, 32, 16]} />
      <meshLambertMaterial
        attach="material"
        color="green"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
