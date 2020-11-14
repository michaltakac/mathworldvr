import React, { useState, useCallback, useEffect } from "react";
import { Select } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { Key } from "./Key";
import { Cursor } from "./Cursor";

export function Keyboard(props) {
  const [state, setState] = useState({
    text: "",
    focused: " ",
  });

  const [toggleCursor, setToggleCursor] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => setToggleCursor(!toggleCursor), 500);
    return () => {
      clearInterval(interval);
    };
  }, [toggleCursor]);

  const onSelect = (key) => {
    setState(() => {
      const text =
        key === "backspace"
          ? state.text.substring(0, state.text.length - 1)
          : `${state.text}${key}`;
      return {
        text,
        focused: key,
      };
    });
  };

  return (
    <group position={props.position} rotation={props.rotation}>
      <Text key="text" position={[0.15, 0.1, 0]} fontSize={0.03}>
        {state.text + (toggleCursor ? "|" : "")}
      </Text>
      {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key, i) => (
        <Select key={key} onSelect={() => onSelect(key)}>
          <Key name={key} pos={[i - 0.2, 0]} />
        </Select>
      ))}
      {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key, i) => (
        <Select key={key} onSelect={() => onSelect(key)}>
          <Key name={key} pos={[i, 1]} />
        </Select>
      ))}
      {["z", "x", "c", "v", "b", "n", "m"].map((key, i) => (
        <Select key={key} onSelect={() => onSelect(key)}>
          <Key name={key} pos={[i + 0.4, 2]} />
        </Select>
      ))}
      <Select onSelect={() => onSelect(" ")}>
        <Key name={" "} pos={[3, 3]} width={5} />
      </Select>
      <Select onSelect={() => onSelect("backspace")}>
        <Key name={"<"} pos={[8, 3]} />
      </Select>
    </group>
  );
}
