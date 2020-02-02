import React from "react";
import { Entity } from "aframe-react";
import { Text } from "../Text";

export type CalcButtonProps = {
  actionToTrigger?: (action: any) => void;
  id?: string;
  buttonColor?: string;
  width?: number;
  height?: number;
  position?: { x: number; y: number; z: number };
  text?: string;
  textColor?: string;
  textWidth?: number;
  value: string;
};

export class CalcButton extends React.Component<CalcButtonProps, any> {
  static defaultProps: CalcButtonProps = {
    value: "",
    width: 0.15,
    height: 0.15,
    position: { x: 0, y: 0, z: 0 },
    text: "Text",
    textColor: "#000",
    buttonColor: "#bada55",
    textWidth: 0.8
  };

  constructor(props: any) {
    super(props);

    this.state = {
      depth: 0.02,
      opacity: 1
    };

    this.startIntersection = this.startIntersection.bind(this);
    this.endIntersection = this.endIntersection.bind(this);
  }

  startIntersection() {
    this.setState({ depth: 0.01, opacity: 0.2 });
  }

  endIntersection() {
    const { actionToTrigger, value } = this.props;
    this.setState({ depth: 0.02, opacity: 1 });

    // actionToTrigger(value);
  }

  render() {
    const {
      id,
      position,
      width,
      height,
      buttonColor,
      text,
      textColor,
      textWidth
    } = this.props;
    const { depth, opacity } = this.state;
    return (
      <Entity
        id={id}
        className="interactive"
        geometry={{ primitive: "box", height, width, depth }}
        material={{
          shader: "flat",
          side: "double",
          color: buttonColor,
          opacity
        }}
        scale={{ x: 0.5, y: 0.5, z: 0.5 }}
        position={position}
        hoverable
        clickable
        events={{
          mousedown: this.startIntersection,
          mouseup: this.endIntersection
          // "hover-start": this.startIntersection,
          // "hover-end": this.endIntersection
        }}
      >
        <Text
          value={text}
          color={textColor}
          align="center"
          zOffset={0.02}
          width={textWidth}
        />
      </Entity>
    );
  }
}
