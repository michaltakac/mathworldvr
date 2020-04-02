import { connect } from 'react-redux'
import { Calculator } from 'components'
import { calculatorWriteText, calculatorBackspace, calculatorClearText, parametricFunctionSetEquation } from 'actions'

const mapStateToProps = (state) => ({
  displayText: state.calculator.displayText,
})

const mapDispatchToProps = (dispatch) => ({
  writeText: (text) => dispatch(calculatorWriteText(text)),
  backspace: () => dispatch(calculatorBackspace()),
  clearText: () => dispatch(calculatorClearText()),
  updateEquation: (equation) => dispatch(parametricFunctionSetEquation(equation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
