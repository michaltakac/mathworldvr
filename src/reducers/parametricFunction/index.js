import * as ActionTypes from 'actions'

const initialState = {
  equation: 'x^2 + y^2',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PARAMETRIC_FUNCTION_SET_EQUATION:
      return { ...state, equation: action.equation }
    default: return state
  }
}
