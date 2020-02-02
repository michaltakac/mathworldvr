import React from "react";
import { Entity } from "aframe-react";

export type SettingsControllerProps = {
  initialState: any;
  actionToTrigger: (action: any) => void;
  min?: number;
  max?: number;
  step?: number;
  type?: string;
  name: string;
  options?: Array<any>;
};

const defaultProps = {
  type: "slider",
  options: [],
  step: 0.01,
  min: 1,
  max: 10
};

const SettingsController = ({
  actionToTrigger,
  initialState,
  min,
  max,
  name,
  options,
  step,
  type
}: SettingsControllerProps) => {
  return (
    <Entity
      datguicontroller={{
        actionToTrigger,
        initialState,
        min,
        name,
        max,
        options,
        step,
        type
      }}
    />
  );
};

SettingsController.defaultProps = defaultProps;
export { SettingsController };
