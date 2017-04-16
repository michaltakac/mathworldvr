import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from 'aframe-react'
import { CalcButton, Text } from 'components'

const propTypes = {
  displayText: PropTypes.string,
  writeText: PropTypes.func,
  backspace: PropTypes.func,
  clearText: PropTypes.func,
  updateEquation: PropTypes.func,
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
          text="Update"
          value={displayText}
          position={{ x: -0.28, y: -0.19, z: 0.03 }}
          width={0.43}
          actionToTrigger={updateEquation}
        />

        <CalcButton text="sin" position={{ x: -0.37, y: 0.09, z: 0.03 }} id="calc-sin" value="sin(" actionToTrigger={writeText} />
        <CalcButton text="cos" position={{ x: -0.28, y: 0.09, z: 0.03 }} id="calc-cos" value="cos(" actionToTrigger={writeText} />
        <CalcButton text="tan" position={{ x: -0.19, y: 0.09, z: 0.03 }} id="calc-tan" value="tan(" actionToTrigger={writeText} />
        <CalcButton text="sqrt" position={{ x: -0.37, y: 0, z: 0.03 }} id="calc-sqrt" value="sqrt(" actionToTrigger={writeText} />
        <CalcButton text="log" position={{ x: -0.28, y: 0, z: 0.03 }} id="calc-log" value="log(" actionToTrigger={writeText} />
        <CalcButton text="ln" position={{ x: -0.19, y: 0, z: 0.03 }} id="calc-ln" value="ln(" actionToTrigger={writeText} />
        <CalcButton text="e" position={{ x: -0.37, y: -0.09, z: 0.03 }} id="calc-e" value="e" actionToTrigger={writeText} />
        <CalcButton text="abs" position={{ x: -0.28, y: -0.09, z: 0.03 }} id="calc-abs" value="abs(" actionToTrigger={writeText} />
        <CalcButton text="^" position={{ x: -0.19, y: -0.09, z: 0.03 }} id="calc-square" value="^" actionToTrigger={writeText} />

        <CalcButton text="(" position={{ x: 0.19, y: 0.09, z: 0.03 }} id="calc-parent-left" value="(" actionToTrigger={writeText} />
        <CalcButton text=")" position={{ x: 0.19, y: 0, z: 0.03 }} id="calc-parent-right" value=")" actionToTrigger={writeText} />
        <CalcButton text="+" position={{ x: 0.28, y: 0.09, z: 0.03 }} id="calc-plus" value="+" actionToTrigger={writeText} />
        <CalcButton text="-" position={{ x: 0.28, y: 0, z: 0.03 }} id="calc-minus" value="-" actionToTrigger={writeText} />
        <CalcButton text="*" position={{ x: 0.28, y: -0.09, z: 0.03 }} id="calc-multiply" value="*" actionToTrigger={writeText} />
        <CalcButton text="/" position={{ x: 0.28, y: -0.18, z: 0.03 }} id="calc-divide" value="/" actionToTrigger={writeText} />
        <CalcButton text="exp" position={{ x: 0.19, y: -0.09, z: 0.03 }} id="calc-exp" value="exp(" actionToTrigger={writeText} />
        <CalcButton text="pi" position={{ x: 0.19, y: -0.18, z: 0.03 }} id="calc-pi" value="pi" actionToTrigger={writeText} />

        <CalcButton text="1" position={{ x: -0.09, y: -0.09, z: 0.03 }} id="calc-1" value="1" actionToTrigger={writeText} />
        <CalcButton text="2" position={{ x: 0, y: -0.09, z: 0.03 }} id="calc-2" value="2" actionToTrigger={writeText} />
        <CalcButton text="3" position={{ x: 0.09, y: -0.09, z: 0.03 }} id="calc-3" value="3" actionToTrigger={writeText} />
        <CalcButton text="4" position={{ x: -0.09, y: 0, z: 0.03 }} id="calc-4" value="4" actionToTrigger={writeText} />
        <CalcButton text="5" position={{ x: 0, y: 0, z: 0.03 }} id="calc-5" value="5" actionToTrigger={writeText} />
        <CalcButton text="6" position={{ x: 0.09, y: 0, z: 0.03 }} id="calc-6" value="6" actionToTrigger={writeText} />
        <CalcButton text="7" position={{ x: -0.09, y: 0.09, z: 0.03 }} id="calc-7" value="7" actionToTrigger={writeText} />
        <CalcButton text="8" position={{ x: 0, y: 0.09, z: 0.03 }} id="calc-8" value="8" actionToTrigger={writeText} />
        <CalcButton text="9" position={{ x: 0.09, y: 0.09, z: 0.03 }} id="calc-9" value="9" actionToTrigger={writeText} />
        <CalcButton text="0" position={{ x: 0, y: -0.18, z: 0.03 }} id="calc-0" value="0" actionToTrigger={writeText} />
        <CalcButton text="." position={{ x: -0.09, y: -0.18, z: 0.03 }} id="calc-dot" value="." actionToTrigger={writeText} />
        <CalcButton text="," position={{ x: 0.09, y: -0.18, z: 0.03 }} id="calc-comma" value="," actionToTrigger={writeText} />

        <CalcButton text="<-" position={{ x: 0.37, y: 0.09, z: 0.03 }} id="calc-backspace" actionToTrigger={backspace} />
        <CalcButton text="clr" position={{ x: 0.37, y: 0, z: 0.03 }} id="calc-clear" actionToTrigger={clearText} />
        <CalcButton text="x" position={{ x: 0.37, y: -0.09, z: 0.03 }} id="calc-x" value="x" actionToTrigger={writeText} />
        <CalcButton text="y" position={{ x: 0.37, y: -0.18, z: 0.03 }} id="calc-y" value="y" actionToTrigger={writeText} />
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
