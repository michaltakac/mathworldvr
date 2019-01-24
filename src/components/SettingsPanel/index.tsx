import * as React from "react";
import { Entity } from "aframe-react";
import { SettingsContainer } from "../../containers/Settings";
import { SettingsController } from "../";

const colors = ["#bada55", "red", "green", "purple", "blue", "cyan"];

export type SettingsPanelProps = {
  controllerLeft?: string;
  controllerRight?: string;
  name?: string;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scale?: { x: number; y: number; z: number };
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
  ...props
}: SettingsPanelProps) => {
  const {
    settings,
    setXmin,
    setYmin,
    setZmin,
    setXmax,
    setYmax,
    setZmax,
    setSegments,
    setColor
  } = React.useContext(SettingsContainer.Context);
  return (
    <Entity {...props}>
      <Entity datgui={{ name, controllerLeft, controllerRight }} />
      <SettingsController
        type="slider"
        name="xMin"
        step={0.01}
        min={-20}
        max={20}
        initialState={settings.xMin}
        actionToTrigger={setXmin}
      />

      <SettingsController
        type="slider"
        name="yMin"
        step={0.01}
        min={-20}
        max={20}
        initialState={settings.yMin}
        actionToTrigger={setYmin}
      />

      <SettingsController
        type="slider"
        name="zMin"
        step={0.01}
        min={-20}
        max={20}
        initialState={settings.zMin}
        actionToTrigger={setZmin}
      />

      <SettingsController
        type="slider"
        name="xMax"
        step={0.01}
        min={-20}
        max={20}
        initialState={settings.xMax}
        actionToTrigger={setXmax}
      />

      <SettingsController
        type="slider"
        name="yMax"
        step={0.01}
        min={-20}
        max={20}
        initialState={settings.yMax}
        actionToTrigger={setYmax}
      />

      <SettingsController
        type="slider"
        name="zMax"
        step={0.01}
        min={-20}
        max={20}
        initialState={settings.zMax}
        actionToTrigger={setZmax}
      />

      <SettingsController
        type="slider"
        name="segments"
        step={1}
        min={1}
        max={50}
        initialState={settings.segments}
        actionToTrigger={setSegments}
      />

      <SettingsController
        type="dropdown"
        name="functionColor"
        options={colors}
        initialState={settings.functionColor}
        actionToTrigger={setColor}
      />
    </Entity>
  );
};

SettingsPanel.defaultProps = defaultProps;
export { SettingsPanel };
