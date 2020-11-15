import React, { useMemo } from "react";
import * as THREE from "three";
import { SceneUtils } from "three/examples/jsm/utils/SceneUtils"

export function ParametricFunctionMesh({
  equation,
  parametricFunction,
  segments = 30,
  color = "green",
  ...props
}) {
  const mesh = useMemo(() => {
    const geom = new THREE.ParametricGeometry(
      parametricFunction,
      segments,
      segments
    );
    const materials = [
      new THREE.MeshNormalMaterial({ color, side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({
        color: 0x00008,
        wireframe: true,
        transparent: true,
      }),
    ];
    return new SceneUtils.createMultiMaterialObject(geom, materials);
  }, [equation]);

  return <primitive object={mesh} {...props} />;
}
