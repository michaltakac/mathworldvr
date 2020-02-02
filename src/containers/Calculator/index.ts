import * as React from "react";
import createContainer from "constate";

export const CALCULATOR_INITIAL_STATE = {
  expression: "x^2 + y^2",
  variables: ["x", "y"],
  inputs: []
};

function useCalculator({ initialState = CALCULATOR_INITIAL_STATE } = {}) {
  const [calculatorData, updateState] = React.useState(initialState);
  const updateEquation = (expression: string) => {
    updateState({
      ...calculatorData,
      expression
    });
  };
  const setVariables = (variables: string[]) =>
    updateState({
      ...calculatorData,
      variables
    });
  const setInputs = (inputs: string[]) =>
    updateState({
      ...calculatorData,
      inputs
    });
  return { calculatorData, updateEquation, setVariables, setInputs };
}

export const CalculatorContainer = createContainer(
  useCalculator,
  calculatorData => [calculatorData]
);
