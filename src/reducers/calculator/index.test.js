import reducer from '.'

const initialState = {
  displayText: 'x^2 + y^2',
}

describe('calculator', () => {
  it('should return the initial state', () => {
    const next = reducer(initialState, {})
    expect(next).toEqual(initialState)
  })

  it('CALCULATOR_WRITE_TEXT', () => {
    const next = reducer(initialState, { type: 'CALCULATOR_WRITE_TEXT', text: '123 * cos(pi)' })
    expect(next).toEqual({ ...initialState, displayText: 'x^2 + y^2123 * cos(pi)' })
    expect(next).toMatchSnapshot()
  })

  it('CALCULATOR_BACKSPACE', () => {
    const next = reducer(initialState, { type: 'CALCULATOR_BACKSPACE' })
    expect(next).toEqual({ ...initialState, displayText: 'x^2 + y^' })
    expect(next).toMatchSnapshot()
  })

  it('CALCULATOR_CLEAR_TEXT', () => {
    const next = reducer(initialState, { type: 'CALCULATOR_CLEAR_TEXT' })
    expect(next).toEqual({ ...initialState, displayText: '' })
    expect(next).toMatchSnapshot()
  })
})
