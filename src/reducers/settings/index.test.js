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
  it('SETTINGS_SET_X_MIN', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_X_MIN', xMin: -999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Y_MIN', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Y_MIN', yMin: -999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Z_MIN', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Z_MIN', zMin: -999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_X_MAX', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_X_MAX', xMax: 999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Y_MAX', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Y_MAX', yMax: 999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_Z_MAX', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_Z_MAX', zMax: 999 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_SEGMENTS', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_SEGMENTS', segments: 15 })
    expect(next).toMatchSnapshot()
  })

  it('SETTINGS_SET_FUNCTION_COLOR', () => {
    const next = reducer(initialState, { type: 'SETTINGS_SET_FUNCTION_COLOR', functionColor: '#fff' })
    expect(next).toMatchSnapshot()
  })
})
