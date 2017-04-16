/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  attentionBoxVisible: PropTypes.bool,
  toggleAttentionBox: PropTypes.func,
}

const AttentionBox = ({ attentionBoxVisible, toggleAttentionBox }) => {
  return (
    <div style={{ left: '50%', position: 'absolute', zIndex: 1000, display: attentionBoxVisible ? 'block' : 'none', fontFamily: 'Arial', fontSize: 13 }}>
      <div style={{ background: 'rgba(0, 0, 0, 0.85)', position: 'relative', left: '-50%', width: 270, padding: 20, margin: 20 }}>
        <span style={{ color: '#fff', textAlign: 'right', right: 10 }}>
          <a href="#" onClick={toggleAttentionBox} style={{ color: '#81d1ef' }}>Close [x]</a>
        </span>
        <h3 style={{ color: '#fff', margin: '0 auto', textAlign: 'center', marginTop: 10 }}>MathworldVR</h3>

        <blockquote style={{ color: '#fff', margin: '0 auto', textAlign: 'center', marginTop: 10 }}>
          "I am convinced that the best learning takes place when the learner takes charge." <br />
          <span style={{ fontStyle: 'italic' }}>- Seymour Papert</span>
        </blockquote>

        <p style={{ color: '#fff', margin: '0 auto', textAlign: 'center', marginTop: 10 }}>
          This project is designed for HTC Vive with controllers.
          Vive support currently only works in newest, experimental versions of Chromium and Firefox Nightly browsers.
          For more information check <a href="https://webvr.info/" target="_blank" style={{ color: '#81d1ef' }}>https://webvr.info/</a>.
        </p>

        <p style={{ color: '#fff', margin: '0 auto', textAlign: 'center', marginTop: 10 }}>
          Check the code at <a href="https://github.com/michaltakac/mathworldvr/" target="_blank" style={{ color: '#81d1ef' }}>https://github.com/michaltakac/mathworldvr/</a>.
        </p>

        <p style={{ color: '#fff', margin: '0 auto', textAlign: 'center', marginTop: 10 }}>
          We would like to hear feedback from you. What should MathworldVR become?
          What do you expect in fully-featured app? Please contact us at: <br /><br />
          <a href="mailto:michal@sld.gs" style={{ color: '#81d1ef' }}>michal@sld.gs</a><br />
          <a href="mailto:maros@sld.gs" style={{ color: '#81d1ef' }}>maros@sld.gs</a><br /><br />
          <img src="sld-logo-icon.png" width="80px" alt="Sleighdogs" style={{ display: 'initial' }} />
        </p>
      </div>
    </div>
  )
}

AttentionBox.propTypes = propTypes
export default AttentionBox
