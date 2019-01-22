import React from "react";
import { Entity } from "aframe-react";
import { SettingsController } from "../";

const colors = ["#bada55", "red", "green", "purple", "blue", "cyan"];

export type SettingsPanelProps = {
  controllerLeft?: string;
  controllerRight?: string;
  children: any;
  name?: string;
  setXMin: () => Promise<void>;
  setYMin: () => Promise<void>;
  setZMin: () => Promise<void>;
  setXMax: () => Promise<void>;
  setYMax: () => Promise<void>;
  setZMax: () => Promise<void>;
  setSegments: () => Promise<void>;
  setFunctionColor: () => Promise<void>;
};

const defaultProps = {
  controllerLeft: "#leftController",
  controllerRight: "#rightController",
  name: "Settings"
};

const SettingsPanel = ({
  name,
  controllerLeft,
  controllerRight,
  setXMin,
  setYMin,
  setZMin,
  setXMax,
  setYMax,
  setZMax,
  setSegments,
  setFunctionColor,
  ...props
}: SettingsPanelProps) => {
  return (
    <Entity {...props}>
      <Entity datgui={{ name, controllerLeft, controllerRight }} />
      <SettingsController
        type="slider"
        name="xMin"
        step={0.01}
        min={-20}
        max={20}
        initialState={-1}
        actionToTrigger={setXMin}
      />
      <SettingsController
        type="slider"
        name="yMin"
        step={0.01}
        min={-20}
        max={20}
        initialState={-1}
        actionToTrigger={setYMin}
      />
      <SettingsController
        type="slider"
        name="zMin"
        step={0.01}
        min={-20}
        max={20}
        initialState={-4}
        actionToTrigger={setZMin}
      />
      <SettingsController
        type="slider"
        name="xMax"
        step={0.01}
        min={-20}
        max={20}
        initialState={1}
        actionToTrigger={setXMax}
      />
      <SettingsController
        type="slider"
        name="yMax"
        step={0.01}
        min={-20}
        max={20}
        initialState={1}
        actionToTrigger={setYMax}
      />
      <SettingsController
        type="slider"
        name="zMax"
        step={0.01}
        min={-20}
        max={20}
        initialState={4}
        actionToTrigger={setZMax}
      />
      <SettingsController
        type="slider"
        name="segments"
        step={1}
        min={1}
        max={50}
        initialState={30}
        actionToTrigger={setSegments}
      />

      <SettingsController
        type="dropdown"
        name="functionColor"
        initialState="#bada55"
        options={colors}
        actionToTrigger={setFunctionColor}
      />
    </Entity>
  );
};

SettingsPanel.defaultProps = defaultProps;
export { SettingsPanel };
