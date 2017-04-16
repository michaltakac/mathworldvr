import React from 'react'
import renderer from 'react-test-renderer'
import LeftController from '.'

jest.mock('react-dom')

describe('LeftController', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<LeftController />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
