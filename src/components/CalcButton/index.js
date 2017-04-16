import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { Text } from 'components'

export default class CalcButton extends React.Component {
  static propTypes = {
    actionToTrigger: PropTypes.func,
    id: PropTypes.string,
    buttonColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    position: PropTypes.object,
    text: PropTypes.string,
    textColor: PropTypes.string,
    textWidth: PropTypes.number,
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
    width: 0.15,
    height: 0.15,
    position: { x: 0, y: 0, z: 0 },
    text: 'Text',
    textColor: '#000',
    buttonColor: '#bada55',
    textWidth: 0.8,
  }

  constructor(props) {
    super(props)

    this.state = {
      depth: 0.02,
      opacity: 1,
    }

    this.startIntersection = this.startIntersection.bind(this)
    this.endIntersection = this.endIntersection.bind(this)
  }

  startIntersection() {
    const { actionToTrigger, value } = this.props
    this.setState({ depth: 0, opacity: 0.2 })
    actionToTrigger(value)
  }

  endIntersection() {
    this.setState({ depth: 0.02, opacity: 1 })
  }

  render() {
    const { id, position, width, height, buttonColor, text, textColor, textWidth } = this.props
    const { depth, opacity } = this.state
    return (
      <Entity
        id={id}
        className="interactive"
        geometry={{ primitive: 'box', height, width, depth }}
        material={{ shader: 'flat', side: 'double', color: buttonColor, opacity }}
        scale={{ x: 0.5, y: 0.5, z: 0.5 }}
        position={position}
        hoverable
        clickable
        events={{
          'hover-start': this.startIntersection,
          'hover-end': this.endIntersection,
        }}
      >
        <Text
          value={text}
          color={textColor}
          align="center"
          zOffset={0.02}
          width={textWidth}
        />
      </Entity>
    )
  }
}
