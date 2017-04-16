import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const propTypes = {
  actionToTrigger: PropTypes.func,
}

const defaultProps = {
  type: 'slider',
}

const SettingsController = (props) => {
  return (
    <Entity datguicontroller={props} />
  )
}

SettingsController.propTypes = propTypes
SettingsController.defaultProps = defaultProps
export default SettingsController
