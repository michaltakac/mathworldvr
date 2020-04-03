import React from "react";

export function Sky(props) {
  return (
    <mesh
      {...props}
      position={[40, 40, 40]}
    >
      <sphereGeometry attach="geometry" args={[30, 32, 16]} />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  );
}
