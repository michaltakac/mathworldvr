// Action types
export const CALCULATOR_WRITE_TEXT = 'CALCULATOR_WRITE_TEXT'
export const CALCULATOR_BACKSPACE = 'CALCULATOR_BACKSPACE'
export const CALCULATOR_CLEAR_TEXT = 'CALCULATOR_CLEAR_TEXT'

export const FUNCTION_BOX_SET_POSITION = 'FUNCTION_BOX_SET_POSITION'

export const PARAMETRIC_FUNCTION_SET_EQUATION = 'PARAMETRIC_FUNCTION_SET_EQUATION'

export const SETTINGS_SET_X_MIN = 'SETTINGS_SET_X_MIN'
export const SETTINGS_SET_Y_MIN = 'SETTINGS_SET_Y_MIN'
export const SETTINGS_SET_Z_MIN = 'SETTINGS_SET_Z_MIN'
export const SETTINGS_SET_X_MAX = 'SETTINGS_SET_X_MAX'
export const SETTINGS_SET_Y_MAX = 'SETTINGS_SET_Y_MAX'
export const SETTINGS_SET_Z_MAX = 'SETTINGS_SET_Z_MAX'
export const SETTINGS_SET_SEGMENTS = 'SETTINGS_SET_SEGMENTS'
export const SETTINGS_SET_FUNCTION_COLOR = 'SETTINGS_SET_FUNCTION_COLOR'

export const UI_ATTENTIONBOX_TOGGLE = 'UI_ATTENTIONBOX_TOGGLE'

export const USER_SET_POSITION = 'USER_SET_POSITION'

// Action creators
export const calculatorWriteText = (text) => ({
  type: CALCULATOR_WRITE_TEXT,
  text,
})

export const calculatorBackspace = () => ({
  type: CALCULATOR_BACKSPACE,
})

export const calculatorClearText = () => ({
  type: CALCULATOR_CLEAR_TEXT,
})

export const functionBoxSetPosition = (position) => ({
  type: FUNCTION_BOX_SET_POSITION,
  position,
})

export const parametricFunctionSetEquation = (equation) => ({
  type: PARAMETRIC_FUNCTION_SET_EQUATION,
  equation,
})

export const settingsSetXMin = (xMin) => ({
  type: SETTINGS_SET_X_MIN,
  xMin,
})

export const settingsSetYMin = (yMin) => ({
  type: SETTINGS_SET_Y_MIN,
  yMin,
})

export const settingsSetZMin = (zMin) => ({
  type: SETTINGS_SET_Z_MIN,
  zMin,
})

export const settingsSetXMax = (xMax) => ({
  type: SETTINGS_SET_X_MAX,
  xMax,
})

export const settingsSetYMax = (yMax) => ({
  type: SETTINGS_SET_Y_MAX,
  yMax,
})

export const settingsSetZMax = (zMax) => ({
  type: SETTINGS_SET_Z_MAX,
  zMax,
})

export const settingsSetSegments = (segments) => ({
  type: SETTINGS_SET_SEGMENTS,
  segments,
})

export const settingsSetFunctionColor = (functionColor) => ({
  type: SETTINGS_SET_FUNCTION_COLOR,
  functionColor,
})

export const uiAttentionboxToggle = () => ({
  type: UI_ATTENTIONBOX_TOGGLE,
})

export const userSetPosition = (position) => ({
  type: USER_SET_POSITION,
  position,
})
