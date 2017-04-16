import reducer from '.'

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

describe('settings', () => {
  it('should return the initial state', () => {
    const next = reducer(initialState, {})
    expect(next).toEqual(initialState)
  })

  it('SETTINGS_SET_X_MIN', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_X_MIN', xMin: -999 })
    expect(next).toEqual({ ...initialState, xMin: -999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Y_MIN', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Y_MIN', yMin: -999 })
    expect(next).toEqual({ ...initialState, yMin: -999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Z_MIN', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Z_MIN', zMin: -999 })
    expect(next).toEqual({ ...initialState, zMin: -999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_X_MAX', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_X_MAX', xMax: 999 })
    expect(next).toEqual({ ...initialState, xMax: 999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Y_MAX', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Y_MAX', yMax: 999 })
    expect(next).toEqual({ ...initialState, yMax: 999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Z_MAX', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Z_MAX', zMax: 999 })
    expect(next).toEqual({ ...initialState, zMax: 999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_SEGMENTS', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_SEGMENTS', segments: 15 })
    expect(next).toEqual({ ...initialState, segments: 15 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_FUNCTION_COLOR', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_FUNCTION_COLOR', functionColor: '#fff' })
    expect(next).toEqual({ ...initialState, functionColor: '#fff' })
    expect(next).toMatchSnapshot()
  })
})
