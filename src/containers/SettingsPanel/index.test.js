import React from 'react'
import TestUtils from 'react-dom/test-utils'
import * as Actions from 'actions'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import ConnectedSettingsPanel from '.'

const initialState = {
  settings: {
    xMin: -1,
    yMin: -1,
    zMin: -4,
    xMax: 1,
    yMax: 1,
    zMax: 4,
    segments: 30,
    functionColor: '#bada55',
  },
}

const store = configureMockStore()(initialState)

describe('SettingsPanel', () => {
  let instance
  let container

  beforeEach(() => {
    jest.spyOn(store, 'dispatch')
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedSettingsPanel />
      </Provider>
    )
  })

  it('sets xMin prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setXMin(-999)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_X_MIN, xMin: -999 }
    )
  })

  it('sets yMin prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setYMin(-999)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_Y_MIN, yMin: -999 }
    )
  })

  it('sets zMin prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setZMin(-999)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_Z_MIN, zMin: -999 }
    )
  })

  it('sets xMax prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setXMax(999)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_X_MAX, xMax: 999 }
    )
  })

  it('sets yMax prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setYMax(999)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_Y_MAX, yMax: 999 }
    )
  })

  it('sets zMax prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setZMax(999)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_Z_MAX, zMax: 999 }
    )
  })

  it('sets segments prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setSegments(15)
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_SEGMENTS, segments: 15 }
    )
  })

  it('sets functionColor prop in SettingsPanel Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedSettingsPanel)
    container.renderedElement.props.setFunctionColor('#fff')
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: Actions.SETTINGS_SET_FUNCTION_COLOR, functionColor: '#fff' }
    )
  })
})
