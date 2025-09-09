import React from 'react'
import renderer from 'react-test-renderer'
import Sky from '.'

jest.mock('react-dom')

describe('Sky', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<Sky />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
