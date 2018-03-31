import * as ActionTypes from 'actions'

const initialState = {
  xMin: -1,
  yMin: -1,
  zMin: -4,
  xMax: 1,
  yMax: 1,
  zMax: 4,
  segments: 30,
  functionColor: '#bada55',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SETTINGS_SET_X_MIN:
      return { ...state, xMin: action.payload }
    case ActionTypes.SETTINGS_SET_Y_MIN:
      return { ...state, yMin: action.payload }
    case ActionTypes.SETTINGS_SET_Z_MIN:
      return { ...state, zMin: action.payload }
    case ActionTypes.SETTINGS_SET_X_MAX:
      return { ...state, xMax: action.payload }
    case ActionTypes.SETTINGS_SET_Y_MAX:
      return { ...state, yMax: action.payload }
    case ActionTypes.SETTINGS_SET_Z_MAX:
      return { ...state, zMax: action.payload }
    case ActionTypes.SETTINGS_SET_SEGMENTS:
      return { ...state, segments: action.payload }
    case ActionTypes.SETTINGS_SET_FUNCTION_COLOR:
      return { ...state, functionColor: action.payload }
    default: return state
  }
}
