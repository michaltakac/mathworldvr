import * as actions from '.'

describe('actions', () => {
  it('should create an action to write text on Calculator', () => {
    const text = 'x * y'
    const expectedAction = {
      type: actions.CALCULATOR_WRITE_TEXT,
      text,
    }
    expect(actions.calculatorWriteText(text)).toEqual(expectedAction)
  })

  it('should create an action to use backspace button on Calculator', () => {
    const expectedAction = {
      type: actions.CALCULATOR_BACKSPACE,
    }
    expect(actions.calculatorBackspace()).toEqual(expectedAction)
  })

  it('should create an action to clear text on Calculator', () => {
    const expectedAction = {
      type: actions.CALCULATOR_CLEAR_TEXT,
    }
    expect(actions.calculatorClearText()).toEqual(expectedAction)
  })

  it('should create an action to set position of FunctionBox', () => {
    const position = { x: 0, y: 0, z: 0 }
    const expectedAction = {
      type: actions.FUNCTION_BOX_SET_POSITION,
      position,
    }
    expect(actions.functionBoxSetPosition(position)).toEqual(expectedAction)
  })

  it('should create an action to set equation for ParametricFunction', () => {
    const equation = 'x * y'
    const expectedAction = {
      type: actions.PARAMETRIC_FUNCTION_SET_EQUATION,
      equation,
    }
    expect(actions.parametricFunctionSetEquation(equation)).toEqual(expectedAction)
  })

  it('should create an action to set xMin parameter in settings', () => {
    const xMin = -999
    const expectedAction = {
      type: actions.SETTINGS_SET_X_MIN,
      xMin,
    }
    expect(actions.settingsSetXMin(xMin)).toEqual(expectedAction)
  })

  it('should create an action to set yMin parameter in settings', () => {
    const yMin = -999
    const expectedAction = {
      type: actions.SETTINGS_SET_Y_MIN,
      yMin,
    }
    expect(actions.settingsSetYMin(yMin)).toEqual(expectedAction)
  })

  it('should create an action to set zMin parameter in settings', () => {
    const zMin = -999
    const expectedAction = {
      type: actions.SETTINGS_SET_Z_MIN,
      zMin,
    }
    expect(actions.settingsSetZMin(zMin)).toEqual(expectedAction)
  })

  it('should create an action to set xMax parameter in settings', () => {
    const xMax = 999
    const expectedAction = {
      type: actions.SETTINGS_SET_X_MAX,
      xMax,
    }
    expect(actions.settingsSetXMax(xMax)).toEqual(expectedAction)
  })

  it('should create an action to set yMax parameter in settings', () => {
    const yMax = 999
    const expectedAction = {
      type: actions.SETTINGS_SET_Y_MAX,
      yMax,
    }
    expect(actions.settingsSetYMax(yMax)).toEqual(expectedAction)
  })

  it('should create an action to set zMax parameter in settings', () => {
    const zMax = 999
    const expectedAction = {
      type: actions.SETTINGS_SET_Z_MAX,
      zMax,
    }
    expect(actions.settingsSetZMax(zMax)).toEqual(expectedAction)
  })

  it('should create an action to set segments parameter in settings', () => {
    const segments = 15
    const expectedAction = {
      type: actions.SETTINGS_SET_SEGMENTS,
      segments,
    }
    expect(actions.settingsSetSegments(segments)).toEqual(expectedAction)
  })

  it('should create an action to set functionColor parameter in settings', () => {
    const functionColor = '#fff'
    const expectedAction = {
      type: actions.SETTINGS_SET_FUNCTION_COLOR,
      functionColor,
    }
    expect(actions.settingsSetFunctionColor(functionColor)).toEqual(expectedAction)
  })

  it('should create an action to toggle AttentionBox', () => {
    const expectedAction = {
      type: actions.UI_ATTENTIONBOX_TOGGLE,
    }
    expect(actions.uiAttentionboxToggle()).toEqual(expectedAction)
  })

  it('should create an action to set position of user', () => {
    const position = { x: 0, y: 0, z: 0 }
    const expectedAction = {
      type: actions.USER_SET_POSITION,
      position,
    }
    expect(actions.userSetPosition(position)).toEqual(expectedAction)
  })
})
