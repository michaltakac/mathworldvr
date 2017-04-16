import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const Grid = (props) => {
  return (
    <Entity
      grid={{
        size: props.size,
        step: props.step,
        colorCenterLine: props.colorCenterLine,
        colorGrid: props.colorGrid,
      }}
      {...props}
    />
  )
}

Grid.propTypes = {
  size: PropTypes.number,
  step: PropTypes.number,
  colorCenterLine: PropTypes.string,
  colorGrid: PropTypes.string,
}

export default Grid
