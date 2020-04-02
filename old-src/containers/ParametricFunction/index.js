import { connect } from 'react-redux'
import { ParametricFunction } from 'components'

const mapStateToProps = (state) => ({
  equation: state.parametricFunction.equation,
  segments: state.settings.segments,
  xMin: state.settings.xMin,
  xMax: state.settings.xMax,
  yMin: state.settings.yMin,
  yMax: state.settings.yMax,
  zMin: state.settings.zMin,
  zMax: state.settings.zMax,
  functionColor: state.settings.functionColor,
})

export default connect(mapStateToProps)(ParametricFunction)
