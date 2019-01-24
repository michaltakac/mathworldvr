import React from "react";
import { Entity } from "aframe-react";

export type TextProps = {
  id?: string;
  children?: any;
  color?: string;
  value: string;
  width?: number;
  lineHeight?: number;
  letterSpacing?: number;
  align?: string;
  opacity?: number;
  zOffset?: number;
  position?: { x: number; y: number; z: number };
};

const defaultProps = {
  color: "#000",
  width: 0,
  lineHeight: 38,
  letterSpacing: 0,
  align: "left",
  opacity: 1,
  zOffset: 0
};

function Text({
  align,
  color,
  letterSpacing,
  lineHeight,
  opacity,
  value,
  width,
  zOffset,
  ...props
}: TextProps) {
  return (
    <Entity
      text={{
        value,
        width,
        align,
        letterSpacing,
        lineHeight,
        color,
        opacity,
        zOffset
      }}
      {...props}
    >
      {props.children}
    </Entity>
  );
}

Text.defaultProps = defaultProps;

export { Text };
