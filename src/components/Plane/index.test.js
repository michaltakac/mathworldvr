import React from 'react'
import renderer from 'react-test-renderer'
import Plane from '.'

jest.mock('react-dom')

describe('Plane', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<Plane />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
