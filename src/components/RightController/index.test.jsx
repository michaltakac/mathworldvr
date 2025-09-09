import React from 'react'
import renderer from 'react-test-renderer'
import RightController from '.'

jest.mock('react-dom')

describe('RightController', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<RightController />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
