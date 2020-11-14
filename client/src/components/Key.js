import React, { useState, useCallback, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Select, Hover } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { Color, Box3 } from "three/build/three.module";

const MAIN_COLOR = new Color(0x444444);
const HOVERED_COLOR = new Color(0xffffff);

export function Key({
  name,
  pos = [0, 0],
  onClick,
  width = 1,
  fontSize = 0.04,
  calcKey = false,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(MAIN_COLOR);

  const onSelect = () => {
    /* noop */
  };

  const onHover = useCallback(() => {
    setHover(!hover);
    setColor(hover ? HOVERED_COLOR : MAIN_COLOR);
  }, [hover, color]);

  const mesh = useRef();

  const { gl } = useThree();

  const leftHand = gl.xr.getHand(0);

  const focused = useRef(false);
  useFrame(() => {
    if (!mesh.current) {
      return;
    }
    const leftTip = leftHand.joints[9];
    if (leftTip === undefined) {
      return;
    }

    const box = new Box3().setFromObject(mesh.current);

    if (box.containsPoint(leftTip.position)) {
      if (!focused.current) {
        onClick();
        focused.current = true;
        mesh.current.material.color = new Color(0x444444);
      }
    } else {
      if (focused.current) {
        mesh.current.material.color = new Color(0xffffff);
        focused.current = false;
      }
    }
  });

  const keySize = 0.07;
  const keyWidth = width * keySize;
  const keyGap = 0.02;
  const size = keySize + keyGap;

  const xpi = (pos[0] / 10) * Math.PI;
  const offset = 0.01 - Math.sin(xpi) / 20;

  const position = [size * pos[0], -size * pos[1], calcKey ? 0 : offset];

  return (
    <Select onSelect={onSelect}>
      <Hover onChange={onHover}>
        <group
          {...rest}
          position={position}
          rotation={[0, calcKey ? 0 : Math.cos(xpi) / 2, 0]}
          scale={hover ? [1.1, 1.1, 1.1] : [1, 1, 1]}
        >
          <mesh ref={mesh}>
            <boxBufferGeometry
              attach="geometry"
              args={[keyWidth, keySize, 0.01]}
            />
            <meshStandardMaterial attach="material" color={color} />
          </mesh>
          <Text
            position={[0, 0.003, keySize / 10]}
            fontSize={fontSize}
            color={hover ? "#000" : "#282c34"}
          >
            {name}
          </Text>
        </group>
      </Hover>
    </Select>
  );
}
