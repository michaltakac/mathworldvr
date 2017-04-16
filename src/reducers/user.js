import * as ActionTypes from 'actions'

const initialState = {
  position: { x: 0, y: 0, z: 0 },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_SET_POSITION:
      return { ...state, position: action.position }
    default: return state
  }
}
