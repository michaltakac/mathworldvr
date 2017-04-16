import React from 'react'
import TestUtils from 'react-dom/test-utils'
import * as Actions from 'actions'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import ConnectedCalculator from '.'

const initialState = {
  calculator: {
    displayText: 'x^2 + y^2',
  },
}

const store = configureMockStore()(initialState)

describe('Calculator', () => {
  let instance
  let container

  beforeEach(() => {
    jest.spyOn(store, 'dispatch')
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedCalculator />
      </Provider>
    )
  })

  it('adds text to displayText prop in Calculator Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedCalculator)
    container.renderedElement.props.writeText('test')
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.CALCULATOR_WRITE_TEXT, text: 'test' }
    )
  })

  it('removes one character from displayText prop in Calculator Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedCalculator)
    container.renderedElement.props.backspace()
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.CALCULATOR_BACKSPACE }
    )
  })

  it('clears text in displayText prop in Calculator Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedCalculator)
    container.renderedElement.props.clearText()
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.CALCULATOR_CLEAR_TEXT }
    )
  })

  it('updates equation in ParametricFunction from displayText prop in Calculator Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedCalculator)
    container.renderedElement.props.updateEquation('x^2 + y^2')
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.PARAMETRIC_FUNCTION_SET_EQUATION, equation: 'x^2 + y^2' }
    )
  })
})
