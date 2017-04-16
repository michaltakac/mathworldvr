import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { CalcButton, Text } from 'components'

const propTypes = {
  displayText: PropTypes.string.isRequired,
  writeText: PropTypes.func.isRequired,
  backspace: PropTypes.func.isRequired,
  clearText: PropTypes.func.isRequired,
  updateEquation: PropTypes.func.isRequired,
}

const Calculator = ({ displayText, writeText, backspace, clearText, updateEquation }) => {
  return (
    <Entity
      className="interactive calculator"
      id="text-box"
      geometry="primitive: box; width: 0.88; height: 0.65; depth: 0.01;"
      material="shader: flat; side: double; color: #8d8547; "
      position="-0.03 1.2 -0.26"
      rotation="-45 0 0"
      scale="1 1 1"
      grabbable
      stretchable
      dynamic-body
    >
      { /* Calculator display */ }
      <Text
        id="calc-display"
        value={displayText}
        align="center"
        color="#fff"
        position={{ x: 0, y: 0.26, z: 0 }}
        width={0.5}
        zOffset={0.01}
      />

      { /* --- HERE STARTS THE BUTTONS --- */ }
      <Entity position={{ x: 0, y: 0.08, z: 0 }}>
        { /* Update button */ }
        <CalcButton
          id="calc-update"
          value="Update"
          position={{ x: -0.28, y: -0.19, z: 0.03 }}
          width={0.43}
          actionToTrigger={() => updateEquation(displayText)}
        />

        <CalcButton value="sin" position={{ x: -0.37, y: 0.09, z: 0.03 }} id="calc-sin" actionToTrigger={() => writeText('sin(')} />
        <CalcButton value="cos" position={{ x: -0.28, y: 0.09, z: 0.03 }} id="calc-cos" actionToTrigger={() => writeText('cos(')} />
        <CalcButton value="tan" position={{ x: -0.19, y: 0.09, z: 0.03 }} id="calc-tan" actionToTrigger={() => writeText('tan(')} />
        <CalcButton value="sqrt" position={{ x: -0.37, y: 0, z: 0.03 }} id="calc-sqrt" actionToTrigger={() => writeText('sqrt(')} />
        <CalcButton value="log" position={{ x: -0.28, y: 0, z: 0.03 }} id="calc-log" actionToTrigger={() => writeText('log(')} />
        <CalcButton value="ln" position={{ x: -0.19, y: 0, z: 0.03 }} id="calc-ln" actionToTrigger={() => writeText('ln(')} />
        <CalcButton value="e" position={{ x: -0.37, y: -0.09, z: 0.03 }} id="calc-e" actionToTrigger={() => writeText('e')} />
        <CalcButton value="abs" position={{ x: -0.28, y: -0.09, z: 0.03 }} id="calc-abs" actionToTrigger={() => writeText('abs(')} />
        <CalcButton value="^" position={{ x: -0.19, y: -0.09, z: 0.03 }} id="calc-square" actionToTrigger={() => writeText('^')} />

        <CalcButton value="(" position={{ x: 0.19, y: 0.09, z: 0.03 }} id="calc-parent-left" actionToTrigger={() => writeText('(')} />
        <CalcButton value=")" position={{ x: 0.19, y: 0, z: 0.03 }} id="calc-parent-right" actionToTrigger={() => writeText(')')} />
        <CalcButton value="+" position={{ x: 0.28, y: 0.09, z: 0.03 }} id="calc-plus" actionToTrigger={() => writeText('+')} />
        <CalcButton value="-" position={{ x: 0.28, y: 0, z: 0.03 }} id="calc-minus" actionToTrigger={() => writeText('-')} />
        <CalcButton value="*" position={{ x: 0.28, y: -0.09, z: 0.03 }} id="calc-multiply" actionToTrigger={() => writeText('*')} />
        <CalcButton value="/" position={{ x: 0.28, y: -0.18, z: 0.03 }} id="calc-divide" actionToTrigger={() => writeText('/')} />
        <CalcButton value="exp" position={{ x: 0.19, y: -0.09, z: 0.03 }} id="calc-exp" actionToTrigger={() => writeText('exp(')} />
        <CalcButton value="pi" position={{ x: 0.19, y: -0.18, z: 0.03 }} id="calc-pi" actionToTrigger={() => writeText('pi')} />

        <CalcButton value="1" position={{ x: -0.09, y: -0.09, z: 0.03 }} id="calc-1" actionToTrigger={() => writeText('1')} />
        <CalcButton value="2" position={{ x: 0, y: -0.09, z: 0.03 }} id="calc-2" actionToTrigger={() => writeText('2')} />
        <CalcButton value="3" position={{ x: 0.09, y: -0.09, z: 0.03 }} id="calc-3" actionToTrigger={() => writeText('3')} />
        <CalcButton value="4" position={{ x: -0.09, y: 0, z: 0.03 }} id="calc-4" actionToTrigger={() => writeText('4')} />
        <CalcButton value="5" position={{ x: 0, y: 0, z: 0.03 }} id="calc-5" actionToTrigger={() => writeText('5')} />
        <CalcButton value="6" position={{ x: 0.09, y: 0, z: 0.03 }} id="calc-6" actionToTrigger={() => writeText('6')} />
        <CalcButton value="7" position={{ x: -0.09, y: 0.09, z: 0.03 }} id="calc-7" actionToTrigger={() => writeText('7')} />
        <CalcButton value="8" position={{ x: 0, y: 0.09, z: 0.03 }} id="calc-8" actionToTrigger={() => writeText('8')} />
        <CalcButton value="9" position={{ x: 0.09, y: 0.09, z: 0.03 }} id="calc-9" actionToTrigger={() => writeText('9')} />
        <CalcButton value="0" position={{ x: 0, y: -0.18, z: 0.03 }} id="calc-0" actionToTrigger={() => writeText('0')} />
        <CalcButton value="." position={{ x: -0.09, y: -0.18, z: 0.03 }} id="calc-dot" actionToTrigger={() => writeText('.')} />
        <CalcButton value="," position={{ x: 0.09, y: -0.18, z: 0.03 }} id="calc-comma" actionToTrigger={() => writeText(',')} />

        <CalcButton value="<-" position={{ x: 0.37, y: 0.09, z: 0.03 }} id="calc-backspace" actionToTrigger={backspace} />
        <CalcButton value="clr" position={{ x: 0.37, y: 0, z: 0.03 }} id="calc-clear" actionToTrigger={clearText} />
        <CalcButton value="x" position={{ x: 0.37, y: -0.09, z: 0.03 }} id="calc-x" actionToTrigger={() => writeText('x')} />
        <CalcButton value="y" position={{ x: 0.37, y: -0.18, z: 0.03 }} id="calc-y" actionToTrigger={() => writeText('y')} />
      </Entity>
      { /* --- END OF BUTTONS --- */ }

      <Entity id="sld-disclaimer" position={{ x: -0.09, y: -0.29, z: 0.02 }}>
        <Entity
          id="sld-logo"
          geometry={{ primitive: 'plane', width: 1, height: 1 }}
          material={{ transparent: true, opacity: 1, shader: 'flat', src: 'url(sld-logo.png)', side: 'front', height: 1024, width: 1024 }}
          position={{ x: -0.18, y: 0.05, z: 0.01 }}
          scale={{ x: 0.14, y: 0.14, z: 0.14 }}
        />
        <Text
          color="#fff"
          align="center"
          value="Disclaimer: This is an experimental project\n
            made by VR team at Sleighdogs GmbH with some help from Technical University in Kosice (Slovakia).\n
            If grabbing with HTC Vive / Oculus Touch controllers doesn't work,\n
            try to reload the page with your controllers connected!\n
            http://sld.gs/"
          position={{ x: 0.24, y: 0.05, z: -0.01 }}
          width={0.3}
          lineHeight={50}
        />
      </Entity>
    </Entity>
  )
}

Calculator.propTypes = propTypes
export default Calculator
