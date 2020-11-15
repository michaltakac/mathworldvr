import React, { useMemo } from "react";
import { ParametricFunctionMesh } from "./ParametricFunctionMesh";
import { createParametricFunction, prepareMathFn } from "../lib/parametricfn";
import { useStore } from "../lib/store";

export function ParametricFunction({
  segments = 30,
  xMin = -1,
  xMax = 1,
  yMin = -1,
  yMax = 1,
  zMin = -1,
  zMax = 1,
  color = "green",
  ...props
}) {
  const { equation } = useStore();

  let parametricFunction = useMemo(
    () =>
      createParametricFunction(equation, {
        equation,
        segments,
        xMin,
        xMax,
        yMin,
        yMax,
        zMin,
        zMax,
        color,
      }),
    [equation]
  );

  return (
    <ParametricFunctionMesh
      equation={equation}
      parametricFunction={parametricFunction}
      segments={segments}
      color={color}
      {...props}
    />
  );
}
