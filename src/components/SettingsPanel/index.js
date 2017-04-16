import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { SettingsController } from 'components'

const colors = ['#bada55', 'red', 'green', 'purple', 'blue', 'cyan']

const propTypes = {
  controllerLeft: PropTypes.string,
  controllerRight: PropTypes.string,
  children: PropTypes.array,
  name: PropTypes.string,
  setXMin: PropTypes.func,
  setYMin: PropTypes.func,
  setZMin: PropTypes.func,
  setXMax: PropTypes.func,
  setYMax: PropTypes.func,
  setZMax: PropTypes.func,
  setSegments: PropTypes.func,
  setFunctionColor: PropTypes.func,
}

const defaultProps = {
  controllerLeft: '#leftController',
  controllerRight: '#rightController',
  name: 'Settings',
}

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
}) => {
  return (
    <Entity datgui={{ name, controllerLeft, controllerRight }} {...props}>
      <SettingsController type="slider" name="xMin" step={0.01} min={-20} max={20} initialState={-1} actionToTrigger={setXMin} />
      <SettingsController type="slider" name="yMin" step={0.01} min={-20} max={20} initialState={-1} actionToTrigger={setYMin} />
      <SettingsController type="slider" name="zMin" step={0.01} min={-20} max={20} initialState={-4} actionToTrigger={setZMin} />
      <SettingsController type="slider" name="xMax" step={0.01} min={-20} max={20} initialState={1} actionToTrigger={setXMax} />
      <SettingsController type="slider" name="yMax" step={0.01} min={-20} max={20} initialState={1} actionToTrigger={setYMax} />
      <SettingsController type="slider" name="zMax" step={0.01} min={-20} max={20} initialState={4} actionToTrigger={setZMax} />
      <SettingsController type="slider" name="segments" step={1} min={1} max={50} initialState={30} actionToTrigger={setSegments} />

      <SettingsController type="dropdown" name="functionColor" initialState="#bada55" options={colors} actionToTrigger={setFunctionColor} />
    </Entity>
  )
}

SettingsPanel.propTypes = propTypes
SettingsPanel.defaultProps = defaultProps
export default SettingsPanel
