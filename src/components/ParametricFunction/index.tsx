import * as React from "react";
import { Entity } from "aframe-react";
import { SettingsContainer } from "../../containers/Settings";
import { CalculatorContainer } from "../../containers/Calculator";

export function ParametricFunction() {
  const { settings } = React.useContext(SettingsContainer.Context);
  const { calculatorData } = React.useContext(CalculatorContainer.Context);

  return (
    <Entity
      id="function-mesh"
      parametricfunction={{ ...settings, equation: calculatorData.expression }}
      grid="size: 2; step: 20"
    />
  );
}
