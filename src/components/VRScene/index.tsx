import * as React from "react";

export function VRScene(props: any) {
  return <a-scene physics="gravity: 0">{props.children}</a-scene>;
}
