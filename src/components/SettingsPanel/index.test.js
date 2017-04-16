import React from 'react'
import renderer from 'react-test-renderer'
import SettingsPanel from '.'

jest.mock('react-dom')

describe('SettingsPanel', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<SettingsPanel />).toJSON()
    expect(tree.type).toBe('a-entity')
  })

  it('renders the tree consistently', () => {
    const tree = renderer.create(<SettingsPanel />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
