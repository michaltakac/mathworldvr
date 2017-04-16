import React from 'react'
import { injectGlobal } from 'styled-components'
import {
  Lights,
  Sky,
  VRScene,
  LeftController,
  RightController,
  Plane,
} from 'components'
import { AttentionBox, Calculator, FunctionBox, ParametricFunction, SettingsPanel } from 'containers'

class App extends React.Component {
  componentDidMount() {
    injectGlobal`
      body {
        margin: 0;
      }
      .a-canvas {
        position: relative;
      }
    `
  }

  render() {
    return (
      <VRScene>
        <AttentionBox />
        <LeftController />
        <RightController />

        <FunctionBox>
          { /* Function mesh with grid */ }
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
        <Lights />
        <Plane />
      </VRScene>
    )
  }
}

export default App
