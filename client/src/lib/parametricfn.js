import * as math from "mathjs";
import * as THREE from "three";
import { SceneUtils } from "three/examples/jsm/utils/SceneUtils"

export function prepareMathFn(equation, paramsArr) {
  return `f(${paramsArr.join(",")}) = ${equation}`;
}

export function createParametricFunction(equation, data) {
  let preparedEquation = prepareMathFn(equation, ["x", "y"]);

  var parser = math.parser();
  try {
    parser.evaluate(preparedEquation);
  } catch (error) {
    // Todo: memoize equations and return to last functional one (while showing the error notification)
    console.error("MathJS could not parse the equation!", error);
  }

  const computeZ = parser.get("f");
  parser.clear();

  var xMin = data.xMin;
  var xMax = data.xMax;
  var yMin = data.yMin;
  var yMax = data.yMax;
  var zMin = data.zMin;
  var zMax = data.zMax;

  var xRange = xMax - xMin;
  var yRange = yMax - yMin;

  return function parametricFunction(u, v, target) {
    var x = xRange * u + xMin;
    var y = yRange * v + yMin;
    var z = computeZ(x, y);
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
  };
}

export function createFnMesh(graphMesh, equation, data) {
  const meshFunction = createParametricFunction(equation, data);

  const mainMaterial = new THREE.MeshNormalMaterial({
    color: data.functionColor,
    side: THREE.DoubleSide,
  });
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00008,
    wireframe: true,
    transparent: true,
  });
  const functionMaterial = [mainMaterial, wireframeMaterial];

  var graphGeometry = new THREE.ParametricGeometry(
    meshFunction,
    data.segments,
    data.segments
  );

  graphMesh = new SceneUtils.createMultiMaterialObject(
    graphGeometry,
    functionMaterial
  );
  graphMesh.doubleSided = true;

  return graphMesh;
}
