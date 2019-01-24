import * as React from "react";
import { Entity } from "aframe-react";
import { SettingsContainer } from "../../containers/Settings";

export function ParametricFunction() {
  const { settings } = React.useContext(SettingsContainer.Context);

  return (
    <Entity
      id="function-mesh"
      parametricfunction={{ ...settings, equation: "x^2 + y^2" }}
      grid="size: 2; step: 20"
    />
  );
}
