import { Select, useController, useXR, useXREvent } from "@react-three/xr";
import React, {
  useMemo,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { SceneUtils } from "three/examples/jsm/utils/SceneUtils";
import { Grid } from "./Grid";

const tempMatrix = new THREE.Matrix4();
const tempVec = new THREE.Vector3();

export function ParametricFunctionMesh({
  equation,
  parametricFunction,
  segments = 30,
  color = "green",
  showWireframe = true,
  ...props
}) {
  const graph = useRef();
  const graphBoundingBox = useRef();
  const graphGroup = useRef();
  const refFrame = useRef();

  const [isGrabbed, setGrabbed] = useState(false);

  const rightController = useController("right");

  const { geom, mesh, boxHelper } = useMemo(() => {
    const geom = new THREE.ParametricGeometry(
      parametricFunction,
      segments,
      segments
    );
    const materials = [
      new THREE.MeshNormalMaterial({ side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({
        color: 0x00008,
        wireframe: showWireframe,
        transparent: true,
        opacity: 0.2,
      }),
    ];
    const mesh = new SceneUtils.createMultiMaterialObject(geom, materials);
    const boxHelper = new THREE.BoxHelper(mesh, 0xff4400);
    boxHelper.geometry.computeBoundingBox();
    return { geom, mesh, boxHelper };
  }, [equation, parametricFunction, segments, showWireframe]);

  const grabStart = (event) => {
    const { controller } = event.controller;
    boxHelper.updateMatrixWorld();
    controller.updateMatrixWorld();
    controller.children[0].geometry.computeBoundingBox();
    boxHelper.geometry.computeBoundingBox();

    const ctrlBoundingBox = controller.children[0].geometry.boundingBox.clone();
    ctrlBoundingBox.applyMatrix4(controller.matrixWorld);

    const graphBounding = boxHelper.geometry.boundingBox.clone();
    graphBounding.applyMatrix4(boxHelper.matrixWorld);

    const isIntersecting = graphBounding.intersectsBox(ctrlBoundingBox);

    if (!isGrabbed && isIntersecting) {
      setGrabbed(true);
      controller.attach(graphGroup.current);
    }
  };

  const grabEnd = () => {
    setGrabbed(false);
    refFrame.current.attach(graphGroup.current)
  };

  useXREvent("squeezestart", grabStart);
  useXREvent("squeezeend", grabEnd);

  return (
    <group ref={refFrame}>
      <group {...props} ref={graphGroup}>
        <primitive object={mesh} ref={graph} />
        <primitive
          object={boxHelper}
          ref={graphBoundingBox}
          opacity={isGrabbed ? 1 : 0.2}
        />
        <Grid
          size={2}
          divisions={10}
          position={[0, 0, 0]}
          colorCenterLine={"red"}
          colorGrid={"grey"}
          originInCenter={true}
        />
      </group>
    </group>
  );
}
