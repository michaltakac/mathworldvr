import * as ActionTypes from 'actions'

const initialState = {
  position: { x: 0.65, y: 1.45, z: -1.03 },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FUNCTION_BOX_SET_POSITION:
      return { ...state, position: action.position }
    default: return state
  }
}
