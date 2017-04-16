import React from 'react'
import renderer from 'react-test-renderer'
import SettingsController from '.'

jest.mock('react-dom')

describe('SettingsController', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<SettingsController />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
