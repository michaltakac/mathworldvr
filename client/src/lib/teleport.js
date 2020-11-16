// import { useController, useXR } from "@react-three/xr";
// import { useThree } from "react-three-fiber";
// import * as THREE from "three";

// const g = new THREE.Vector3(0, -9.8, 0);
// const tempVec = new THREE.Vector3();
// const tempVec1 = new THREE.Vector3();
// const tempVecP = new THREE.Vector3();
// const tempVecV = new THREE.Vector3();
// const guidelight = new THREE.PointLight(0xffeeaa, 0, 2);
// let lineSegments = 10;

// const lineGeometry = new THREE.BufferGeometry();
// const lineGeometryVertices = new Float32Array((lineSegments + 1) * 3);

// lineGeometryVertices.fill(0);

// lineGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(lineGeometryVertices, 3)
// );

// const lineMaterial = new THREE.LineBasicMaterial({
//   color: 0x000
// });

// const guideline = new THREE.Line(lineGeometry, lineMaterial);

// let guidingController = null;

// function positionAtT(inVec, t, p, v, g) {
//   inVec.copy(p);
//   inVec.addScaledVector(v, t);
//   inVec.addScaledVector(g, 0.5 * t ** 2);
//   return inVec;
// }

// function getCam() {
//   const { camera, gl } = useThree();
//   return gl.xr.isPresenting ? gl.xr.getCamera(camera) : camera;
// }

// function locomotion(offset) {
//   const newPos = new THREE.Vector3();
//   const camera = getCam();
//   newPos.copy(camera.position);
//   newPos.add(offset);
//   camera.position.set(newPos);
// }

// function onSelectStart(controller) {
//   guidingController = controller;
//   guidelight.intensity = 1;
//   this.add(guideline);
// }

// function onSelectEnd(controller) {
//   if (guidingController === controller) {
//     // first work out vector from feet to cursor

//     // feet position
//     const { camera, gl } = useThree();
//     const cam = gl.xr.isPresenting ? gl.xr.getCamera(camera) : camera;
//     const feetPos = cam.getWorldPosition(tempVec);
//     feetPos.y = 0;

//     // cursor position‹
//     const p = guidingController.getWorldPosition(tempVecP);
//     const v = guidingController.getWorldDirection(tempVecV);
//     v.multiplyScalar(6);
//     const t = (-v.y + Math.sqrt(v.y ** 2 - 2 * p.y * g.y)) / g.y;
//     const cursorPos = positionAtT(tempVec1, t, p, v, g);

//     // Offset
//     const offset = cursorPos.addScaledVector(feetPos, -1);

//     // Do the locomotion
//     locomotion(offset);

//     // clean up
//     guidingController = null;
//     guidelight.intensity = 0;
//     this.remove(guideline);
//   }
// }

// export function addTeleportFeature(controllerInstance, callbacks) {
//   if (controllerInstance) {
//     console.log(controllerInstance)
//     const { controller } = controllerInstance;
//     controller.addEventListener("selectstart", () => callbacks.onSelectStart(this, ));
//     controller.addEventListener("selectend", callbacks.onSelectEnd);
//   }
// }

// export function useTeleport() {
//   if (guidingController) {
//     // Controller start position
//     const p = guidingController.getWorldPosition(tempVecP);

//     // Set Vector V to the direction of the controller, at 1m/s
//     const v = guidingController.getWorldDirection(tempVecV);

//     // Scale the initial velocity to 6m/s
//     v.multiplyScalar(6);

//     // Time for tele ball to hit ground
//     const t = (-v.y + Math.sqrt(v.y ** 2 - 2 * p.y * g.y)) / g.y;

//     const vertex = tempVec.set(0, 0, 0);
//     for (let i = 1; i <= lineSegments; i++) {
//       // set vertex to current position of the virtual ball at time t
//       positionAtT(vertex, (i * t) / lineSegments, p, v, g);
//       guidingController.worldToLocal(vertex);
//       vertex.toArray(lineGeometryVertices, i * 3);
//     }
//     guideline.geometry.attributes.position.needsUpdate = true;

//     // Place the light and sprite near the end of the poing
//     positionAtT(guidelight.position, t * 0.98, p, v, g);
//   }
// }
