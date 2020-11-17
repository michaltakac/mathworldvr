import React, { useCallback, useMemo } from "react";
import * as math from "mathjs";
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
  showWireframe=true,
  ...props
}) {
  const { equation } = useStore();

  const computeZ = useMemo(() => {
    const parser = math.parser();
    try {
      parser.evaluate(prepareMathFn(equation, ["x", "y"]));
    } catch (error) {
      // Todo: return to last functional one (while showing the error notification)
      console.error("MathJS could not parse the equation!", error);
    }

    const computeZ = parser.get("f");
    parser.clear();
    return computeZ;
  });

  const parametricFunction = useCallback(
    (u, v, target) => {
      let xRange = xMax - xMin;
      let yRange = yMax - yMin;

      let x = xRange * u + xMin;
      let y = yRange * v + yMin;
      const z = computeZ(x, y);
      // console.log('x is ' + x + ', y is ' + y + ', and f(x,y) = ' + z);
      if (isNaN(z)) {
        return target.set(0, 0, 0); // TODO: better fix
      }

      if (z < zMin) {
        return target.set(x, zMin, y);
      }

      if (z > zMax) {
        return target.set(x, zMax, y);
      }

      return target.set(x, z, y);
    },
    [equation, xMin, xMax, yMin, yMax, zMin, zMax]
  );

  return (
    <ParametricFunctionMesh
      equation={equation}
      parametricFunction={parametricFunction}
      segments={segments}
      color={color}
      showWireframe={showWireframe}
      {...props}
    />
  );
}
