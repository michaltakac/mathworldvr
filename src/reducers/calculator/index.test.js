import reducer from '.'

const initialState = {
  displayText: 'x^2 + y^2',
}

describe('calculator', () => {
  it('CALCULATOR_WRITE_TEXT', () => {
    const next = reducer(initialState, { type: 'CALCULATOR_WRITE_TEXT', text: '123 * cos(pi)' })
    expect(next).toMatchSnapshot()
  })

  it('CALCULATOR_BACKSPACE', () => {
    const next = reducer(initialState, { type: 'CALCULATOR_BACKSPACE' })
    expect(next).toMatchSnapshot()
  })

  it('CALCULATOR_CLEAR_TEXT', () => {
    const next = reducer(initialState, { type: 'CALCULATOR_CLEAR_TEXT' })
    expect(next).toMatchSnapshot()
  })
})
