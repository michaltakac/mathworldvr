import reducer from '.'

const initialState = {
  equation: 'x^2 + y^2',
}

describe('parametricFunction', () => {
  it('PARAMETRIC_FUNCTION_SET_EQUATION', () => {
    const next = reducer(initialState, { type: 'PARAMETRIC_FUNCTION_SET_EQUATION', equation: 'x^2 - y^2' })
    expect(next).toMatchSnapshot()
  })
})
