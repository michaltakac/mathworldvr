import reducer from '.'

const initialState = {
  position: { x: 0.65, y: 1.45, z: -1.03 },
}

describe('functionBox', () => {
  it('FUNCTION_BOX_SET_POSITION', () => {
    const next = reducer(initialState, { type: 'FUNCTION_BOX_SET_POSITION', position: { x: 0, y: 0, z: 0 } })
    expect(next).toMatchSnapshot()
  })
})
