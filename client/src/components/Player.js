import React, { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";

export function Player() {
  const mesh = useRef();
  const { gl, camera } = useThree();

  useEffect(() => {
    const cam = gl.xr.isPresenting ? gl.xr.getCamera(camera) : camera;
    mesh.current.add(cam);
    return () => mesh.current.remove(cam);
  }, [gl.xr.isPresenting, gl.xr, camera, mesh]);
  return (
    <mesh ref={mesh}>
    </mesh>
  );
}
