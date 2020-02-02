import React from "react";
import { Entity } from "aframe-react";

export const LeftController = (props: any) => {
  return (
    <Entity
      id="leftController"
      hand-controls="left"
      sphere-collider={{ objects: ".interactive", radius: 0.05 }}
      if-no-vr-headset={{ visible: false }}
      teleport-controls
      super-hands
      static-body={{ shape: "sphere", sphereRadius: 0.05 }}
      {...props}
    />
  );
};
