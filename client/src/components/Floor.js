import React from "react";
import * as THREE from "three";

export function Floor(props) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[4, 4]} />
      <meshStandardMaterial
        attach="material"
        color={props.color}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
