import React from "react";
import { Entity } from "aframe-react";

export type ParametricFuntion = {
  equation: string;
  segments: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  zMin: number;
  zMax: number;
  functionColor: string;
};

export const ParametricFuntion = ({
  equation,
  segments,
  xMin,
  xMax,
  yMin,
  yMax,
  zMin,
  zMax,
  functionColor
}: ParametricFuntion) => {
  return (
    <Entity
      id="function-mesh"
      parametricfunction={{
        equation,
        segments,
        xMin,
        xMax,
        yMin,
        yMax,
        zMin,
        zMax,
        functionColor
      }}
      grid="size: 2; step: 20"
    />
  );
};
