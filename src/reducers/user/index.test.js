import reducer from '.'

const initialState = {
  position: { x: 0, y: 0, z: 0 },
}

describe('user', () => {
  it('should return the initial state', () => {
    const next = reducer(initialState, {})
    expect(next).toEqual(initialState)
  })

  it('USER_SET_POSITION', () => {
    const next = reducer(initialState, { type: 'USER_SET_POSITION', position: { x: 10, y: 0, z: 10 } })
    expect(next).toMatchSnapshot()
  })
})
