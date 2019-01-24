import React from "react";
import { injectGlobal } from "styled-components";
import {
  Lights,
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
  Loading
} from "../src/components";

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
          <LeftController />
          <RightController />
          <FunctionBox>
            {/* Function mesh with grid */}
            <ParametricFunction />
          </FunctionBox>
          <Calculator />
          <SettingsPanel
            name="Function settings"
            position={{ x: -0.37, y: 1.93, z: -0.34 }}
            rotation={{ x: 10, y: 30, z: 0 }}
            scale={{ x: 0.5, y: 0.5, z: 0.5 }}
          />
          <Sky />
          <Plane />
        </VRScene>
      </div>
    );
  }
}

export default App;
