import reducer from '.'

const initialState = {
  attentionBoxVisible: true,
}

describe('ui', () => {
  it('should return the initial state', () => {
    const next = reducer(initialState, {})
    expect(next).toEqual(initialState)
  })

  it('should close the attention box', () => {
    const next = reducer(initialState, { type: 'UI_ATTENTIONBOX_TOGGLE' })
    expect(next).toEqual({
      attentionBoxVisible: false,
    })
  })

  it('UI_ATTENTIONBOX_TOGGLE', () => {
    const next = reducer(initialState, { type: 'UI_ATTENTIONBOX_TOGGLE' })
    expect(next).toMatchSnapshot()
  })
})
