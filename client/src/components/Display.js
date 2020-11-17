import React, { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

export function Display({ position, fontSize, color, text, flashingDelay }) {
  const [toggleCursor, setToggleCursor] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => setToggleCursor(!toggleCursor), flashingDelay);
    return () => {
      clearInterval(interval);
    };
  }, [toggleCursor]);

  return (
    <Text position={position} fontSize={fontSize} color={color}>
      {text + (toggleCursor ? "|" : "")}
    </Text>
  );
}
