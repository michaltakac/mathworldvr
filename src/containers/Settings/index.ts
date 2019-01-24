import * as React from "react";
import createContainer from "constate";

export const SETTINGS_INITIAL_STATE = {
  xMin: -1,
  yMin: -1,
  zMin: -4,
  xMax: 1,
  yMax: 1,
  zMax: 4,
  segments: 30,
  functionColor: "#bada55"
};

function useSettings({ initialState = SETTINGS_INITIAL_STATE } = {}) {
  const [settings, updateSettings] = React.useState(initialState);
  const setXmin = (value: number) =>
    updateSettings({
      ...settings,
      xMin: value
    });
  const setYmin = (value: number) =>
    updateSettings({
      ...settings,
      yMin: value
    });
  const setZmin = (value: number) =>
    updateSettings({
      ...settings,
      zMin: value
    });
  const setXmax = (value: number) =>
    updateSettings({
      ...settings,
      xMax: value
    });
  const setYmax = (value: number) =>
    updateSettings({
      ...settings,
      yMax: value
    });
  const setZmax = (value: number) =>
    updateSettings({
      ...settings,
      zMax: value
    });
  const setSegments = (value: number) => {
    updateSettings({
      ...settings,
      segments: value
    });
  };
  const setColor = (value: string) =>
    updateSettings({
      ...settings,
      functionColor: value
    });
  return {
    settings,
    setXmin,
    setYmin,
    setZmin,
    setXmax,
    setYmax,
    setZmax,
    setSegments,
    setColor
  };
}

export const SettingsContainer = createContainer(useSettings, settings => [
  settings
]);
