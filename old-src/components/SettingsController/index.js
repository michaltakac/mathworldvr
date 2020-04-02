import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const propTypes = {
  initialState: PropTypes.any.isRequired,
  actionToTrigger: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
}

const defaultProps = {
  type: 'slider',
  options: [],
  step: 0.01,
  min: 1,
  max: 10,
}

const SettingsController = ({
  actionToTrigger, initialState, min, max, name, options, step, type,
}) => {
  return (
    <Entity
      datguicontroller={{
        actionToTrigger, initialState, min, name, max, options, step, type,
      }}
    />
  )
}

SettingsController.propTypes = propTypes
SettingsController.defaultProps = defaultProps
export default SettingsController
