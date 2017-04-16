import reducer from '.'

const initialState = {
  attentionBoxVisible: true,
}

describe('ui', () => {
  it('UI_ATTENTIONBOX_TOGGLE', () => {
    const next = reducer(initialState, { type: 'UI_ATTENTIONBOX_TOGGLE' })
    expect(next).toMatchSnapshot()
  })
})
