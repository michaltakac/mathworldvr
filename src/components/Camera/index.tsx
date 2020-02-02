import React from "react";
import { Entity } from "aframe-react";

export const Camera = (props: any) => {
  return (
    <Entity
      camera=""
      look-controls
      wasd-controls
      position="0 1.6 0"
      raycaster="objects: .interactive"
      cursor="rayOrigin:mouse"
      static-body="shape: sphere; sphereRadius: 0.001"
      super-hands="colliderEvent: raycaster-intersection;
                             colliderEventProperty: els;
                             colliderEndEvent:raycaster-intersection-cleared;
                             colliderEndEventProperty: clearedEls;"
      {...props}
    />
  );
};
