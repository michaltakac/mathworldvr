import React from 'react'
import renderer from 'react-test-renderer'
import AttentionBox from '.'

jest.mock('react-dom')

describe('AttentionBox', () => {
  it('renders <div>', () => {
    const tree = renderer.create(<AttentionBox />).toJSON()
    expect(tree.type).toBe('div')
  })
})
