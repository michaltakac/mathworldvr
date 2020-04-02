import { connect } from 'react-redux'
import { FunctionBox } from 'components'

const mapStateToProps = (state) => ({
  position: state.functionBox.position,
})

export default connect(mapStateToProps)(FunctionBox)
