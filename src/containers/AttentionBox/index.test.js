import React from 'react'
import TestUtils from 'react-dom/test-utils'
import * as Actions from 'actions'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import ConnectedAttentionBox from '.'

const initialState = {
  ui: {
    attentionBoxVisible: true,
  },
}

const store = configureMockStore()(initialState)

describe('AttentionBox', () => {
  let instance
  let container

  beforeEach(() => {
    jest.spyOn(store, 'dispatch')
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedAttentionBox />
      </Provider>
    )
  })

  it('sets attentionBoxVisible prop in AttentionBox Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedAttentionBox)
    container.renderedElement.props.toggleAttentionBox()
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.UI_ATTENTIONBOX_TOGGLE }
    )
  })
})
