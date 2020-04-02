import React from 'react'
import renderer from 'react-test-renderer'
import Text from '.'

jest.mock('react-dom')

describe('Text', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<Text />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
