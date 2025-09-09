import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'

const CalcButton = ({ text, position, onClick }) => {
  return (
    <Entity
      geometry={{ primitive: 'box', width: 0.25, height: 0.2, depth: 0.05 }}
      material={{ color: '#666' }}
      position={position}
      text={{
        value: text,
        color: '#FFF',
        align: 'center',
        width: 2,
        zOffset: 0.03
      }}
      className="interactive"
      events={{
        click: onClick
      }}
      animation__mouseenter={{
        property: 'material.color',
        to: '#888',
        startEvents: 'mouseenter',
        dur: 200
      }}
      animation__mouseleave={{
        property: 'material.color',
        to: '#666',
        startEvents: 'mouseleave',
        dur: 200
      }}
    />
  )
}

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CalcButton