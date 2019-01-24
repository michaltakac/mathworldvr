import React from "react";
import { Entity } from "aframe-react";

export const Camera = (props: any) => {
  return (
    <Entity
      camera=""
      look-controls
      wasd-controls
      position="0 1.6 0"
      {...props}
    />
  );
};
