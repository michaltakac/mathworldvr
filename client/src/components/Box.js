import React, { useRef, useState, useCallback } from "react";
import { useFrame } from "react-three-fiber";
import { useXREvent } from "@react-three/xr";

export function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const onSqueeze = useCallback(
    () =>
      active
        ? (mesh.current.scale = [1.5, 1.5, 1.5])
        : (mesh.current.scale = [1, 1, 1]),
    [active]
  );
  useXREvent("squeeze", onSqueeze);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      userData={{ test: "hello" }}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}
