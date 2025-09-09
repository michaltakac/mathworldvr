import React from 'react'
import renderer from 'react-test-renderer'
import Lights from '.'

jest.mock('react-dom')

describe('Lights', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<Lights />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
