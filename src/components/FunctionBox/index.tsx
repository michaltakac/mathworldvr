import React from "react";
import { Entity } from "aframe-react";

export type FunctionBoxProps = {
  children: any;
  position: { x: number; y: number; z: number };
};

export const FunctionBox = ({ position, ...props }: FunctionBoxProps) => (
  <Entity
    id="function-box"
    className="interactive"
    geometry="primitive: box; width: 4; height: 4; depth: 4;"
    material="transparent: true; opacity: 0; shader: standard"
    scale="0.2 0.2 0.2"
    position={position}
    grabbable
    stretchable
    dynamic-body
    stop-flying
  >
    {props.children}
  </Entity>
);
