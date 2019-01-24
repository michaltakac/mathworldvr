import React from "react";
import { injectGlobal } from "styled-components";
import {
  Sky,
  VRScene,
  LeftController,
  RightController,
  Plane,
  // TODO: these should be containers
  AttentionBox,
  Calculator,
  FunctionBox,
  ParametricFunction,
  SettingsPanel,
  Loading,
  Camera
} from "../src/components";
import {
  SettingsContainer,
  SETTINGS_INITIAL_STATE
} from "../src/containers/Settings";
import {
  CalculatorContainer,
  CALCULATOR_INITIAL_STATE
} from "../src/containers/Calculator";

class App extends React.Component {
  state = { ready: false };
  componentDidMount() {
    injectGlobal`
      body {
        margin: 0;
        background-color: #030404;
      }
      .a-canvas {
        position: relative;
      }
    `;

    this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return <Loading />;
    }

    return (
      <div>
        <VRScene>
          <AttentionBox />
          <Camera />
          <LeftController />
          <RightController />
          <SettingsContainer.Provider initialState={SETTINGS_INITIAL_STATE}>
            <CalculatorContainer.Provider
              initialState={CALCULATOR_INITIAL_STATE}
            >
              <FunctionBox position={{ x: 0.4, y: 1.52, z: -0.76 }}>
                {/* Function mesh with grid */}
                <ParametricFunction />
              </FunctionBox>
              <Calculator />
            </CalculatorContainer.Provider>
            <SettingsPanel
              name="Function settings"
              position={{ x: -0.37, y: 1.93, z: -0.34 }}
              rotation={{ x: 10, y: 30, z: 0 }}
              scale={{ x: 0.5, y: 0.5, z: 0.5 }}
            />
          </SettingsContainer.Provider>
          <Sky />
          <Plane />
        </VRScene>
      </div>
    );
  }
}

export default App;
