import React from "react";
import { Entity } from "aframe-react";

export const Lights = (props: any) => {
  return (
    <Entity {...props}>
      <Entity
        light={{ type: "point", color: "#fff", intensity: 0.6 }}
        position={{ x: 3, y: 10, z: 1 }}
      />
      <Entity
        light={{ type: "point", color: "#fff", intensity: 0.2 }}
        position={{ x: -3, y: -10, z: 1 }}
      />
      <Entity
        light={{ type: "hemisphere,", groundColor: "#888", intensity: 0.8 }}
      />
    </Entity>
  );
};
