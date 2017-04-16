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
      return { ...state, xMin: action.xMin }
    case ActionTypes.SETTINGS_SET_Y_MIN:
      return { ...state, yMin: action.yMin }
    case ActionTypes.SETTINGS_SET_Z_MIN:
      return { ...state, zMin: action.zMin }
    case ActionTypes.SETTINGS_SET_X_MAX:
      return { ...state, xMax: action.xMax }
    case ActionTypes.SETTINGS_SET_Y_MAX:
      return { ...state, yMax: action.yMax }
    case ActionTypes.SETTINGS_SET_Z_MAX:
      return { ...state, zMax: action.zMax }
    case ActionTypes.SETTINGS_SET_SEGMENTS:
      return { ...state, segments: action.segments }
    case ActionTypes.SETTINGS_SET_FUNCTION_COLOR:
      return { ...state, functionColor: action.functionColor }
    default: return state
  }
}
