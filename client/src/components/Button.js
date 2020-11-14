import React, { useState, useCallback } from "react";
import { Select, Hover } from "@react-three/xr";
import { Text, Box } from "@react-three/drei";

export function Button(props) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);

  const onSelect = useCallback(() => {
    setColor((Math.random() * 0xffffff) | 0);
  }, [setColor]);

  return (
    <Select onSelect={onSelect}>
      <Hover onChange={setHover}>
        <Box
          scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]}
          args={[0.4, 0.1, 0.1]}
          {...props}
        >
          <meshStandardMaterial attach="material" color={color} />
          <Text
            position={[0, 0, 0.06]}
            fontSize={0.05}
            color="#000"
            anchorX="center"
            anchorY="middle"
          >
            Hello react-xr!
          </Text>
        </Box>
      </Hover>
    </Select>
  );
}
