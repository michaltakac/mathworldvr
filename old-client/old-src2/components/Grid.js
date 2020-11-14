import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

const defaults = {
  size: 10,
  divisions: 10,
  position: [0, 0, 0],
  colorCenterLine: "grey",
  colorGrid: "grey",
  originInCenter: false
};

export function Grid(props = defaults) {
  const pos = props.position;
  const xzPos = [pos[0], pos[1] + props.size / 2, pos[2] - 5];
  const yzPos = [pos[0] - 5, pos[1] + props.size / 2, pos[2]];

  return props.originInCenter ? (
    <group position={pos}>
      <gridHelper
        args={[
          props.size || 10,
          props.divisions || 50,
          props.colorCenterLine || "grey",
          props.colorGrid || "grey"
        ]}
      />
      <gridHelper
        args={[
          props.size || 10,
          props.divisions || 50,
          props.colorCenterLine || "grey",
          props.colorGrid || "grey"
        ]}
        rotation-x={Math.PI / 2}
      />
      <gridHelper
        args={[
          props.size || 10,
          props.divisions || 50,
          props.colorCenterLine || "grey",
          props.colorGrid || "grey"
        ]}
        rotation-z={Math.PI / 2}
      />
    </group>
  ) : (
    <group position={props.position}>
      <gridHelper
        args={[
          props.size || 10,
          props.divisions || 50,
          props.colorCenterLine || "grey",
          props.colorGrid || "grey"
        ]}
      />
      <gridHelper
        args={[
          props.size || 10,
          props.divisions || 50,
          props.colorCenterLine || "grey",
          props.colorGrid || "grey"
        ]}
        position={xzPos}
        rotation-x={Math.PI / 2}
      />
      <gridHelper
        args={[
          props.size || 10,
          props.divisions || 50,
          props.colorCenterLine || "grey",
          props.colorGrid || "grey"
        ]}
        position={yzPos}
        rotation-z={Math.PI / 2}
      />
    </group>
  );
}
