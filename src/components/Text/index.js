import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.number,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  align: PropTypes.string,
  opacity: PropTypes.number,
  zOffset: PropTypes.number,
}

const defaultProps = {
  color: '#000',
  value: 'Default text',
  width: 0,
  lineHeight: 38,
  letterSpacing: 0,
  align: 'left',
  opacity: 1,
  zOffset: 0,
}
const Text = ({ align, color, letterSpacing, lineHeight, opacity, value, width, zOffset, ...props }) => {
  return (
    <Entity
      text={{ value, width, align, letterSpacing, lineHeight, color, opacity, zOffset }}
      {...props}
    >
      {props.children}
    </Entity>
  )
}

Text.propTypes = propTypes
Text.defaultProps = defaultProps
export default Text
