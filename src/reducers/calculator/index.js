import * as ActionTypes from 'actions'

const initialState = {
  displayText: 'x^2 + y^2',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CALCULATOR_WRITE_TEXT:
      return { ...state, displayText: `${state.displayText}${action.text}` }
    case ActionTypes.CALCULATOR_BACKSPACE:
      return { ...state, displayText: state.displayText.slice(0, -1) }
    case ActionTypes.CALCULATOR_CLEAR_TEXT:
      return { ...state, displayText: '' }
    default: return state
  }
}
