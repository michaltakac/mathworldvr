import { connect } from 'react-redux'
import { AttentionBox } from 'components'
import { uiAttentionboxToggle } from 'actions'

const mapStateToProps = (state) => ({
  attentionBoxVisible: state.ui.attentionBoxVisible,
})
const mapDispatchToProps = (dispatch) => ({
  toggleAttentionBox: () => dispatch(uiAttentionboxToggle()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AttentionBox)
