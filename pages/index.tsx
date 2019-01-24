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
import { SettingsContainer } from "../src/containers/Settings";
import { CalculatorContainer } from "../src/containers/Calculator";

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
          <SettingsContainer.Provider>
            <CalculatorContainer.Provider>
              <FunctionBox position={{ x: 0.45, y: 1.52, z: -1 }}>
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
