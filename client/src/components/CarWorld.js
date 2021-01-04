import { useXREvent } from "@react-three/xr";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useStore } from "../lib/store";
import { Box } from "./Box";
import CarModel from "../models/Car";

export function CarWorld() {
  const carPos = useStore((state) => state.currentCarPosition);
  const carRot = useStore((state) => state.currentCcarRotation);
  const carHistory = useStore((state) => state.carHistory);

  const {
    updateCarPos,
    updateCarRot,
    updateCarHistory,
    carUndo,
    carRedo,
  } = useStore((state) => state.api);

  const car = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const onSqueeze = useCallback(
    () =>
      active
        ? (car.current.scale = [1.5, 1.5, 1.5])
        : (car.current.scale = [1, 1, 1]),
    [active]
  );
  useXREvent("squeeze", onSqueeze);

  return (
    <Suspense fallback={<Box />}>
      <CarModel
        ref={car}
        scale={[0.07, 0.07, 0.07]}
        position={[0, 0, 0]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      />
    </Suspense>
  );
}
