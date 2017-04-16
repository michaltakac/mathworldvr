import { connect } from 'react-redux'
import { SettingsPanel } from 'components'
import {
  settingsSetXMin,
  settingsSetYMin,
  settingsSetZMin,
  settingsSetXMax,
  settingsSetYMax,
  settingsSetZMax,
  settingsSetSegments,
  settingsSetFunctionColor,
} from 'actions'

const mapDispatchToProps = (dispatch) => {
  return {
    setXMin: (xMin) => dispatch(settingsSetXMin(xMin)),
    setYMin: (yMin) => dispatch(settingsSetYMin(yMin)),
    setZMin: (zMin) => dispatch(settingsSetZMin(zMin)),
    setXMax: (xMax) => dispatch(settingsSetXMax(xMax)),
    setYMax: (yMax) => dispatch(settingsSetYMax(yMax)),
    setZMax: (zMax) => dispatch(settingsSetZMax(zMax)),
    setSegments: (segments) => dispatch(settingsSetSegments(segments)),
    setFunctionColor: (color) => dispatch(settingsSetFunctionColor(color)),
  }
}

export default connect(null, mapDispatchToProps)(SettingsPanel)
