import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const propTypes = {
  equation: PropTypes.string,
  segments: PropTypes.number,
  xMin: PropTypes.number,
  xMax: PropTypes.number,
  yMin: PropTypes.number,
  yMax: PropTypes.number,
  zMin: PropTypes.number,
  zMax: PropTypes.number,
  functionColor: PropTypes.string,
}

const ParametricFuntion = ({ equation, segments, xMin, xMax, yMin, yMax, zMin, zMax, functionColor }) => {
  return (
    <Entity
      id="function-mesh"
      parametricfunction={{
        equation,
        segments,
        xMin,
        xMax,
        yMin,
        yMax,
        zMin,
        zMax,
        functionColor,
      }}
      grid="size: 2; step: 20"
    />
  )
}

ParametricFuntion.propTypes = propTypes
export default ParametricFuntion
