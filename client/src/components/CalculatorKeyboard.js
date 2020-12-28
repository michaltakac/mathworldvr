import React, { useState, useCallback, useEffect } from "react";
import { Select } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { Key } from "./Key";
import { Display } from "./Display";
import { useStore } from "../lib/store";
import useChannel from "../useChannel";

export function CalculatorKeyboard() {
  const [worldChannel] = useChannel("world:lobby");

  const { updateEquation } = useStore((state) => state.api);
  const equation = useStore((state) => state.equation);
  const [tempEquation, setTempEquation] = useState(equation);

  const sendMsg = (key) => {
    console.log(worldChannel)
    if (!worldChannel) return;
    worldChannel.push("message", { body: "Clicked " + key, author: "Mike"}, 500)
  }

  const keyPressed = (operation) => {
    console.log(operation)
    sendMsg(operation.value);
    switch (operation.value) {
      case "backspace":
        return setTempEquation(
          tempEquation.substring(0, tempEquation.length - 1)
        );
      case "clear":
        return setTempEquation("");
      default:
        return setTempEquation(`${tempEquation}${operation.value}`);
    }
  };

  const updateGraph = useCallback(() => updateEquation(tempEquation), [
    tempEquation,
  ]);

  return (
    <group
      position={[-0.2, 1.14, -0.4]}
      rotation={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
    >
      <Display
        text={tempEquation}
        position={[0.2, 0.1, 0]}
        fontSize={0.04}
        color="#000"
        flashingDelay={500}
      />
      <group position={[-0.1, 0, 0]} rotation={[0, 0, 0]}>
        {[
          { text: "sin", value: "sin(" },
          { text: "cos", value: "cos(" },
          { text: "tan", value: "tan(" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 0]} calcKey />
          </Select>
        ))}
        {[
          { text: "sqrt", value: "sqrt(" },
          { text: "log", value: "log(" },
          { text: "ln", value: "ln(" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 1]} calcKey />
          </Select>
        ))}
        {[
          { text: "e", value: "e" },
          { text: "abs", value: "abs(" },
          { text: "^", value: "^" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 2]} calcKey />
          </Select>
        ))}
      </group>

      <group position={[0.2, 0, 0]} rotation={[0, 0, 0]}>
        {[
          { text: "7", value: "7" },
          { text: "8", value: "8" },
          { text: "9", value: "9" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 0]} calcKey />
          </Select>
        ))}
        {[
          { text: "4", value: "4" },
          { text: "5", value: "5" },
          { text: "6", value: "6" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 1]} calcKey />
          </Select>
        ))}
        {[
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "3", value: "3" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 2]} calcKey />
          </Select>
        ))}
        {[
          { text: ".", value: "." },
          { text: "0", value: "0" },
          { text: ",", value: "," },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 3]} calcKey />
          </Select>
        ))}
      </group>

      <group position={[0.5, 0, 0]} rotation={[0, 0, 0]}>
        {[
          { text: "(", value: "(" },
          { text: "+", value: "+" },
          { text: "Del", value: "backspace" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 0]} calcKey />
          </Select>
        ))}
        {[
          { text: ")", value: ")" },
          { text: "-", value: "-" },
          { text: "C", value: "clear" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 1]} calcKey />
          </Select>
        ))}
        {[
          { text: "exp", value: "exp(" },
          { text: "*", value: "*" },
          { text: "x", value: "x" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 2]} calcKey />
          </Select>
        ))}
        {[
          { text: "pi", value: "pi" },
          { text: "/", value: "/" },
          { text: "y", value: "y" },
        ].map((op, i) => (
          <Select key={op.text} onSelect={() => keyPressed(op)}>
            <Key name={op.text} pos={[i, 3]} calcKey />
          </Select>
        ))}
      </group>

      <Select onSelect={() => updateGraph()}>
        <Key
          name={"Update graph"}
          pos={[-0.1, 3]}
          width={3.7}
          fontSize={0.03}
          calcKey
        />
      </Select>
    </group>
  );
}
