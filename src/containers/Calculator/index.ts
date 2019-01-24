// TODO: refactor to support state management with React.useContext and constate

// import { connect } from 'react-redux'
// import { Calculator } from 'components'
// import { calculatorWriteText, calculatorBackspace, calculatorClearText, parametricFunctionSetEquation } from 'actions'

// const mapStateToProps = (state) => ({
//   displayText: state.calculator.displayText,
// })

// const mapDispatchToProps = (dispatch) => ({
//   writeText: (text) => dispatch(calculatorWriteText(text)),
//   backspace: () => dispatch(calculatorBackspace()),
//   clearText: () => dispatch(calculatorClearText()),
//   updateEquation: (equation) => dispatch(parametricFunctionSetEquation(equation)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Calculator)

import * as React from "react";
import createContainer from "constate";

export const CALCULATOR_INITIAL_STATE = {
  expression: "x^2 + y^2",
  variables: ["x", "y"],
  inputs: []
};

function useCalculator({ initialState = CALCULATOR_INITIAL_STATE } = {}) {
  const [settings, updateState] = React.useState(initialState);
  const updateEquation = (expression: string) =>
    updateState({
      ...settings,
      expression
    });
  const setVariables = (variables: string[]) =>
    updateState({
      ...settings,
      variables
    });
  const setInputs = (inputs: string[]) =>
    updateState({
      ...settings,
      inputs
    });
  return { settings, updateEquation, setVariables, setInputs };
}

export const CalculatorContainer = createContainer(useCalculator, settings => [
  settings
]);
