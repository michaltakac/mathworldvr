import React from 'react'
import {
  ArrowKeyRotation,
  Lights,
  Sky,
  VRScene,
  LeftController,
  RightController,
  Plane,
} from './index'
import { 
  AttentionBox, 
  Calculator, 
  FunctionBox, 
  ParametricFunction,
  UIPanel3D 
} from '../containers'

const App = () => {
  return (
    <>
      <VRScene>
        <ArrowKeyRotation />
        <AttentionBox />
        <LeftController />
        <RightController />

        <FunctionBox>
          <ParametricFunction />
        </FunctionBox>

        <Calculator />


        <Sky />
        <Plane />
        <Lights />
      </VRScene>
      
      {/* New 3D UI Panel using React Three Fiber */}
      <UIPanel3D />
    </>
  )
}

export default App